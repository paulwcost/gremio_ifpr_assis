const slides = document.querySelectorAll('.slide');
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
});

// Auto slide
setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 5000);


//MENU

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Fecha menu ao clicar em qualquer link do menu
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});


//caixa de mensagem

  const form = document.getElementById('contato-form');
  const statusDiv = document.getElementById('status');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        statusDiv.innerHTML = "<p style='color:lightgreen;'>Mensagem enviada com sucesso!</p>";
        form.reset();
      } else {
        statusDiv.innerHTML = "<p style='color:red;'>Erro ao enviar a mensagem.</p>";
      }
    }).catch(() => {
      statusDiv.innerHTML = "<p style='color:red;'>Erro ao enviar a mensagem.</p>";
    });
  });

