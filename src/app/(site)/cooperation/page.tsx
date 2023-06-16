import img_cooperation from '@/assets/photos/cooperation.jpg'
import BlurImage from '@/components/Blur-image'

export default async function CooperationPage() {
  return (
    <main className="main main--cooperation pt-32">
      <div className="container mx-auto">
        <section className="mx-10 mb-14 mt-2 rounded-2xl bg-white p-14 pb-20 shadow-md">
          <div className="flex flex-col gap-8">
            <div className="title mx-auto max-w-2xl">
              <div className="flex flex-col items-center">
                <span className="badge-secondary badge badge-lg mb-3">Співпраця</span>
                <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
                  Стати страховим агентом
                </h1>
                <p className="text-center text-lg font-semibold text-black/60">
                  Запрошує до співпраці як досвідчених страховиків, так і фахівців-початківців, які бажають опанувати
                  нову, цікаву та попитну професію.
                </p>
              </div>
            </div>

            <div className="relative h-[480px] overflow-hidden rounded-2xl">
              {/* <Image className="object-cover" src={img_cooperation} fill alt="image cooperation" /> */}
              <BlurImage src={img_cooperation} className="object-cover" alt="image cooperation" fill />
            </div>

            <div className="mx-auto flex max-w-[840px] flex-col gap-4 text-lg">
              <p className="pl-14 text-xl">Якщо Ви початківець, новачок у страхуванні:</p>
              <p className="pl-14 text-xl">
                … то ключами до успіху для Вас повинні стати слова: «Хочу», «Вірю», «Знаю» і «Вмію».
              </p>
              <p className="pl-14 text-xl">У свою чергу, ми пропонуємо Вам:</p>
              <ul className="list-line">
                <li>
                  «Школу страхування» У ній кожен, хто бажає знайти себе у страхуванні, зможе пройти курс навчання і
                  оволодіти відповідними навичками. Основною перевагою Школи є те, що навчання в ній абсолютно
                  безкоштовно,
                </li>
                <li>якісні страхові продукти, які подобаються Клієнтам,</li>
                <li>сервіс та врегулювання, за які не соромно перед Клієнтами,</li>
                <li>прозорі умови взаємодії та співробітництва з Вами,</li>
                <li>привабливу винагороду, яка залежить від результату Вашої роботи,</li>
                <li>вибір умов роботи — гнучкий графік або зарахування в штат Компанії на постійній основі.</li>
                <li>
                  Якщо Ви вірите в свої сили, готові поповнити свій багаж новими знаннями та реалізувати отримані
                  навички на практиці — Вам гарантовано успіх! Ви станете матеріально забезпеченою людиною та отримаєте
                  всі можливості для кар’єрного зростання. Пишіть: Наші контакти
                </li>
                <li>
                  В Нас — структурована, чітко вибудувана система навчання теоретичним знанням та практичним навичкам
                  роботи. У нас створена система навчання, при якій за кожним починаючим фахівцем закріплений
                  досвідчений наставник. Він не тільки допомагає на початкових етапах роботи, а й ділиться досвідом,
                  навчає практичним навичкам, допомагає організувати роботу.
                </li>
              </ul>
              <b className="pl-14">Раді співпраці!</b>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
