import Link from "next/link"

export default function Home() {
  return (
    <div id="header">
      <ul>
        <li>
          <Link href="/komponen/class">CLASS COMPONENT</Link>
        </li>
        <li>
          <Link href="/komponen/functional">FUNCTIONAL COMPONENT</Link>
        </li>
        <li>
          <Link href="/login">LOGIN</Link>
        </li>
      </ul>

    </div>
  )
}
