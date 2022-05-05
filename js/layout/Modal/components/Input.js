/**
 * @param {object} field
 * @param {string} type 
 * @returns {string}
 */

const Input = (field, parrentClassName) => {
  if (!Object.keys(field).length) return ''

  const {type, placeholder} = field
  const className = parrentClassName
    ? parrentClassName + '__input'
    : 'input'
    
  return `
    <input
      data-input="${type}"
      data-success="false"
      class="${className}" 
      type="${type}" 
      placeholder="${placeholder}" 
    />
  ` 
}

export default Input