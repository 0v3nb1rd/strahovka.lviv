import Link from 'next/link'
import type { LeadStatus } from '@/db/schema'

import { currentEnv, LEAD_ENVS, LeadPayload, listLeads } from '@/lib/leads'
import RetryButton from './RetryButton'

export const dynamic = 'force-dynamic'

const TYPE_LABEL = { service: 'Послуга', contacts: 'Контакти', subscribe: 'Підписка' } as const
const STATUS_LABEL: Record<LeadStatus, string> = { new: 'нова', delivered: 'доставлено', failed: 'не доставлено' }
const STATUS_CLASS: Record<LeadStatus, string> = {
  new: 'badge-warning',
  delivered: 'badge-success',
  failed: 'badge-error',
}

const formatDate = (d: Date) =>
  d.toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv', dateStyle: 'short', timeStyle: 'short' })

type SearchParams = { env?: string; status?: string }

export default async function LeadsPage({ searchParams }: { searchParams: SearchParams }) {
  // Default: leads of this deployment's environment, so test leads stay out of sight on production.
  const env =
    searchParams.env === 'all' || LEAD_ENVS.includes(searchParams.env as never) ? searchParams.env! : currentEnv()
  const status =
    searchParams.status && searchParams.status in STATUS_LABEL ? (searchParams.status as LeadStatus) : undefined
  const leads = await listLeads({ env, status })

  const href = (p: SearchParams) => {
    const q = new URLSearchParams({ env, ...(status ? { status } : {}), ...p } as Record<string, string>)
    if (!q.get('status')) q.delete('status')
    return `/adm/leads/?${q}`
  }

  return (
    <section className="p-4">
      <div className="container">
        <h1 className="text-lg font-bold">Заявки</h1>

        <nav aria-label="Фільтри" className="my-4 flex flex-wrap gap-2 text-sm">
          {[...LEAD_ENVS, 'all'].map((e) => (
            <Link
              key={e}
              href={href({ env: e })}
              className={`btn-sm btn ${e === env ? 'btn-primary' : 'btn-ghost'}`}
              aria-current={e === env ? 'page' : undefined}
            >
              {e === 'all' ? 'усі середовища' : e}
            </Link>
          ))}
          <span className="mx-2 border-l" aria-hidden="true" />
          <Link
            href={href({ status: '' })}
            className={`btn-sm btn ${!status ? 'btn-primary' : 'btn-ghost'}`}
            aria-current={!status ? 'page' : undefined}
          >
            усі статуси
          </Link>
          <Link
            href={href({ status: 'failed' })}
            className={`btn-sm btn ${status === 'failed' ? 'btn-primary' : 'btn-ghost'}`}
            aria-current={status === 'failed' ? 'page' : undefined}
          >
            не доставлені
          </Link>
        </nav>

        {leads.length === 0 ? (
          <p className="text-gray-500">Заявок немає.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-compact table w-full">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Дата</th>
                  <th scope="col">Тип</th>
                  <th scope="col">Клієнт</th>
                  <th scope="col">Повідомлення</th>
                  <th scope="col">Доставка</th>
                  <th scope="col">Дія</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => {
                  const p = lead.payload as LeadPayload
                  return (
                    <tr key={lead.id} className="align-top">
                      <td>{lead.id}</td>
                      <td className="whitespace-nowrap">
                        {formatDate(lead.createdAt)}
                        {lead.env !== 'production' && <div className="badge-ghost badge badge-sm">{lead.env}</div>}
                      </td>
                      <td>
                        {TYPE_LABEL[lead.type]}
                        {p.title && (
                          <div className="max-w-[12rem] whitespace-normal text-xs text-gray-500">{p.title}</div>
                        )}
                        {lead.source && <div className="text-xs text-gray-400">{lead.source}</div>}
                      </td>
                      <td className="whitespace-normal">
                        {p.fullName && <div>{p.fullName}</div>}
                        {p.phone && (
                          <a className="link" href={`tel:${p.phone}`}>
                            {p.phone}
                          </a>
                        )}
                        {p.email && (
                          <div>
                            <a className="link" href={`mailto:${p.email}`}>
                              {p.email}
                            </a>
                          </div>
                        )}
                      </td>
                      <td className="max-w-xs whitespace-pre-wrap break-words">{p.message}</td>
                      <td className="whitespace-normal">
                        <span className={`badge ${STATUS_CLASS[lead.status]}`}>{STATUS_LABEL[lead.status]}</span>
                        <div className="text-xs">
                          Telegram {lead.telegramDeliveredAt ? '✓' : '✗'} · пошта {lead.emailDeliveredAt ? '✓' : '✗'} ·
                          спроб {lead.attempts}
                        </div>
                        {lead.lastError && <div className="max-w-[16rem] text-xs text-red-600">{lead.lastError}</div>}
                      </td>
                      <td>{lead.status !== 'delivered' && <RetryButton id={lead.id} />}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}
