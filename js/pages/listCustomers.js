const URL_CUSTOMERS = 'http://localhost:8000/customers'


function listCustomers() {
  //buscando todos os veiculos, na API
  fetch(URL_CUSTOMERS, {method: 'GET'})
    .then(response => response.json())
    .then(costumers => {
      costumers.map(col =>{
        document.getElementById('table-listCustomers').innerHTML += `
        <td>${col.name}</td>
        <td>${col.email}</td>
        <td>${col.phone}</td>
        `;
      });
    });



  return `
    <table class="table table-hover table-striped mt-3">
      <thead class="table-dark">
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Email</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody id="table-listCustomers">
        
      </tbody>
    </table>
  `;

}

