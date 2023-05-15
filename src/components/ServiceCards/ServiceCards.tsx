'use client'

import { useEffect, useRef, useState } from 'react'

import Card from './Card'
import Modal from '@/components/Modal/Modal'

const serviceData = {
  top: [
    {
      id: '1',
      title: 'Автоцивілка',
      desc: 'Безпека вашого авто та грошей.',
      icon_url: '/icons/man-driving.svg',
      slug: 'autocivilka',
    },
    {
      id: '2',
      title: 'Зелена карта',
      desc: 'Комфортні подорожі за кордоном.',
      icon_url: '/icons/car-new.svg',
      slug: 'green-card',
    },
    {
      id: '3',
      title: 'КАСКО',
      desc: 'Захистіть свій автомобіль від будь-яких небезпек.',
      icon_url: '/icons/insurance-user.svg',
      slug: 'kasko',
    },
  ],
}

export default function ServiceCards() {
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

  return (
    <div>
      <ul className="flex items-center justify-center gap-4">
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
