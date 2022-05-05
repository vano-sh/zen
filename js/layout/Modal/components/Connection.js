import Option from './Option.js'

/**
 * @param {object} connection
 * @param {string} parrentClassName 
 * @returns {string} 
 */

const Connection = (connection, parrentClassName) => {
  if (!Object.keys(connection).length) return ''

  const {label, options} = connection
  const className = parrentClassName
    ? parrentClassName + '__select'
    : 'select'  

  return `
    <label 
      data-name="connection"
      class="${className}"
    >
      <span>${label}</span>

      <select>
        <option></option>
        ${options?.length 
          ? options.map((option) => Option(option)).join('') 
          : ''
        }
      </select>
    </label>    
  `
}

export default Connection