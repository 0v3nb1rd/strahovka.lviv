import sanitizeHtml from 'sanitize-html'

// Server-side only: sanitize-html pulls in htmlparser2 + postcss, keep it out of client bundles.
// HTML from the DB is cleaned twice: on write (admin API) and on output (pages using
// `dangerouslySetInnerHTML`), so content saved before this change is covered too.

const SCHEMES = ['http', 'https', 'mailto', 'tel']

// Titles and badges (`title`, `category_ua`): only the formatting the inline editor offers.
const INLINE: sanitizeHtml.IOptions = {
  allowedTags: ['b', 'strong', 'i', 'em', 'u', 'br'],
  allowedAttributes: {},
}

// Article and service bodies (`full_text`).
const RICH: sanitizeHtml.IOptions = {
  allowedTags: [
    'p',
    'br',
    'b',
    'strong',
    'i',
    'em',
    'u',
    's',
    'q',
    'blockquote',
    'h2',
    'h3',
    'h4',
    'ul',
    'ol',
    'li',
    'a',
    'img',
    'figure',
    'figcaption',
  ],
  allowedAttributes: {
    a: ['href', 'title', 'target', 'rel'],
    img: ['src', 'alt', 'width', 'height', 'loading'],
  },
  allowedSchemes: SCHEMES,
  allowedSchemesByTag: { img: ['http', 'https'] },
  allowProtocolRelative: false,
  transformTags: {
    // A new tab must not get `window.opener` access to this page; existing rel tokens (nofollow) are kept.
    a: (tagName, attribs) => {
      if (attribs.target !== '_blank') return { tagName, attribs }
      const rel = new Set([...(attribs.rel ?? '').split(/\s+/).filter(Boolean), 'noopener', 'noreferrer'])
      return { tagName, attribs: { ...attribs, rel: [...rel].join(' ') } }
    },
  },
}

export const sanitizeInline = (html: string | null | undefined): string => (html ? sanitizeHtml(html, INLINE) : '')

export const sanitizeRich = (html: string | null | undefined): string => (html ? sanitizeHtml(html, RICH) : '')
