
import { Link } from '../pages/Link.jsx'

export default function HomePage() {
    return (
        <>
            <h1> Home </h1>
            <div>
                <img src='https://pbs.twimg.com/profile_images/1601298740387536898/iQz8eKXw_400x400.jpg' alt='foto de prueba' />
                <p>Este es una pagina de ejemplo para hacer el React Router desde 0</p>
            </div>
            <p>Hola</p>
            <Link to='/about' > Ir hacia nosotros </Link>
        </>
    )
}