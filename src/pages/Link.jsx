import { BUTTON } from '../const'
import { EVENTS } from '/src/const.js'

function navigate(href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

// eslint-disable-next-line react/prop-types
export function Link({ target, to, ...props }) {
  const handClick = (event) => {
    event.preventDefault()
    
        // evento de teclas
    const isMainEvent = event.button === BUTTON.primary  //click primario
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self' 


    //hacer la ruta mas protegida usamos IF
    if (isMainEvent &&  isManageableEvent  && isModifiedEvent) {
      event.preventDefault()
      navigate(to) // navegacion con SPA
      window.scrollTo(0, 0)
    }


  navigate(to)
  }

  return <a onClick={handClick} href={to} target={target} {...props} />
}
