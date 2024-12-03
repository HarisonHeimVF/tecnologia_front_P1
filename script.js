$(document).ready(function() {
    // Inicializa o carrossel
    $('.carousel').carousel({
        interval: 5000 // Intervalo de 5 segundos entre as transições
    });
});
// Contador de visitas
let visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) : 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);
console.log(`Número de visitas: ${visitCount}`);

// Validação de formulário
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validação simples
            if (name && email && message) {
                document.getElementById('messageStatus').innerText = 'Mensagem enviada com sucesso!';
                document.getElementById('messageStatus').classList.add('show');
            } else {
                document.getElementById('messageStatus').innerText = 'Por favor, preencha todos os campos!';
                document.getElementById('messageStatus').classList.add('show');
            }
        });

        // Animação de transição para o status da mensagem
        setTimeout(() => {
            document.getElementById('messageStatus').classList.remove('show');
        }, 3000); // Remove a mensagem após 3 segundos
    }

    // Sistema de filtros
    const filterSelect = document.getElementById('filter');
    if (filterSelect) {
        filterSelect.addEventListener('change', function () {
            const selectedValue = this.value;
            const products = document.querySelectorAll('.product');

            products.forEach(product => {
                product.classList.remove('show'); // Oculta todos os produtos
                if (selectedValue === 'all' || product.classList.contains(selectedValue)) {
                    product.classList.add('show'); // Mostra produtos que correspondem ao filtro
                }
            });
        });

        // Exibir todos os produtos inicialmente
        filterSelect.dispatchEvent(new Event('change'));
    }
});