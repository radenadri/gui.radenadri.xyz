const themeSwitcher = (current : string) => {

  if (current === 'coolLight') {
    localStorage.setItem('theme', 'coolDark')
    return 'coolDark'
  }

  localStorage.setItem('theme', 'coolLight')
  return 'coolLight'
}

export default themeSwitcher