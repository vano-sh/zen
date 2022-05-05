import { API_BASE_URL } from '../constans/api.js'
import FetchWrapper from './fetch.js'
import SunIcon from '../ui/SunIcon.js'
import MoonIcon from '../ui/MoonIcon.js'
import {
  removeBurgerAndMenuActive,
  validateForm
} from './helpers.js'

export const preloaderPage = () => {
  const $preloader = document.querySelector('[data-name="preloader"]')
  
  $preloader.classList.remove('active')
}

export const handleThemeButtonClick = (event, clientsNodes, darkThemeClients, lightThemeClients) => {
  const $body = document.body
  const $themeBtn = event.currentTarget
  const $header = $body.querySelector('[data-name="header"]')
  const $menu = $body.querySelector('[data-name="menu"]')
  const $burger = $body.querySelector('[data-btn="burger"]')
  const $orderBtn = $body.querySelector('[data-btn="modal"]')
                                              
  !$body.classList.contains('dark') 
    ?  clientsNodes.forEach((clientsNode, index) => {
        clientsNode.src = darkThemeClients[index].source
      })
    : clientsNodes.forEach((clientsNode, index) => {
        clientsNode.src = lightThemeClients[index].source
      })
    
  if ($themeBtn.dataset.theme === 'moon') {
    $themeBtn.innerHTML = SunIcon()
    $themeBtn.dataset.theme = 'sun'
  } else {
    $themeBtn.innerHTML = MoonIcon()
    $themeBtn.dataset.theme = 'moon'
  }
 
  $body.classList.toggle('dark')
  $header.classList.toggle('dark')
  $menu.classList.toggle('dark')
  $burger.classList.toggle('dark')
  $orderBtn.classList.toggle('dark')
}

export const handleBurgerButtonClick = (event) => {
  const $menu = document.querySelector('[data-name="menu"]')

  event.currentTarget.classList.toggle('active')
  $menu.classList.toggle('active')
  document.body.classList.toggle('hidden')
}

export const handleScrollToSectionClick = (event) => {
  const target = event.currentTarget.dataset.target
  const $header = document.querySelector('[data-name="header"]')
  const $section = document.querySelector(`[data-name="${target}"]`)

  const clientPosition = window.pageYOffset
  const headerHeight = $header.getBoundingClientRect().height
  const sectionPosition = $section.getBoundingClientRect().top
  const targetPosition = clientPosition + sectionPosition - headerHeight

  removeBurgerAndMenuActive()
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  })
  document.body.classList.remove('hidden')
}

export const handleScrollToHeaderClick = () => {
  removeBurgerAndMenuActive()  
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export const handleModalButtonClick = () => {
  const $body = document.body
  const $modal = document.querySelector('.modal')

  $body.style.overflowY = 'hidden'
  $modal.classList.add('active')
}

export const handleModalButtonCloseClick = () => {
  const $body = document.body
  const $modal = document.querySelector('.modal')

  $body.style.overflow = 'auto'
  $modal.classList.remove('active')
}

export const handleModalSelectChange = (event) => {
  const select = event.currentTarget
  const selectLabel = select.parentElement


  if (select.value) {     
    selectLabel.classList.add('success')
  } else {
    selectLabel.classList.remove('success')
  }
}

export const handleModalFormClick = (event) => {
  const $form = event.currentTarget
  const $name = $form.querySelector('[data-input="text"]')
  const $tel = $form.querySelector('[data-input="tel"]')
  const $email = $form.querySelector('[data-input="email"]')
  const $connectionLabel = $form.querySelector('[data-name="connection"]')
  const $connection = $connectionLabel.querySelector('select')
  const $policy = $form.querySelector('[data-name="policy"]')
  const $submit = $form.querySelector('[data-name="submit"]')

  if ($name.dataset.success === 'true' 
    && $tel.dataset.success === 'true'
    && $email.dataset.success === 'true'
    && $connection.value.length
    && $policy.checked) {
      $submit.disabled = false
  }
}

export const handleModalFormSubmit = (event) => {
  event.preventDefault()

  const $form = event.currentTarget  
  const $name = $form.querySelector('input[type="text"]')
  const $tel = $form.querySelector('input[type="tel"]')
  const $email = $form.querySelector('input[type="email"]')
  const $connection = $form.querySelector('[data-name="connection"] select')
  const $policy = $form.querySelector('input[type="checkbox"]')
  const $submit = $form.querySelector('[data-name="submit"]')
  
  const $modal = $form.closest('[data-name="modal"]')
  const $title = $modal.querySelector('[data-name="title"]')
  const prevTitleContent = $title.textContent

  const order = {
    type: 'order',
    date: new Date().toLocaleString(),
    name: $name.value,
    tel: $tel.value,
    email: $email.value,
    connection: $connection.value,
    policy: $policy.checked
  }

  const fetchApi = new FetchWrapper(API_BASE_URL)

  fetchApi.post(order)
    .catch(err => console.error(err))

  $title.textContent = 'Success!'
  $form.reset()
  $submit.disabled = true
  $name.classList.remove('success')
  $tel.classList.remove('success')
  $email.classList.remove('success')
  $connection.parentElement.classList.remove('success')


  setTimeout(() => {
    $title.textContent = prevTitleContent
    $modal.classList.remove('active')
    document.body.style.overflow = ''
  }, 2000)
}

export const handleInputKeyup = (event) => {
  validateForm(event.currentTarget)
}

export const handleWindowScroll = () => {
  // объект данных
  const clientRect = document.body.getBoundingClientRect()
  
  // высота прокрутки
  const clientPassed = Math.abs(clientRect.top)

  // высота всего документа
  const clientHeight = document.body.clientHeight

  // высота экрана(viewport)
  const screenHeight = window.screen.height

  // высота сколько не прокручено
  const clientNotPassed = clientHeight - screenHeight

  // процент прокрученной области
  const percentPassed = Math.floor(clientPassed / clientNotPassed * 100)

  // получить progressBar
  const $progressBar = document.querySelector('[data-name="progress-bar"]')

  $progressBar.style.width = `${percentPassed}%`
}