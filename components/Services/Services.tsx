import Image from 'next/image'

import img_services from '@assets/photos/poslugi.jpg'
import img_carInsurance from '@assets/photos/avtostrahuvannya.jpg'
import img_life from '@assets/photos/life.jpg'
import img_travel from '@assets/photos/travel.jpg'

const Services = () => {
  return (
    <>
      <article className=" flex-1 rounded-2xl  bg-white px-8 py-10 shadow-md">
        <div className="flex h-full flex-col gap-14">
          <div className="title mx-auto max-w-2xl">
            <div className="flex flex-col items-center">
              <span className="badge-secondary badge badge-lg mb-3">Автострахування</span>
              <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
                Страхування автомобілів
              </h1>
              <p className="text-center text-lg font-semibold text-black/60">
                Статистичні дані кажуть нам, що навіть водії з великим досвідом також часом потрапляють у різні
                негативні пригоди на дорогах.
              </p>
            </div>
          </div>

          <div className="relative mt-auto h-[240px] overflow-hidden rounded-2xl">
            <Image className="object-contain" src={img_carInsurance} fill alt="image cooperation" />
          </div>
        </div>
      </article>

      <article className=" flex-1 rounded-2xl  bg-white px-8 py-10 shadow-md">
        <div className="flex h-full flex-col gap-14">
          <div className="title mx-auto max-w-2xl">
            <div className="flex flex-col items-center">
              <span className="badge-secondary badge badge-lg mb-3">Здоров’я</span>
              <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
                Страхування життя
              </h1>
              <p className="text-center text-lg font-semibold text-black/60">
                Сьогодні майже всі знають про можливість медичного страхування.
              </p>
            </div>
          </div>

          <div className="relative mt-auto h-[240px] overflow-hidden rounded-2xl">
            <Image className="object-contain" src={img_life} fill alt="image cooperation" />
          </div>
        </div>
      </article>

      <article className=" flex-1 rounded-2xl  bg-white px-8 py-10 shadow-md">
        <div className="flex h-full flex-col gap-14">
          <div className="title mx-auto max-w-2xl">
            <div className="flex flex-col items-center">
              <span className="badge-secondary badge badge-lg mb-3">Майно</span>
              <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
                Страхування майна
              </h1>
              <p className="text-center text-lg font-semibold text-black/60">
                Всi знають, як багато енергiї, сил i засобiв ми зазвичай вкладаємо в облаштування домашнього вогнища.
              </p>
            </div>
          </div>

          <div className="relative mt-auto h-[240px] overflow-hidden rounded-2xl">
            <Image className="object-contain" src={img_services} fill alt="image cooperation" />
          </div>
        </div>
      </article>

      <article className=" flex-1 rounded-2xl  bg-white px-8 py-10 shadow-md">
        <div className="flex h-full flex-col gap-14">
          <div className="title mx-auto max-w-2xl">
            <div className="flex flex-col items-center">
              <span className="badge-secondary badge badge-lg mb-3">Подорожі</span>
              <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
                Страхування туриста
              </h1>
              <p className="text-center text-lg font-semibold text-black/60">
                Відпустка, поїздки, подорожі — заповітна мрія будь-якої людини, адже цієї події ми чекаємо протягом
                довгих робочих буднів.
              </p>
            </div>
          </div>

          <div className="relative mt-auto h-[240px] overflow-hidden rounded-2xl">
            <Image className="object-contain" src={img_travel} fill alt="image cooperation" />
          </div>
        </div>
      </article>
    </>
  )
}

export default Services
