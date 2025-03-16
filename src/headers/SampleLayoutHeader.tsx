import { createPortal } from 'react-dom'
import { Link } from "react-router-dom";

function SampleLayoutHeader() {
  return createPortal(
    <>
      <h1 className="text-2xl font-bold">サンプルサイト</h1>
      <nav>
        <ul className="flex space-x-6 text-[#7A6B5C]">
        <li>
          <Link to="/" className="hover:text-black">
            ← ホームに戻る
          </Link>
        </li>
        </ul>
      </nav>
    </>,
    document.getElementById('header')!
  )
}

export default SampleLayoutHeader
