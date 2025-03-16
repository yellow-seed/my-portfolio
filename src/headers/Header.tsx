import { createPortal } from 'react-dom'

function Header() {
  return createPortal(
    <>
      <h1 className="text-2xl font-bold">yellowseed workspace</h1>
      <nav>
        <ul className="flex space-x-6 text-[#7A6B5C]">
          <li><a href="#about" className="hover:text-black">About</a></li>
          <li><a href="#works" className="hover:text-black">Works</a></li>
          <li><a href="#samples" className="hover:text-black">Samples</a></li>
          <li><a href="#contact" className="hover:text-black">Contact</a></li>
        </ul>
      </nav>
    </>,
    document.getElementById('header')!
  )
}

export default Header
