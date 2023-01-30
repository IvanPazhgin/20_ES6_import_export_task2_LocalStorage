import {cookieIsApply} from "./constants";

export default class App {
  #cookieApply
  #h1Selector
  #cookie_consent
  #button

  constructor() {
    this.#cookieApply = localStorage.getItem('cookieApply')

    this.#h1Selector = document.querySelector('h1')
    this.#cookie_consent = document.querySelector('.cookie-consent')

    this.#button = document.querySelector('button')
    this.#cookieApplyButtonListener()
  }

  initApp() {
    this.#checkCookie()
  }

  #checkCookie() {
    if (this.#cookieApply !== cookieIsApply) {
      this.#cookie_consent.style.display = 'flex'
      this.#h1Selector.style.display = 'block'
      localStorage.setItem('cookieApply', 'false')
    }
    else {
      this.#hideCookie()
    }
  }

  #cookieApplyButtonListener() {
    this.#button.addEventListener('click', event => {
      event.preventDefault()
      this.#hideCookie()
    })
  }

  #hideCookie() {
    this.#cookie_consent.style.display = 'none'
    this.#h1Selector.style.display = 'none'
    localStorage.setItem('cookieApply', cookieIsApply.toString())
    this.#button.removeEventListener('click', this.#cookieApplyButtonListener)
  }

  example() {
    const myNumber = 43

    localStorage.removeItem('number')
    console.log(localStorage.getItem('number'))

    localStorage.setItem('number', myNumber.toString())
    const test = localStorage.getItem('number')
    console.log(test)

    localStorage.clear()
  }
}

// отличия localStorage от cookie:
// 1. localStorage намного больше по объему чем cookie. Примерно 5 мегабайт
// 2. то что хранися в cookie улетает с запросами на сервер, на котором cookie можно распарсить и как то использовать в своих нуждах