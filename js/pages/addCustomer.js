// Endereço do db
const URL_ADD_CUSTOMERS = 'http://localhost:8000/customers'

function saveCustomer() {
  event.preventDefault();

  // Pegando os valores digitados
  let newCustomer = {
    name: document.getElementById('customer_name').value,
    phone: document.getElementById('customer_phone').value,
    email: document.getElementById('customer_email').value,
  }

  // Consumindo a api do db e inserindo os dados
  fetch(URL_ADD_CUSTOMERS, {
    method: 'POST',
    body: JSON.stringify(newCustomer), // Transformando os dados em string
    headers: {
        "Content-Type": "application/json"
      }
  })

  alert('Cliente inserido');
}


function addCustomer() {
  return `
    <section class="row mt-4">
      <div class="col-12">
        <h2>Novo Cliente</h2>
      </div>
      <div class="col">
        <form action="" onsubmit="saveCustomer()">

          <label for="customer_name" class="mt-3">Nome</label>
          <input type="text" id="customer_name" placeholder="Nome" class="form-control mb-3">

          <label class="mt-3 for="customer_phone">Telefone</label>
          <input type="text" id="customer_phone" placeholder="85 99999-9999" class="form-control mb-3">

          <label class="mt-3 for="customer_email">Email</label>
          <input type="email" id="customer_email" placeholder="email@email.com" class="form-control mb-3">

          <div class="d-grid mt-5">
            <button class="btn btn-primary">ENVIAR</button>
          </div>
        </form>
      </div>

      <div class="col">
        <div class="d-flex justify-content-center align-items-center">
          <img src="assets/pessoas-exercicio.png" width="100%" alt="Desenho de pessoas se exercitando">
        </div>
      </div>
    </section>
  `;
}
