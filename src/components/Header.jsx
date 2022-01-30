import { Link } from 'react-router-dom'

export default function Header () {
    return(
        <div className="header">
            <Link className="link" to="/mypf/">Home</Link>
            <Link className="link" to="/mypf/tenzies">Tenzies Game</Link>
        </div>
    )
}

