/**
 * @param {object} title 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Title = (title, parentClassName) => {
  if (!Object.keys(title).length) return ''

  const {data, priority} = title
  const className = parentClassName
    ? `${parentClassName}__title`
    : 'title'

  switch (priority) {
    case '6': return `
      <h6 data-name="title" class=${className}>${data}</h6>
    `
    case '5': return `
      <h5 data-name="title" class=${className}>${data}</h5>
    `
    case '4': return `
      <h4 data-name="title" class=${className}>${data}</h4>
    `
    case '3': return `
      <h3 data-name="title" class=${className}>${data}</h3>
    `
    case '2': return `
      <h2 data-name="title" class=${className}>${data}</h2>
    `
    default: return `
      <h1 data-name="title" class=${className}>${data}</h1>
    `
  }
}

export default Title