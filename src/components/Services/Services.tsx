import Service from './Service'

const Services = ({ data }: any) => (
  <ul className="grid grid-cols-3 gap-8">
    {data.map((service: any) => (
      <Service
        key={service.title}
        title={service.title}
        category={service.category}
        description={service.description}
        imgUrl={service.img}
      />
    ))}
  </ul>
)

export default Services
