import { ServiceList } from '@/components/Services'
import { getServiceCat } from '@/lib/_actions/services'

export default async function ServicePage() {
  const { serviceCat } = await getServiceCat()

  return (
    <section className="p-4">
      <div className="container">
        <div className="title">
          <h1 className="mr-4 inline-flex text-lg font-bold">News page</h1>
          length: {serviceCat?.length}
        </div>
        <div className="flex w-full flex-col">
          <div className="divider"></div>
        </div>
        <ServiceList isAdm serviceCat={serviceCat} />
      </div>
    </section>
  )
}
