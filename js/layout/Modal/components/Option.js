/**
 * @param {object} option 
 * @returns {string}
 */

const Option = (option) => {
  if (!Object.keys(option).length) return ''

  const {value, text} = option

  return `
    <option value="${value}">${text}</option>
  `
}

export default Option