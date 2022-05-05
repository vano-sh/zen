import Title from '../../../components/Title/Title.js'
import ColumnItem from './ColumnItem.js'

/**
 * @param {object} column 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Column = (column, parentClassName) => {
  if (!Object.keys(column).length) return ''

  const {title, links} = column

  const currentClassName = parentClassName
    ? `${parentClassName}__column`
    : 'column'
  const childClassName = parentClassName
    ? parentClassName
    : currentClassName

  return `
    <div class="${currentClassName}">
      ${title ? Title(title, childClassName) : ''}
      <ul class="${childClassName}__list">
        ${links?.length 
          ? links.map((link) => ColumnItem(link, childClassName)).join('') 
          : ''
        }
      </ul>
    </div>
  `
}

export default Column