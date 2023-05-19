'use client'

import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

import { BiLike, BiShare, BiMessageAltDetail, BiBookmark } from 'react-icons/bi'

import prisma from '@/lib/prisma'

interface Props {
  id?: number
  likes?: number
}

export default function HeaderBlock({ id, likes }: Props) {
  const [likesCount, setLikesCount] = useState(likes || 0)
  const [isLiked, setIsLiked] = useState(false)

  const handleLikes = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!isLiked) {
      setLikesCount(likesCount + 1)
      setIsLiked(true)
      await fetch('/api/news/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action: 'increment' }),
      })
    } else {
      setLikesCount(likesCount - 1)
      setIsLiked(false)
      await fetch('/api/news/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action: 'decrement' }),
      })
    }
  }

  return (
    <div className="flex gap-10 px-5 py-4">
      <button className="group flex items-center gap-2 transition">
        <BiMessageAltDetail fontSize={22} className="transition group-hover:scale-110" />
        <span className="countdown w-5 text-base">
          <span style={{ '--value': 0 } as React.CSSProperties}></span>
        </span>
      </button>
      <button className="group">
        <BiBookmark fontSize={22} className="transition group-hover:scale-110" />
      </button>
      <button className="group">
        <BiShare fontSize={22} className="transition group-hover:scale-110" />
      </button>
      <button onClick={handleLikes} className="group z-20 ml-auto flex items-center gap-2">
        <BiLike fontSize={22} className={`transition group-hover:scale-110 ${isLiked ? 'text-red-500' : ''}`} />
        <span className="countdown w-5 text-base">
          <span style={{ '--value': likesCount } as React.CSSProperties}></span>
        </span>
      </button>
    </div>
  )
}
