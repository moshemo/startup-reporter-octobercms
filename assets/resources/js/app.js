import { hamburgerJs } from './components/hamburger'
import { validateJs } from './components/validate'

document.onreadystatechange = function() {
  if (document.readyState === 'interactive') {
    hamburgerJs()
    validateJs()
  }
}

// if (document.readyState() === 'loading') {
//   document.addEventListener('DOMContentLoaded', hamburgerJs)
// } else {
//   hamburgerJs()
// }
// hamburgerJs()

// if (document.readyState() === 'loading') {
//   document.addEventListener('DOMContentLoaded', function() {
//     hamburgerJs()
//   })
// } else {
//   hamburgerJs()
// }
