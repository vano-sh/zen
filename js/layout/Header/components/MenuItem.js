/**
 * @param {object} item 
 * @param {string} parentClassName 
 * @returns {string}
 */

const MenuItem = (item, parentClassName) => {
  if (!Object.keys(item).length) return ''

  return `
    <li class="${parentClassName}__item">
      <button 
        data-btn="menu" 
        data-target="${item.target}">
        <span>${item.data}</span>
      </button>
    </li>
  `
}

export default MenuItem