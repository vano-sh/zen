import Input from './Input.js'
import Connection from './Connection.js'
import Policy from './Policy.js'

/**
 * @param {object} form 
 * @param {string} parrentClassName 
 * @returns {string}
 */

const Form = (form, parrentClassName) => {
  if (!Object.keys(form).length) return ''

  const {
    fields, 
    connection, 
    policy, 
    buttonText
  } = form

  const currentClassName = parrentClassName
    ? parrentClassName + '__form'
    : 'form'
  const childClassName = parrentClassName
    ? parrentClassName
    : currentClassName

  return `
    <form class="${currentClassName}" data-name="form" id="form">      
      ${fields?.length
        ? fields.map(field => Input(field, childClassName)).join('')
        : ''
      }
      ${connection ? Connection(connection, childClassName) : ''}
      ${policy ? Policy(policy, childClassName) : ''}
      <button 
        data-name="submit"
        class="${childClassName}__btn" 
        type="submit" 
        disabled
      >
        <span>${buttonText ? buttonText : 'Submit'}</span>
      </button>      
    </form>
  `
}

export default Form