import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkCss = document.querySelector('#theme')

  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css'
    this.linkCss.setAttribute('href', url)
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`
    this.linkCss.setAttribute('href', url)
    localStorage.setItem('theme', url)

    this.checkCurrentTheme()
  }

  checkCurrentTheme() {
    const links: NodeListOf<Element> = document.querySelectorAll('.selector')

    links.forEach(e => {
      e.classList.remove('working')
      const btnTheme = e.getAttribute('data-theme')
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.linkCss.getAttribute('href')

      if (currentTheme === btnThemeUrl) {
        e.classList.add('working')
      }
    })
  }
}
