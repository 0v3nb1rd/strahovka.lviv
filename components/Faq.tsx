import React from 'react'

const Faq = () => {
  return (
    <div className="mx-10 ">
      <div className="rounded-2xl bg-white p-4 py-14 pb-20 shadow-md">
        <span className="badge-warning badge mx-auto mb-3 block">FAQ</span>
        <p className="mx-auto text-center text-3xl font-extrabold text-gray-800 sm:w-[50%] xl:text-4xl">
          Тут ви можете ознайомитись з частими питаннями
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 px-2 md:grid-cols-2 xl:gap-12 xl:px-12">
          <div className="mt-8 flex space-x-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-700">Lorem ipsum dolor sit amet?</h4>
              <p className="my-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos
                provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit
                iusto vitae dolorum. Nostrum, fugit!
              </p>
              <a
                href="#"
                className="capitalize text-primary transition hover:bg-secondary hover:underline"
                title="Read More"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="mt-8 flex space-x-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-700">Consectetur adipisicing elit?</h4>
              <p className="my-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos
                provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit
                iusto vitae dolorum. Nostrum, fugit!
              </p>
              <a
                href="#"
                className="capitalize text-primary transition hover:bg-secondary hover:underline"
                title="Read More"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="mt-8 flex space-x-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-700">Neque eos, dignissimos provident reiciendis debitis?</h4>
              <p className="my-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos
                provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit
                iusto vitae dolorum. Nostrum, fugit!
              </p>
              <a
                href="#"
                className="capitalize text-primary transition hover:bg-secondary hover:underline"
                title="Read More"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="mt-8 flex space-x-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-700">Repudiandae commodi perferendis et itaque?</h4>
              <p className="my-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos
                provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit
                iusto vitae dolorum. Nostrum, fugit!
              </p>
              <a
                href="#"
                className="capitalize text-primary transition hover:bg-secondary hover:underline"
                title="Read More"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="mt-8 flex space-x-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-700">Similique fugiat cumque?</h4>
              <p className="my-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos
                provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit
                iusto vitae dolorum. Nostrum, fugit!
              </p>
              <a
                href="#"
                className="capitalize text-primary transition hover:bg-secondary hover:underline"
                title="Read More"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="mt-8 flex space-x-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-700">Impedit iusto vitae dolorum, nostrum fugit?</h4>
              <p className="my-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos
                provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit
                iusto vitae dolorum. Nostrum, fugit!
              </p>
              <a
                href="#"
                className="capitalize text-primary transition hover:bg-secondary hover:underline"
                title="Read More"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
