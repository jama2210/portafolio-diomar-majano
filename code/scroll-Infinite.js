const observa = new IntersectionObserver((entrada) => {
    entrada.forEach((entrar) => {
        if (entrar.isIntersecting) {
            entrar.target.classList.add('show');
        } else {
            entrar.target.classList.remove('show');
        }
    })
})

const elementHiddens = document.querySelectorAll('.hidden');
elementHiddens.forEach((el) => observa.observe(el));