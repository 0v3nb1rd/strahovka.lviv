import { useState, forwardRef, ReactNode, useRef, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'

import { getServiceCat } from '@/lib/_actions/services'
import { revalidatePath } from 'next/cache'
import { usePathname } from 'next/navigation'

interface Props {
  text: string
  children?: ReactNode
}

export const EditTitle = forwardRef<HTMLHeadingElement, Props>((props, ref) => {
  const TINY_SECRET = process.env.NEXT_PUBLIC_TINY_KEY!
  const editorRef = useRef<any>('')

  const [value, setValue] = useState('')
  const [content, setContent] = useState('')

  const path = usePathname()

  const updService = async (html: string) => {
    const res = await fetch('/api/edit/service', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 9, html }),
    })
    const data = await res.json()
  }
  const onSubmit = () => {
    if (editorRef.current) {
      // console.log(editorRef.current.getContent())
      updService(editorRef.current.getContent())
    }
  }

  return (
    <>
      <div className=" relative mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
        <Editor
          apiKey={TINY_SECRET}
          inline
          // tagName="h1"
          plugins={['quickbars']}
          // scriptLoading={{ async: true}}
          init={{
            menubar: false,
            toolbar: false,
            quickbars_insert_toolbar: 'undo redo',
            quickbars_selection_toolbar: 'bold italic underline',
            branding: false,
          }}
          initialValue={props?.text}
          onInit={(e, editor) => {
            editorRef.current = editor
          }}
        />
      </div>
      <button type="button" onClick={onSubmit} className="btn">
        send
      </button>
    </>
  )
})
