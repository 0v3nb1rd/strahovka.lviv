import { Nav } from './Nav'
// import {Logo} from '../Logo'

import PhoneList from '@/components/PhoneList'
import SignButton from './SignButton'

export const DrawerAdm = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="drawer-adm" className="drawer-overlay"></label>
      <nav className="flex w-80 flex-col overflow-y-auto bg-white p-4">
        {/* <Logo className="mx-auto mb-6" /> */}

        <Nav className="flex flex-col gap-2 " />

        {/* <PhoneList className="mx-auto mb-6 mt-auto text-lg" /> */}
        <hr className="mt-auto py-4" />
        <SignButton />
      </nav>
    </div>
  )
}
