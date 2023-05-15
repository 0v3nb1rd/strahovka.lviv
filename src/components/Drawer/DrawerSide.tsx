import Nav from '../Nav/Nav'
import Logo from '../Logo'

import PhoneList from '@/components/PhoneList/PhoneList'

export default function DrawerSide() {
  return (
    <div className="drawer-side">
      <label htmlFor="drawer-menu" className="drawer-overlay"></label>
      <nav className="menu w-80 overflow-y-auto bg-white p-4">
        <Logo className="mx-auto mb-6" />

        <Nav className="flex flex-col gap-4 text-white" />

        <PhoneList className="mx-auto mb-6 mt-auto text-lg" />
      </nav>
    </div>
  )
}
