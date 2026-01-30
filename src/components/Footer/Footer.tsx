import { DiCode } from 'react-icons/di'

import { Logo } from '../Logo'
import siteConfig from '@/config/site'

const Footer = () => {
  return (
    <footer className="mt-auto bg-gradient-to-r from-neutral-100/40 via-white/80 to-neutral-100/40">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 items-baseline gap-8 lg:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-gray-600">
              Страхування - угода між страховиком та страхувальником, що забезпечує захист від ризиків за певну плату.
            </p>
            <div className="mt-8 flex space-x-6 text-gray-600">
              <a href={siteConfig.socialLinks.facebook} target="_blank" className="hover:opacity-75" rel="noreferrer">
                <span className="sr-only"> Facebook </span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href={siteConfig.socialLinks.instagram} target="_blank" className="hover:opacity-75" rel="noreferrer">
                <span className="sr-only"> Instagram </span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href={siteConfig.socialLinks.twitter} target="_blank" className="hover:opacity-75" rel="noreferrer">
                <span className="sr-only"> Twitter </span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href={siteConfig.socialLinks.youtube} target="_blank" className="hover:opacity-75" rel="noreferrer">
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 -4 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M30.722,20.579 C30.137,21.894 28.628,23.085 27.211,23.348 C27.066,23.375 23.603,24.000 16.010,24.000 L15.990,24.000 C8.398,24.000 4.932,23.375 4.788,23.349 C3.371,23.085 1.861,21.894 1.275,20.578 C1.223,20.461 0.001,17.647 0.001,12.000 C0.001,6.353 1.223,3.538 1.275,3.421 C1.861,2.105 3.371,0.915 4.788,0.652 C4.932,0.625 8.398,-0.000 15.990,-0.000 C23.603,-0.000 27.066,0.625 27.210,0.651 C28.628,0.915 30.137,2.105 30.723,3.420 C30.775,3.538 32.000,6.353 32.000,12.000 C32.000,17.647 30.775,20.461 30.722,20.579 ZM28.893,4.230 C28.581,3.529 27.603,2.759 26.845,2.618 C26.813,2.612 23.386,2.000 16.010,2.000 C8.615,2.000 5.185,2.612 5.152,2.618 C4.394,2.759 3.417,3.529 3.104,4.234 C3.094,4.255 2.002,6.829 2.002,12.000 C2.002,17.170 3.094,19.744 3.106,19.770 C3.417,20.471 4.394,21.241 5.153,21.382 C5.185,21.388 8.615,22.000 15.990,22.000 L16.010,22.000 C23.386,22.000 26.813,21.388 26.846,21.382 C27.604,21.241 28.581,20.471 28.894,19.766 C28.904,19.744 29.998,17.170 29.998,12.000 C29.998,6.830 28.904,4.255 28.893,4.230 ZM13.541,17.846 C13.379,17.949 13.193,18.000 13.008,18.000 C12.842,18.000 12.676,17.959 12.525,17.875 C12.206,17.699 12.008,17.364 12.008,17.000 L12.008,7.000 C12.008,6.637 12.204,6.303 12.521,6.127 C12.838,5.950 13.227,5.958 13.534,6.149 L21.553,11.105 C21.846,11.286 22.026,11.606 22.027,11.951 C22.028,12.296 21.852,12.618 21.560,12.801 L13.541,17.846 ZM14.009,8.794 L14.009,15.189 L19.137,11.963 L14.009,8.794 Z"></path>{' '}
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Статті</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="./">
                  Новини
                </a>
                <a className="hover:opacity-75" href="./">
                  Поради
                </a>
                <a className="hover:opacity-75" href="./">
                  Варто Знати
                </a>
                <a className="hover:opacity-75" href="./">
                  інше
                </a>
              </nav>
            </div>

            <div>
              <p className="font-medium">Послуги</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm leading-tight text-gray-500">
                <a className="hover:opacity-75" href="/contacts">
                  Авто цивілка
                </a>
                <a className="hover:opacity-75" href="/contacts">
                  Зелена карта
                </a>
                <a className="hover:opacity-75" href="/contacts">
                  КАСКО
                </a>
              </nav>
            </div>

            <div>
              <p className="font-medium">Співпраця</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="/cooperation">
                  Співпраця
                </a>
                <a className="hover:opacity-75" href="/cooperation">
                  Вакансії
                </a>
                <a className="hover:opacity-75" href="/cooperation">
                  інше
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Контакти</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="./">
                  Контактна форма
                </a>
                <a className="hover:opacity-75" href="./">
                  FAQ
                </a>
                <a className="hover:opacity-75" href="./">
                  Команда
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 flex items-center text-xs text-gray-800">
          {siteConfig.copyright}
          <a
            className="text-red-500 transition-all hover:scale-105 hover:text-red-700"
            href="https://ovbi.dev"
            target="_blank"
            rel="noreferrer"
          >
            <DiCode className="inline-block text-2xl " />
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
