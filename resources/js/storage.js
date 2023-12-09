import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

import { getApplicationStorage, updateApplicationStorage } from './utils'

window.Alpine = Alpine
Alpine.plugin(persist)

Alpine.data('application', () => ({
  app_mode: getApplicationStorage().app_mode,

  toggleAppMode() {
    this.app_mode = this.app_mode === 'dark' ? 'light' : 'dark'
    updateApplicationStorage('app_mode', this.app_mode)
  }
}))

Alpine.start()
