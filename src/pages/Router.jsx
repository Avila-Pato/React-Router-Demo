import { EVENTS } from "../const.js"
import { useEffect, useState, Children } from "react"
import { match } from 'path-to-regexp'

//el contexto rpesenta a un compunente Router para hacerlo mas declarativo ademas de Soportar ruta por defecto (404)
// eslint-disable-next-line no-unused-vars, react/prop-types
export function Router({ children, routes = [], defaultComponent: DefaultComponent = () =>
  <h1>404</h1> }) {
    
  // eslint-disable-next-line no-undef
  const [currentPath, setCurrentPath] = useState(getCurrentPath ())
  useEffect(() => {
    const onLocationChange = () => {
      // eslint-disable-next-line no-undef
      setCurrentPath(getCurrentPath() )
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])



  let routeParams = {}
  
  const routesFromChildren = Children.map(children, ({props, type}) => {
    const { name } = type
    const isRoute = name === 'Route'
    console.log(props, type)
    return isRoute ? props : null
    
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)
  
  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true


    
    //permite mas rutas dinamicas 
    // /search/:query :query es una ruta dinamica
    //magia del path-to-regexp
    const matcheUrl = match(path, { decode: decodeURIComponent })
    const matched = matcheUrl(currentPath) // /search/:javascript es parte de la dcumentacion  de path-to-regexp
    if (!matched) return false

    //guarda lso aprametros de la url que eran dinamocos
    // y con path-to-regexp etramimos los parametros de la ruta
    //por ejemplo /search/:query
    //y la url es /search/javascript
    //matched.params.query === 'javascript'
    routeParams = matched.params;
    return true;
  })?.Component 
  //si el file devuelve Null(page) no sigue evaluando lo de la derecha para eso es el ?.Component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />;
}