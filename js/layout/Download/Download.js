import Text from '../../components/Text/Text.js'
import Title from '../../components/Title/Title.js'
import Link from '../../components/Link/Link.js'
import Image from '../../components/Image/Image.js'

/**
 * @param {object} data 
 * @returns {string}
 */

const Download = (data) => {
  if (!Object.keys(data).length) return ''

  const {
    name, 
    title, 
    texts, 
    links, 
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
            <div class=${className}__links>
              ${links 
                ? links?.map((link) => Link(link, className)).join('')
                : ''
              }
            </div>            
          </div>
          <div class=${className}__image>
            ${image ? Image(image, name) : ''}
          </div>          
        </div>
      </div>
    </section>
  `
}

export default Download