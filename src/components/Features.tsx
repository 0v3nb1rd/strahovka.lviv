import Image from 'next/image'

import Badge from '@/components/Badge'

export default function FeaturesSection() {
  return (
    <div className="overflow-hidden">
      <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12">
        <div>
          <Badge variant="secondary">Наші особливості</Badge>
          <h2 className="mt-4 pl-4 text-2xl font-bold text-gray-900 md:text-4xl">
            Повний захист для вашої машини, <br className="lg:block" hidden /> та безліч переваг
          </h2>
        </div>

        <div className="mt-16 grid divide-x divide-y overflow-hidden rounded-2xl border sm:grid-cols-2 lg:divide-y-0 xl:grid-cols-4">
          <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative space-y-8 p-8">
              <Image src="/icons/security.svg" className="w-10" width="512" height="512" alt="burger illustration" />

              <div className="space-y-2">
                <h2 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                  Безпечність
                </h2>
                <p className="text-sm text-gray-600">
                  Надаємо страхові поліси, що захищають від нещасних випадків на дорозі, включаючи матеріальні та
                  медичні витрати.
                </p>
              </div>
              {/* <a href="#" className="flex items-center justify-between group-hover:text-yellow-600">
                <span className="text-sm">Читати ще</span>
                <span className="-translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </a> */}
            </div>
          </div>

          <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative space-y-8 p-8">
              <Image
                src="/icons/flexibility.svg"
                className="w-10"
                width="512"
                height="512"
                alt="flexibility illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">Гнучкість</h5>
                <p className="text-sm text-gray-600">
                  Індивідуальний підхід до кожного клієнта з урахуванням його потреб та умов експлуатації авто.
                </p>
              </div>

              {/* <a href="#" className="flex items-center justify-between group-hover:text-yellow-600">
                <span className="text-sm">Читати ще</span>
                <span className="-translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </a> */}
            </div>
          </div>

          <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative space-y-8 p-8">
              <Image src="/icons/thumb.svg" className="w-10" width="512" height="512" alt="flexibility illustration" />

              <div className="space-y-2">
                <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">Простота</h5>
                <p className="text-sm text-gray-600">
                  Швидке та зручне оформлення онлайн або в офісі, просте та зрозуміле пояснення страхових термінів та
                  умов.
                </p>
              </div>
              {/* <a href="#" className="flex items-center justify-between group-hover:text-yellow-600">
                <span className="text-sm">Читати ще</span>
                <span className="-translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </a> */}
            </div>
          </div>

          <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative space-y-8 p-8">
              <Image src="/icons/save.svg" className="w-10" width="512" height="512" alt="flexibility illustration" />

              <div className="space-y-2">
                <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">Економія</h5>
                <p className="text-sm text-gray-600">
                  Доступні та конкурентоспроможні ціни на страхові поліси забезпечують економію вашого бюджету.
                </p>
              </div>
              {/* <a href="#" className="flex items-center justify-between group-hover:text-yellow-600">
                <span className="text-sm">Читати ще</span>
                <span className="-translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
