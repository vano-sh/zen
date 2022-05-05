import {getTypeLink} from "../../../utils/helpers.js"

/**
 * @param {object} item 
 * @param {string} parentClassName 
 * @returns {string}
 */

const ColumnItem = (item, parentClassName) => {
  if (!Object.keys(item).length) return ''

  const {url, data} = item
  const className = parentClassName
    ? `${parentClassName}__item`
    : 'item'
  const type = getTypeLink(data)

  switch (type) {
    case 'email':
      return `
        <li class="${className}">
          <a href="mailto:${url}">${data}</a>
        </li>
      `
    case 'image':
      return `
        <li class="${className}">
          <a href="${url}">
            <img src="${data}"/>
          </a>
        </li>
      `     
    default:
      return `
        <li class="${className}">
          <a href="${url}">${data}</a>
        </li>
      `
  }
  
}

export default ColumnItem