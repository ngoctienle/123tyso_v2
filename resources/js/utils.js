export function getApplicationStorage() {
  const existingData = JSON.parse(localStorage.getItem('_application'))
  return existingData
}

export function updateApplicationStorage(keyStorage, value) {
  const data = getApplicationStorage()
  data[keyStorage] = value
  localStorage.setItem('_application', JSON.stringify(data))
}

export function prefersDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function initStorage(value) {
  return JSON.stringify(value)
}
