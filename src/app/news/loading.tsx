import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonNews = ({ ...rest }) => (
  <ContentLoader
    className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white"
    speed={2}
    width={640}
    height={546}
    viewBox="0 0 640 546"
    backgroundColor="#cfe8f7"
    foregroundColor="#ecebeb"
    {...rest}
  >
    <rect x="20" y="20" rx="4" ry="4" width="84" height="24" />
    <rect x="128" y="20" rx="4" ry="4" width="102" height="24" />

    <rect x="20" y="60" rx="4" ry="4" width="480" height="16" />
    <rect x="20" y="82" rx="4" ry="4" width="420" height="16" />

    <circle cx="610" cy="32" r="15" />

    <rect y="112" width="100%" height="360" />

    <rect x="20" y="500" rx="4" ry="4" width="84" height="24" />
    <rect x="128" y="500" rx="4" ry="4" width="102" height="24" />
    <circle cx="610" cy="515" r="15" />
  </ContentLoader>
)

export default SkeletonNews
