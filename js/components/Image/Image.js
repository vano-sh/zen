/**
 * @param {object} image 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Image = (image, name, parentClassName) => {
  if (!Object.keys(image).length) return ''

  const {source, alternate} = image
  const className = parentClassName
    ? `${parentClassName}__image`
    : ''

  return `
    <img 
      data-type="${name}"
      class="${className}" 
      src="${source}" 
      alt="${alternate}"
    />
  `
}

export default Image