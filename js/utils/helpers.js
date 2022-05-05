/**
 * @param {string} link 
 * @returns {string}
 */

export const getTypeLink = (link) => {
  if (link.includes('.svg') 
    || link.includes('.png') 
    || link.includes('.jpg')) {
      return 'image'
  } else if (link.search(/[a-z]*@[a-z]*\.(com|ru)/gy) !== -1) {
    return 'email'
  } else {
    return 'text'
  }
}

export const removeBurgerAndMenuActive = () => {
  const $burger = document.querySelector('[data-btn="burger"]')
  const $menu = document.querySelector('[data-name="menu"]')

  $burger.classList.remove('active')
  $menu.classList.remove('active')
}

export const validateForm = (input) => {
  const {type, value} = input

  if (type === 'text') {
    if (value.length >= 2 
      && value.search(/[^a-z]+/gi) === -1) {
        input.classList.add('success')
        input.classList.remove('error')
        input.dataset.success = 'true'        
      } else if (value.length > 0 && value.length < 2) {
        input.classList.add('error')
        input.classList.remove('success')
      } else {
        input.classList.remove('error')
        input.classList.remove('success')
    }
  } 

  // 9094004000
  if (type === 'tel') {
    if (value.length >= 10
      && value.search(/[^0-9]+/gi) === -1) {
        input.classList.add('success')
        input.classList.remove('error')   
        input.dataset.success = 'true'
    } else if (value.length && value.length < 10) {
      input.classList.add('error')
      input.classList.remove('success')
      input.dataset.success = 'false'
    } else {
      input.classList.remove('error')
      input.classList.remove('success')
      input.dataset.success = 'false'
    }
  }  

  // [a-z]@mail.ru || .com || .by
  // @mail, yandex, google, icloud 
  //  [a-z0-9\.]+@[a-z]{4,6}\.(ru|com|by)

  if (type === 'email') {
    if (value.length >= 9
      && value.search(/[a-z0-9\.]+@[a-z]{4,6}\.(ru|com|by)/gi) !== -1) {
        input.classList.add('success')
        input.classList.remove('error')  
        input.dataset.success = 'true' 
    } else if (value.length 
      && value.length < 9
      || value.search(/[a-z0-9\.]+@[a-z]{4,6}\.(ru|com|by)/gi) === -1) {
      input.classList.add('error')
      input.classList.remove('success')
      input.dataset.success = 'false'
    } else {
      input.classList.remove('error')
      input.classList.remove('success')
      input.dataset.success = 'false'
    }
  }  
}



/*
if (type === 'text' 
    && value.search(/[a-z]{2,}/gi) !== -1) {
    input.classList.remove('error')
    input.classList.add('success')
  } else if (type === 'text' 
    && value.search(/[a-z]{2,}/gi)) {
    input.classList.remove('success')
    input.classList.add('error')
  }

  if (type === 'tel' 
    && value.search(/\+?[\d()-]{5,}/gi) !== -1) {
    input.classList.remove('error')
    input.classList.add('success')
  } else if (type === 'tel' 
    && value.search(/\+?[\d()-]{5,}/gi)) {
    input.classList.remove('success') 
    input.classList.add('error')      
  }

  if (type === 'email' 
    && value.search(/[a-z.0-9]*@[a-z]*\.(ru|com)/gi) !== -1) {
    input.classList.remove('error')
    input.classList.add('success')
  } else if ( type === 'email' 
    && value.search(/[a-z.0-9]*@[a-z]*\.(ru|com)/gi)) {
    input.classList.remove('success') 
    input.classList.add('error')      
  }
*/