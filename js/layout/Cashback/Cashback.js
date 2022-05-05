import Title from '../../components/Title/Title.js'
import Text from '../../components/Text/Text.js'

/**
 * @param {object} data 
 * @returns {string}
 */

const Cashback = (data) => {
  if (!Object.keys(data).length) return ''

  const {
    name, 
    title, 
    texts, 
    orderBtn
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
            <button 
              data-btn="${orderBtn.target}"
              class="${className}__btn" 
            >
              ${orderBtn.data}
            </button>
          </div>          
        </div>
      </div>    
    </section>
  `
}

export default Cashback