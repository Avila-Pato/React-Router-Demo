
import { Link } from '../pages/Link.jsx'

const i18n = { 
  es:{ 
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    descripcion : 'Creando un Clon de React conponente o algunos de sus componentes',
  },
  en: {
    title: 'About us',
    button: 'Go to home',
    descripcion : 'Creating a clone of React with some of its components',
  }
}

const usei18n = (lang) => {
  return i18n[lang] || i18n.es;
}


// eslint-disable-next-line react/prop-types
export default function AboutPage({routeParams}) {
// eslint-disable-next-line react/prop-types
const i18n = usei18n(routeParams.lang ?? 'es' )
    return (
      <>  
        <h1> {i18n.title} </h1>
        <div> 
        <p>Hola me llamo patricio y estoy creando un clon de React router </p>

        </div>
        <Link to= '/' >{i18n.button}</Link>
      </>
    )
  }
  