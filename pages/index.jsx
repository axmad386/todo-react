import Link from "next/link"

export default function Home() {
  return (
    <div id="header">
      <ul>
        <li>
          <Link href="/component/class">CLASS COMPONENT</Link>
        </li>
        <li>
          <Link href="/component/functional">FUNCTIONAL COMPONENT</Link>
        </li>
      </ul>

    </div>
  )
}
