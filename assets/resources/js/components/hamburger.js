const mobileTrigger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-menu')

export function hamburgerJs() {
  mobileTrigger.addEventListener('click', function() {
    mobileTrigger.classList.toggle('is-active')
    mobileMenu.classList.toggle('mobile-menu-open')
    console.log('hambguer js is working 5')
  })
}
