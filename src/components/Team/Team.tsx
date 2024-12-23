import siteConfig from '@/config/site'

import { TeamElement } from './TeamElement'

const Team = () => {
  return (
    <div>
      <div className="w-full px-4 sm:px-10 pt-10">
        <div className="container mx-auto">
          <ul
            role="list"
            aria-label="Behind the scenes People "
            className="flex-wrap items-center sm:flex sm:justify-around md:flex md:justify-around lg:flex lg:justify-around xl:justify-between"
          >
            {siteConfig.ourTeam.map((itm) => (
              <TeamElement key={itm.name} {...itm} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Team
