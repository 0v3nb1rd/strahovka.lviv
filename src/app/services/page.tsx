import Services from '@/components/Services/Services'
import img_services from '@/assets/photos/poslugi.jpg'
import img_carInsurance from '@/assets/photos/avtostrahuvannya.jpg'
import img_life from '@/assets/photos/life.jpg'
import img_travel from '@/assets/photos/travel.jpg'
import insurance_resp from '@/assets/photos/services/insurance_resp.jpg'
import insurance_business from '@/assets/photos/services/insurance_business.jpg'
import insurance_pets from '@/assets/photos/services/insurance_pets.jpg'

const serviceData = [
  {
    category: 'Автострахування',
    title: 'Страхування автомобілів',
    slug: 'strahuvannya-avtomobiliv',
    description:
      'Статистичні дані кажуть нам, що навіть водії з великим досвідом також часом потрапляють у різні негативні пригоди на дорогах.',
    img: img_carInsurance,
  },
  {
    category: 'життя',
    title: 'Страхування Здоров’я',
    slug: 'strahuvannya-zdorovya',
    description: 'Сьогодні майже всі знають про можливість медичного страхування.',
    img: img_life,
  },
  {
    category: 'Майно',
    title: 'Страхування майна',
    slug: 'strahuvannya-majna',
    description:
      'Всi знають, як багато енергії, сил та засобів ми зазвичай вкладаємо в облаштування домашнього вогнища.',
    img: img_services,
  },
  {
    category: 'Подорожі',
    title: 'Страхування туриста',
    slug: 'strahuvannya-turista',
    description:
      'Відпустка, поїздки, подорожі — заповітна мрія будь-якої людини, адже цієї події ми чекаємо протягом довгих робочих буднів.',
    img: img_travel,
  },
  {
    category: 'життя',
    title: 'Страхування відповідальності',
    slug: 'strahuvannya-vidpovidalьnosti',
    description:
      'Що Ви відповіли б на запитання: хто така безвідповідальна людина? Багато хто скаже — це той, хто не хоче брати на себе відповідальність.',
    img: insurance_resp,
  },
  {
    category: 'життя',
    title: 'Страхування бізнесу',
    slug: 'strahuvannya-biznesu',

    description:
      'Страхова компанія «АСКА» займається страхуванням корпоративних Клієнтів з 1990 р. — з моменту свого заснування.',
    img: insurance_business,
  },
  {
    category: 'життя',
    title: 'Страхування домашніх тварин',
    slug: 'strahuvannya-domashnih-tvarin',
    description: 'У багатьох з нас є друзі, які на відміну від більшості наших приятелів мають вуса, лапи та хвіст.',
    img: insurance_pets,
  },
]
const ServicesPage = () => {
  return (
    <main className="main main--services">
      <div className="container mx-auto">
        <div className="mb-16 mt-2">
          <Services data={serviceData} />
        </div>
      </div>
    </main>
  )
}

export default ServicesPage
