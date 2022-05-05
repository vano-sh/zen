import Column from './components/Column.js'
import Info from './components/Info.js'

/**
 * @param {object} data 
 * @returns {string}
 */

const Footer = (data) => {
  if (!Object.keys(data).length) return ''

  const {
    name, 
    columns, 
    info
  } = data
  
  const className = name

  return `
    <footer class="${className}">
      <div class="container">
        <div class="${className}__wrapper">
          <div class="${className}__columns">
            ${columns?.length 
              ? columns.map((column) => Column(column, className)).join('')
              : ''
            }
          </div>            
          ${info ? Info(info, className) : ''}
        </div>
      </div>    
    </footer>
  `
}

export default Footer