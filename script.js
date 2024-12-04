document.addEventListener('DOMContentLoaded', function () {

    // Suavizar o efeito de rolagem para links de navegação
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Efetuar a mudança de cor no botão "Saiba Mais" ao passar o mouse
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#0056b3';
        });
        btn.addEventListener('mouseout', function () {
            this.style.backgroundColor = ''; // Restaura a cor original
        });
    });

    // Exemplo de interação com o header
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.remove('bg-light');
        } else {
            navbar.classList.add('bg-light');
            navbar.classList.remove('bg-dark');
        }
    });

});
