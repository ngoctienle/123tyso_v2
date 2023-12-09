import { getApplicationStorage, initStorage, prefersDarkMode } from './utils'

/* Init Application */
const appStorage = {
  app_mode: getApplicationStorage()
    ? getApplicationStorage().app_mode
    : prefersDarkMode()
    ? 'dark'
    : 'light',
  my_match: []
}
localStorage.setItem('_application', initStorage(appStorage))
