document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            console.log('Gracias por contactar conmigo!');
            form.reset();
        }
    });

    function validateForm() {
        let valido = true;
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '') {
            valido = false;
            alert('Por favor, introduce tu nombre.');
        }

        if (email === '') {
            valido = false;
            alert('Por favor, introduce tu correo electrónico.');
        } else if (!validateEmail(email)) {
            valido = false;
            alert('Por favor, introduce una dirección de correo electrónico válida.');
        }

        if (message === '') {
            valido = false;
            alert('Por favor, introduce tu mensaje.');
        }

        return valido;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //format valid per correu electronic
        return re.test(email);
    }
});