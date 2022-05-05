import MenuItem from './MenuItem.js'

/**
 * @param {array} menus 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Menu = (menus, parentClassName) => {
  if (!menus?.length) return ''

  const currentClassName = parentClassName
    ? `${parentClassName}__menu`
    : 'menu'
  const childClassName = parentClassName
    ? parentClassName
    : currentClassName

  return `
    <ul data-name="menu" class="${currentClassName}">
      ${menus 
        ? menus.map((menu) => MenuItem(menu, childClassName)).join('') 
        : ''
      }
    </ul>
  `
}

export default Menu