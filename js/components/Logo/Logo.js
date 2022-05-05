import LogoHeaderIcon from '../../ui/LogoHeaderIcon.js'
import LogoFooterIcon from '../../ui/LogoFooterIcon.js'

/**
 * @param {string} parent 
 * @returns {string}
 */

const Logo = (parent, parentClassName) => {

  return parent === 'header' 
    ? `<button
        data-btn="root"
        class="${parentClassName}__logo"
      >
        ${LogoHeaderIcon()}
      </button>
    `
    : `<button
        data-btn="root"
        class="${parentClassName}__logo"
      >
        ${LogoFooterIcon()}
      </button>
    `
}

export default Logo