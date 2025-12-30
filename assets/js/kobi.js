document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn_L')
  const tabs = document.querySelectorAll('.tab')

  // Default active
  tabButtons[0].classList.add('active-btn_L')
  tabs[0].classList.add('active-tab')

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab').replace('#', '')

      // Remove active classes
      tabButtons.forEach(b => b.classList.remove('active-btn_L'))
      tabs.forEach(t => t.classList.remove('active-tab'))

      // Activate selected
      btn.classList.add('active-btn_L')
      document.getElementById(targetId).classList.add('active-tab')
    })
  })
})

const events = document.querySelectorAll('.Event_L')
const popup = document.getElementById('popup')
const popupTitle = document.getElementById('popupTitle')
const popupRules = document.getElementById('popupRules')
const closeBtn = document.querySelector('.popup-close')

events.forEach(event => {
  event.addEventListener('click', () => {
    popupTitle.innerHTML = event.dataset.title
    popupRules.innerHTML = event.dataset.rules
    popup.style.display = 'flex'
  })
})

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none'
})

popup.addEventListener('click', e => {
  if (e.target === popup) {
    popup.style.display = 'none'
  }
})
