/**
 * @param {object} policy 
 * @param {string} parrentClassName 
 * @returns {string}
 */

const Policy = (policy, parrentClassName) => {
  if (!Object.keys(policy).length) return ''

  const {checkbox, linkPolicy} = policy
  const className = parrentClassName
    ? parrentClassName + '__policy'
    : 'policy'

  return `
    <label class="${className}">
      <input type="${checkbox.type}" data-name="policy" checked>
      <a href="${linkPolicy.url}" target="_blank">
        ${linkPolicy.data}
      </a>
    </label>
  `
}

export default Policy