'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RetryButton({ id }: { id: number }) {
  const router = useRouter()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const retry = async () => {
    setBusy(true)
    setError(null)
    try {
      const res = await fetch('/api/leads/retry/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })
      const body = await res.json().catch(() => null)
      if (!res.ok) setError(body?.error ?? `HTTP ${res.status}`)
      else if (body?.status !== 'delivered') setError(body?.lastError ?? 'Не доставлено')
      router.refresh()
    } catch {
      setError('Мережева помилка')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        onClick={retry}
        disabled={busy}
        className={`btn-outline btn-xs btn ${busy ? 'loading' : ''}`}
      >
        Повторити
      </button>
      <span role="status" aria-live="polite" className="max-w-[12rem] text-xs text-red-600">
        {error}
      </span>
    </div>
  )
}
