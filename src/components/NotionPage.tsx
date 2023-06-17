'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'

import useMounted from '@/hooks/useMounted'
import '@/styles/notion.css'

interface Props {
  post: any
  recordMap: ExtendedRecordMap
}

export default function NotionPage({ post, recordMap }: Props) {
  const mounted = useMounted()

  return (
    <NotionRenderer
      // darkMode={mounted ? theme === 'dark' : false}
      recordMap={recordMap}
      fullPage
      forceCustomImages
      showTableOfContents
      disableHeader
      pageHeader={
        <div className="mb-4">
          {/* <CategoryList categories={post.categories} /> */}

          <div className="flex space-x-2">
            {post.categories.map((category: any) => (
              <span key={category} className="rounded-full bg-secondary px-4 py-2 text-sm">
                {category}
              </span>
            ))}
          </div>
        </div>
      }
      components={{
        Code,
        Collection,
        Equation,
        Modal,
        Pdf,
        nextLink: Link,
        nextImage: Image,
      }}
    />
  )
}

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code))
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection))
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation))
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
  ssr: false,
})
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
  ssr: false,
})
