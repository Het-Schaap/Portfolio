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