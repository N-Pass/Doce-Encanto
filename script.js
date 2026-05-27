document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
  const navMenu = document.querySelector('.nav-menu')
  const navLinks = document.querySelectorAll('.nav-link')

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active')

      // Alternar ícone (opcional)
      const icon = mobileMenuBtn.querySelector('i')
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-times')
      } else {
        icon.classList.remove('fa-times')
        icon.classList.add('fa-bars')
      }
    })
  }

  // 2. Fechar menu ao clicar em um link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active')
      const icon = mobileMenuBtn.querySelector('i')
      if (icon) {
        icon.classList.remove('fa-times')
        icon.classList.add('fa-bars')
      }
    })
  })

  // 3. Efeito de sombra no Header ao rolar
  const header = document.querySelector('header')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)'
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)'
    }
  })

  // 4. Feedback simples nos botões (apenas visual/console log para demo)
  const interestButtons = document.querySelectorAll('.btn')
  interestButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      const text = btn.innerText
      // Se o link for apenas '#', previne o comportamento padrão apenas para demo
      if (btn.getAttribute('href') === '#' || !btn.getAttribute('href')) {
        e.preventDefault()
        console.log(`Botão clicado: ${text}`)
        // Aqui você poderia adicionar um toast notification no futuro
      }
    })
  })
})
