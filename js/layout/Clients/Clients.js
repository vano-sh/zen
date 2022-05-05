import Image from '../../components/Image/Image.js' 

/**
 * @param {object} data 
 * @returns {string}
 */

const Clients = (data) => {
  if (!Object.keys(data).length) return ''

  const {name, lightThemeClients} = data
  const className = name

  return `
    <section 
      data-name="${name}" 
      class="${className}"
    >
      <div class="container">
        <div class="${className}__wrapper">
          ${lightThemeClients?.length
            ? lightThemeClients.map((image) => Image(image,className, name)).join('')
            : ''
          }        
        </div>
      </div>
    </section>
  `
}

export default Clients