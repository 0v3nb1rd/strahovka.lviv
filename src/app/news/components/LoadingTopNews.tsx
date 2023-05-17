import ContentLoader from 'react-content-loader'

export default function LoadingTopNews({ ...rest }) {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={220}
      viewBox="0 0 280 220"
      backgroundColor="#cfe8f7"
      foregroundColor="#ecebeb"
      {...rest}
    >
      <rect x="0" y="10" rx="4" ry="4" width="40" height="12" />
      <rect x="0" y="30" rx="4" ry="4" width="210" height="16" />
      <rect x="0" y="50" rx="4" ry="4" width="210" height="16" />
      <rect x="230" y="10" rx="4" ry="4" width="40" height="56" />

      <rect x="0" y="85" rx="4" ry="4" width="40" height="12" />
      <rect x="0" y="105" rx="4" ry="4" width="210" height="16" />
      <rect x="0" y="125" rx="4" ry="4" width="210" height="16" />
      <rect x="230" y="85" rx="4" ry="4" width="40" height="56" />

      <rect x="0" y="160" rx="4" ry="4" width="40" height="12" />
      <rect x="0" y="180" rx="4" ry="4" width="210" height="16" />
      <rect x="0" y="200" rx="4" ry="4" width="210" height="16" />
      <rect x="230" y="160" rx="4" ry="4" width="40" height="56" />
    </ContentLoader>
  )
}
