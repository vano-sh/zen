/**
 * @param {string} text
 * @param {string} parentClassName 
 * @returns {string}
 */

const Text = (text, parentClassName) => {
  return `
    <p class="${parentClassName}__copy">
      ${text}
    </p>
  `
}

export default Text