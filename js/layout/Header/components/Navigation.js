import Logo from '../../../components/Logo/Logo.js'
import Menu from './Menu.js'
import MoonIcon from '../../../ui/MoonIcon.js'


/**
 * @param {object} navigation 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Navigation = (navigation, parentClassName) => {
  if (!Object.keys(navigation).length) return ''

  const {menus} = navigation
  const currentClassName = parentClassName
    ? `${parentClassName}__nav`
    : 'nav'
  const childClassName = parentClassName
    ? parentClassName
    : currentClassName

  return `
    <nav class="${currentClassName}">     
      ${Logo('header', childClassName)}
      ${menus ? Menu(menus, childClassName) : ''}
      <button 
        data-btn="theme" 
        data-theme="moon"
        class="${childClassName}__theme" 
      >
        ${MoonIcon()}
      </button>
    </nav>
  `
}

export default Navigation