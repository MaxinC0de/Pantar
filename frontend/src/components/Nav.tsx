import { Home, Plus } from "lucide-react"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav
      className={
        "fixed bottom-0 z-20 w-full flex gap-3 p-3 bg-white text-black font-bold text-2xl"
      }
    >
      <Link to="/">
        <Home />
      </Link>
      <Link to="/add-movie">
        <Plus />
      </Link>
    </nav>
  )
}
