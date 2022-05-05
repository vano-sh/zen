import CloseIcon from '../../ui/CloseIcon.js'
import Title from '../../components/Title/Title.js'
import Form from './components/Form.js'

/**
 * @param {object} data 
 * @returns {string}
 */

const Modal = (data) => {
  if (!Object.keys(data).length) return ''

  const {
    name, 
    title, 
    form
  } = data
  
  const className = name

  return `
    <div 
      data-name="${name}" 
      class="${className}"
    >
      <div class="${className}__body">
        <button 
          data-btn="close"
          class="${className}__close" 
        >
          ${CloseIcon()}
        </button>
        ${title ? Title(title, className) : ''}
        ${form ? Form(form, className) : ''}
      </div>      
    </div>  
  `
}

export default Modal