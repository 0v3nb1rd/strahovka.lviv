'use client'

import { DiscussionEmbed } from 'disqus-react'

type post = {
  id: string
  title?: string
  slug?: string
}
interface Props {
  post: post
  path?: string
}

export default function DisqusComments({ post, path }: Props) {
  const disqusShortname = 'strahovka-lviv'

  const disqusConfig = {
    url: path,
    identifier: post.id, // Single post id
    title: post.title, // Single post title
  }
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  )
}
