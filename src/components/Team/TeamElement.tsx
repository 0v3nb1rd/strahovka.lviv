import Image from 'next/image'

import type { TTeam } from '@/config/site'

export const TeamElement = ({ ...props }: TTeam) => {
  return (
    <li role="listitem" className="relative mb-32 mt-16 sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
      <div className="overflow-hidden rounded-2xl bg-white shadow-md">
        <div className="absolute -mt-20 flex w-full justify-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full shadow-sm">
            <Image src={props.img} className="object-cover" fill alt="team photo" />
          </div>
        </div>
        <div className="mt-16 px-6">
          <h2 className="mb-1 text-center text-3xl font-bold">{props.name}</h2>
          <p className="text-center text-sm text-gray-800">{props.position}</p>
          <p className="pt-3 text-center text-base font-normal text-gray-600">{props.description}</p>
          <div className="flex w-full justify-center pb-5 pt-5">
            <a href={props.socialLinks.facebook} target="_blank" className="mx-5">
              <div aria-label="Facebook" role="img">
                <svg fill="#718096" viewBox="0 0 1920 1920" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"
                      fillRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </div>
            </a>
            <a href={props.socialLinks.instagram} target="_blank" className="mx-5">
              <div aria-label="Instagram" role="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </a>
            <a href={props.socialLinks.github} target="_blank" className="mx-5">
              <div aria-label="Github" role="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}
