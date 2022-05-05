import Header from './layout/Header/Header.js'
import Download from './layout/Download/Download.js'
import Warranty from './layout/Warranty/Warranty.js'
import Care from './layout/Care/Care.js'
import Cashback from './layout/Cashback/Cashback.js'
import Clients from './layout/Clients/Clients.js'
import Footer from './layout/Footer/Footer.js'
import Modal from './layout/Modal/Modal.js'

/**
 * @param {object} data 
 * @returns {string}
 */

const App = (data) => {
  if (!Object.keys(data).length) return ''

  const {
    header,
    download,
    warranty, 
    care, 
    cashback, 
    clients, 
    footer, 
    modal
  } = data

  return `
    <div 
      data-name="progress-bar"
      class="progress-bar"
    ></div>
    ${header ? Header(header) : ''}
    ${download ? Download(download) : ''}
    ${warranty ? Warranty(warranty) : ''}
    ${care ? Care(care) : ''}
    ${cashback ? Cashback(cashback) : ''}
    ${clients ? Clients(clients) : ''}
    ${footer ? Footer(footer) : ''}
    ${modal ? Modal(modal) : ''}
  `  
}

export default App