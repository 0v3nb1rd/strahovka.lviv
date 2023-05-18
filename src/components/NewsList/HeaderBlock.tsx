'use client'

import { BiShow, BiTimeFive } from 'react-icons/bi'
import Badge from '../Badge'
import prisma from '@/lib/prisma'
import { useEffect, useState } from 'react'

// import { useEffect } from 'react'

interface Props {
  id?: number
  views?: number
  category?: string | null
  date?: Date | null
  isFullPage?: boolean
}

export default function HeaderBlock({ id, date, views, category, isFullPage }: Props) {
  const [viewsCount, setViesCount] = useState(views || 0)

  useEffect(() => {
    if (isFullPage) {
      const incViews = async () => {
        await fetch('/api/news/view', {
          next: { revalidate: 10 },
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        })
        setViesCount(viewsCount + 1)
      }
      incViews()
    }
  }, [])

  return (
    <ul className="header mb-3 flex gap-6">
      <li className="">
        <div>
          <Badge variant="primary">{category}</Badge>
        </div>
      </li>
      <li className="flex items-center gap-2">
        <BiTimeFive />
        <span className="countdown text-base">
          {date?.toLocaleString('uk-UA', { year: '2-digit', month: '2-digit', day: '2-digit' })}
        </span>
      </li>
      <li className="ml-auto flex items-center gap-2">
        <BiShow fontSize={22} />
        <span className="countdown w-5 text-base">
          <span style={{ '--value': viewsCount } as React.CSSProperties}></span>
        </span>
      </li>
    </ul>
  )
}
