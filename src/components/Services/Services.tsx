import Service from './Service'

const Services = ({ data }: any) => {
  return (
    <ul className="grid grid-cols-3 gap-8">
      {data?.map((service: any) => (
        <li key={service.id}>
          <Service
            title={service.title}
            category={service.category_ua}
            description={service.short_text}
            imgUrl={service.thumbnail_url}
            slug={service.slug}
          />
        </li>
      ))}
    </ul>
  )
}

export default Services
