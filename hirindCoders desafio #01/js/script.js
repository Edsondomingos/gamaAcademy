

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('Dados',convertData);
    let pegar = document.getElementById("confirmacao");
    let confirmacao = `
    <p style="background-color: green;">Confirmado, Você receberá novidades das promoções.</p>`;
    pegar.innerHTML = confirmacao;
})