import { API_BASE_URL } from './constans/api.js'
import FetchWrapper from './utils/fetch.js'
import App from '../js/App.js'
import Preloader from './layout/Preloader/Preloader.js'
import {
  preloaderPage,
  handleScrollToHeaderClick,
  handleThemeButtonClick,
  handleBurgerButtonClick,
  handleWindowScroll,
  handleScrollToSectionClick, 
  handleModalButtonClick,
  handleModalButtonCloseClick,
  handleModalSelectChange,
  handleModalFormClick,
  handleModalFormSubmit,
  handleInputKeyup
} from './utils/handlers.js'

const $root = document.querySelector('#root')
$root.innerHTML = Preloader()

setTimeout(() => {
  const fetchApi = new FetchWrapper(API_BASE_URL)
  fetchApi.get()
    .then(data => {
      buildPage(data)
      preloaderPage()
      const orders = Object.values(data.orders).filter((order) => order.type === 'order')
      console.log({orders});
    })
    .catch(err => console.error(err))
}, 2000)
 
function buildPage(data) {    
  $root.insertAdjacentHTML('beforeend', App(data))

  const $logoButtons = document.querySelectorAll('[data-btn="root"]')
  const $themeButton = document.querySelector('[data-btn="theme"]')
  const $clientsNodes = document.querySelectorAll('[data-type="clients"')
  const darkThemeClients = data.clients.darkThemeClients
  const lightThemeClients = data.clients.lightThemeClients
  const $burgerButton = document.querySelector('[data-btn="burger"]')
  const $menuItems = document.querySelectorAll('[data-target]')
  
  const $modalOrderButton = document.querySelector('[data-btn="modal"]')
  const $modalCloseButton = document.querySelector('[data-btn="close"]')
  const $modalInputs = document.querySelectorAll('[data-input]')
  const $modalConnection = document.querySelector('[data-name="connection"] select')
  const $modalForm = document.querySelector('[data-name="form"]')
  window.addEventListener('scroll', handleWindowScroll)
  $logoButtons.forEach((button) => button.addEventListener('click', handleScrollToHeaderClick))
  $menuItems.forEach((menuItem) => menuItem.addEventListener('click', handleScrollToSectionClick))
  $themeButton.addEventListener('click', (event) => handleThemeButtonClick(event, $clientsNodes, darkThemeClients, lightThemeClients))
  $burgerButton.addEventListener('click', handleBurgerButtonClick)
  
  $modalOrderButton.addEventListener('click', handleModalButtonClick)
  $modalCloseButton.addEventListener('click', handleModalButtonCloseClick)
  $modalInputs.forEach(input => input.addEventListener('keyup', handleInputKeyup))
  $modalConnection.addEventListener('change', handleModalSelectChange)
  $modalForm.addEventListener('click', handleModalFormClick)
  $modalForm.addEventListener('submit', handleModalFormSubmit)
}