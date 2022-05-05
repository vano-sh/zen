import Logo from '../../../components/Logo/Logo.js'
import Text from '../../../components/Text/Text.js'
import CopyrightIcon from '../../../ui/CopyrightIcon.js'

/**
 * @param {object} info 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Info = (info, parentClassName) => {
  if (!Object.keys(info).length) return ''

  const {texts, copyright} = info
  const currentClassName = parentClassName
    ? `${parentClassName}__info`
    : 'info'
  const childClassName = parentClassName
    ? parentClassName
    : currentClassName

  return `
    <div class="${currentClassName}">
    
      <div class="${childClassName}__body">
        ${Logo('footer', childClassName)}
        <div class="${childClassName}__copies">
          ${texts?.length
            ? texts.map((text) => Text(text, childClassName)).join('')
            : ''
            }
        </div>  
      </div>

      <a 
        class="${childClassName}__copyright" 
        href="${copyright.url}"
      >
        ${CopyrightIcon()}
      </a>

    </div>
  `
}

export default Info