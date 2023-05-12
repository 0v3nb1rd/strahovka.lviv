'use client'

import ContentLoader from 'react-content-loader'

export default function Skeleton({ ...rest }) {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      viewBox="0 0 412 622"
      backgroundColor="#cfe8f7"
      foregroundColor="#ecebeb"
      {...rest}
    >
      <rect x="47%" y="40" rx="4" ry="4" transform="translate(-50)" width="140" height="24" />

      <rect x="35%" y="90" rx="4" ry="4" transform="translate(-50)" width="230" height="30" />
      <rect x="40%" y="130" rx="4" ry="4" transform="translate(-50)" width="190" height="30" />

      <rect x="60" y="190" rx="4" ry="4" width="70%" height="18" />
      <rect x="50" y="215" rx="4" ry="4" width="75%" height="18" />
      <rect x="55" y="240" rx="4" ry="4" width="72%" height="18" />
      <rect x="120" y="265" rx="4" ry="4" width="40%" height="18" />

      <rect x="32" y="340" transform="translate(-50%,-50%)" width="348" height="240" rx="16" />
    </ContentLoader>
  )
}
