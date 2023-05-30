import Link from 'next/link'

const adminRoutes = [
  {
    id: 1,
    label: 'News',
    to: '/adm/blog',
  },
  {
    id: 2,
    label: 'Services',
    to: '/adm/services',
  },
]

export function Nav({ ...props }) {
  return (
    <ul {...props}>
      <div className="mb-4">
        <Link className="no-animation bordered flex justify-center" href="/adm">
          👨‍💻 Admin Panel
        </Link>
      </div>
      {adminRoutes.map((itm) => (
        <li key={itm.id}>
          <Link className="btn w-full text-white" href={itm.to}>
            {itm.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
