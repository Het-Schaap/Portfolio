import { useTheme } from 'vuetify'

type Theme = { name: string; dark: boolean }

export const useNuxtStore = defineStore('nuxt-store', {
  state: () => {
    return {
      env: '' as '' | 'development' | 'test' | 'production',
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNuxtStore, import.meta.hot))
}

export const theme = {
  _currentTheme: ref({ name: 'dark', dark: true }),
  _knownThemes: ref([
    { name: 'light', dark: false },
    { name: 'dark', dark: true },
    { name: 'customLight', dark: false },
    { name: 'customDark', dark: true },
  ]),
  get currentTheme() {
    return this._currentTheme.value
  },
  set currentTheme(newTheme: Theme) {
    this._currentTheme.value = newTheme
  },
  get knownThemes() {
    return this._knownThemes.value
  },
  set knownThemes(newThemes: Theme[]) {
    this._knownThemes.value = newThemes
  },
  toggleTheme() {
    if (this.currentTheme.dark === false) {
      this.setTheme('dark')
    } else {
      this.setTheme('light')
    }
  },
  addTheme(addTheme: Theme) {
    if (!this._knownThemes.value.includes(addTheme)) {
      this._knownThemes.value.push(addTheme)
      //
    } else {
      //console.error(`${addTheme} already a known theme`)
    }
  },
  removeTheme(removeTheme: Theme) {
    if (this.knownThemes.includes(removeTheme)) {
      this.knownThemes.filter((theme) => {
        theme != removeTheme
      })
      //
    } else {
      // console.error(`${removeTheme} not found`)
    }
  },
  setTheme(newThemeName: string) {
    const newTheme =
      this.knownThemes.filter((theme) => {
        return theme.name === newThemeName
      })[0] || ''
    if (newTheme) {

      this.currentTheme = newTheme
    } else {
      console.error('theme not found', newThemeName)
    }
  },
}
