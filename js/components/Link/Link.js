import AppleIcon from '../../ui/AppleIcon.js'
import GoogleIcon from '../../ui/GoogleIcon.js'

/**
 * @param {object} link 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Link = (link, parentClassName) => {
  if (!Object.keys(link).length) return ''

  const {name, url} = link

  const className = parentClassName
    ? `${parentClassName}__link`
    : 'link'

  return `
    <a class="${className}" href="${url}">
      ${name === 'apple' ? AppleIcon() : GoogleIcon()}
    </a>
  `
}

export default Link