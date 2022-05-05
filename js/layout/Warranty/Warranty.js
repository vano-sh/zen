import Text from '../../components/Text/Text.js'
import Title from '../../components/Title/Title.js'
import Image from '../../components/Image/Image.js'

/**
 * @param {object} data 
 * @returns {string}
 */

const Warranty = (data) => {
  if (!Object.keys(data).length) return ''

  const {
    name, 
    title, 
    texts, 
    image
  } = data
  
  const className = name

  return `
    <section 
      data-name="${name}" 
      class="${className}"
    >
      <div class="container">
        <div class="${className}__wrapper">
          <div class="${className}__body">
            ${title ? Title(title, className) : ''}
            ${texts?.length
              ? texts.map((text) => Text(text, className)).join('')
              : ''
            }
          </div>
          <div class=${className}__image>
            ${image ? Image(image, name) : ''}
          </div>
        </div>          
      </div>      
    </section>  
  `
}

export default Warranty