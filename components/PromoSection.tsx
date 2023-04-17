import Image from 'next/image'

const PromoSection = () => {
  return (
    <div className="relative  flex overflow-hidden rounded-2xl bg-white">
      <div className="flex min-h-[176px] flex-col justify-between p-8 pr-12">
        <p>
          Поліс ОСАЦВ не захищає Ваш автомобіль. Він захищає інших учасників дорожнього руху, яким може бути завдано
          шкоди, якщо Ви стали винуватцем ДТП.
        </p>
        <a href="/" className="btn-outline btn">
          Детальніше
        </a>
      </div>
      <div className="pic">
        <Image src="https://picsum.photos/600/300" width={520} height={300} alt="promo image" />
      </div>
    </div>
  )
}

export default PromoSection
