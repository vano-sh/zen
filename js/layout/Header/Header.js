import Navigation from './components/Navigation.js'

/**
 * @param {object} data 
 * @returns {string}
 */

const Header = (data) => {
  if (!Object.keys(data).length) return ''

  const {name, navigation} = data

  const className = name

  return `
    <header 
      data-name="${name}"
      class="${className}"
    >
      <div class="${className}__wrapper">
        ${navigation ? Navigation(navigation, className) : ''}
        <button 
          data-btn="burger"
          class="${className}__burger" 
        >
          <span></span>
        </button>    
      </div>      
    </header>
  `
}

export default Header