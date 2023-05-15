'use client'

import cn from 'classnames'

type typeVariant = 'primary' | 'secondary'
interface BadgeProps {
  variant: typeVariant
  linked?: boolean
  size?: 'sm' | 'md' | 'lg' | 'lg'
  children: React.ReactNode
}

export default function Badge({ variant = 'primary', size = 'lg', linked, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'badge',
        {
          'badge-md': size === 'md',
          'badge-lg': size === 'lg',
        },
        {
          'badge-primary text-yellow-300': variant === 'primary',
          'badge-secondary text-yellow-800': variant === 'secondary',
        }
        // {
        //   // ['link']
        //   // 'hover:scale-110 hover:shadow-inner': link === true,
        //   // 'hover:scale-110 hover:shadow-inner': link,
        // }
      )}
    >
      {children}
    </span>
  )
}
