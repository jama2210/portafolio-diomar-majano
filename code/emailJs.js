const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = "ENVIANDO";

    const serviceID = 'default_service';
    const templateID = 'template_34vsgye';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        window.location.href = "../pages/mensajeExito.html"
    }, (err) => {
        btn.value = 'ENVIAR';
        alert(JSON.stringify(err));
    });
});