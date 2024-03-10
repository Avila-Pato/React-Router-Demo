// eslint-disable-next-line no-unused-vars
import { Suspense, lazy } from 'react';
import './App.css';
import Page404 from './pages/404.jsx';


import { Router } from './pages/Router.jsx';
import { Route } from './pages/Route.jsx';
// import SearchPage from './SearchPage'; // La ruta puede variar dependiendo de la estructura del proyecto

const LazyAboutPage = lazy(() => import('./pages/About.jsx')); //import dinamico
const LazyAboutHomePage = lazy(() => import('./pages/Home.jsx')); //import dinamico
//crando una  SPA


const appRoutes = [
    
    { path: '/Lang/:about',
      Component: LazyAboutPage
    },
]
function App () {
  return (
  <main>  


        {/* definir un componente de carga null para que no haga saltos */}
        <Suspense fallback = {null}>
         <Router routes ={appRoutes} defaultComponent={Page404}>
          <Route path="/" component={LazyAboutHomePage} />
        <Route path ='/about' component={LazyAboutPage} />
        </Router>
        </Suspense> 
      </main>
  )
}
export default App
