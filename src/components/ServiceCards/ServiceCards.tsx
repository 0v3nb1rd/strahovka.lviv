'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

import Card from './Card'
import { Service } from '@prisma/client'

const Modal = dynamic(() => import('@/components/Modal/Modal'), { ssr: false })

const serviceData = {
  top: [
    {
      id: 1,
      title: 'Autocivilka',
      title_ua: 'Автоцивілка',
      short_text: 'Безпека вашого авто та грошей.',
      icon_url: '/icons/man-driving.svg',
      slug: 'autocivilka',
    },
    {
      id: 2,
      title: 'Green card',
      title_ua: 'Зелена карта',
      short_text: 'Комфортні подорожі за кордоном.',
      icon_url: '/icons/car-new.svg',
      slug: 'green-card',
    },
    {
      id: 3,
      title: 'KASKO',
      title_ua: 'КАСКО',
      short_text: 'Захистіть свій автомобіль від будь-яких небезпек.',
      icon_url: '/icons/insurance-user.svg',
      slug: 'kasko',
    },
  ],
}

export default function ServiceCards({ service }: { service?: Service[] }) {
  const modalRef = useRef(null)

  const [modal, setModal] = useState<any>({
    on: false,
    title: 'Замовити послугу',
    desc: '',
  })

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (e.target === modalRef.current) {
        setModal({ ...modal, on: false })
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleClick = (obj: any) => {
    setModal({ ...modal, ...obj, on: true })
  }

  if (service) {
    return (
      <div>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {service.map((card) => (
            <li key={card.id}>
              <Card {...card} onClick={(obj: any) => handleClick(obj)} />
            </li>
          ))}
        </ul>
        <Modal ref={modalRef} variant="sm" icon_url={modal.icon_url} title={modal.title} checked={modal.on} />
      </div>
    )
  }
  return (
    <div>
      <ul className="flex-wrap max-lg:flex-col flex lg:items-center justify-center gap-2 lg:gap-4">
        {serviceData.top.map((card) => (
          <li key={card.id}>
            <Card {...card} onClick={(obj: any) => handleClick(obj)} />
          </li>
        ))}
      </ul>
      <Modal ref={modalRef} variant="sm" icon_url={modal.icon_url} title={modal.title} checked={modal.on} />
    </div>
  )
}
