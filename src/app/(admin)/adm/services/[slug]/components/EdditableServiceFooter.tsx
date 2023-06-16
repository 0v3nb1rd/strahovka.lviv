'use client'

import { useState, forwardRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

interface Props {
  text?: string
  ref: string
}

// export function EditableServiceFooter({ text }: Props) {
//   const TINY_SECRET = process.env.NEXT_PUBLIC_TINY_KEY

//   const [value, setValue] = useState(text)

//   return (
//     <>
//       <div className="mx-auto flex max-w-[840px] flex-col gap-4 text-lg font-semibold text-black/60">
//         <Editor
//           ref={ref}
//           init={{
//             menubar: false,
//             tinydrive_upload_path: '/',
//             skin: 'small',
//             icons: 'small',
//             // icons: 'bootstrap',
//             plugins: [
//               'tinydrive',
//               'a11ychecker',
//               'advlist',
//               'autolink',
//               'lists',
//               'link',
//               'image',
//               'charmap',
//               'anchor',
//               'searchreplace',
//               'visualblocks',
//               'code',
//               'fullscreen',
//               'insertdatetime',
//               'media',
//               'table',
//               'preview',
//               'help',
//               'wordcount',
//             ],
//             toolbar:
//               'undo redo | blocks | ' +
//               'bold italic forecolor | alignleft aligncenter ' +
//               'alignright alignjustify | bullist numlist outdent indent | ' +
//               'imagetools image media template link | ' +
//               'removeformat code',
//             // content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }', // all styles
//           }}
//           inline
//           // toolbar={'undo redo | bold italic underline'}
//           apiKey={TINY_SECRET}
//           initialValue={text && text.trim()}
//         />
//       </div>
//     </>
//   )
// }

export const EditableServiceFooter = forwardRef(function ({ text, ref }: Props) {
  const TINY_SECRET = process.env.NEXT_PUBLIC_TINY_KEY
  const [value, setValue] = useState(text)

  return (
    <>
      <div className="mx-auto flex max-w-[840px] flex-col gap-4 text-lg font-semibold text-black/60">
        <Editor
          ref={ref}
          init={{
            menubar: false,
            tinydrive_upload_path: '/',
            skin: 'small',
            icons: 'small',
            // icons: 'bootstrap',
            plugins: [
              'tinydrive',
              'a11ychecker',
              'advlist',
              'autolink',
              'lists',
              'link',
              'image',
              'charmap',
              'anchor',
              'searchreplace',
              'visualblocks',
              'code',
              'fullscreen',
              'insertdatetime',
              'media',
              'table',
              'preview',
              'help',
              'wordcount',
            ],
            toolbar:
              'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'imagetools image media template link | ' +
              'removeformat code',
            // content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }', // all styles
          }}
          inline
          // toolbar={'undo redo | bold italic underline'}
          apiKey={TINY_SECRET}
          initialValue={text && text.trim()}
        />
      </div>
    </>
  )
})
