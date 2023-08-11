import { Link } from "react-router-dom"
import './Header.css'



const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1 className="name">e-commerce</h1>
      </Link>
      <nav>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register </Link></li>
          <li><Link to='/cart'>Cart</Link></li>
          <li><Link to='/purchases'>Purchases</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header