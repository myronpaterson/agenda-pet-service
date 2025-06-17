// Seleciona o formulário e o corpo da tabela do documento HTML
const form = document.getElementById('contact-form');
const contactList = document.getElementById('contact-list');

// Adiciona um 'escutador' que espera o formulário ser enviado
form.addEventListener('submit', function(event) {
    // Impede o recarregamento da página
    event.preventDefault();

    // Seleciona todos os campos de input
    const nameInput = document.getElementById('contact-name');
    const phoneInput = document.getElementById('contact-phone');
    const animalTypeInput = document.getElementById('animal-type');

    // Cria uma nova linha para a tabela (<tr>)
    const newRow = document.createElement('tr');

    // Cria a célula do nome (<td>) e insere o valor
    const nameCell = document.createElement('td');
    nameCell.textContent = nameInput.value;

    // Cria a célula do telefone (<td>) e insere o valor
    const phoneCell = document.createElement('td');
    phoneCell.textContent = phoneInput.value;
    
    // LÓGICA PARA O ÍCONE CONDICIONAL
    const animalCell = document.createElement('td');
    let animalIconClass = '';

    if (animalTypeInput.value === 'gato') {
        animalIconClass = 'fa-solid fa-cat'; // Classe do Font Awesome para gato
    } else {
        animalIconClass = 'fa-solid fa-dog'; // Classe para cachorro
    }
    animalCell.innerHTML = `<i class="${animalIconClass}"></i>`;

    // Adiciona as três células à nova linha
    newRow.appendChild(nameCell);
    newRow.appendChild(phoneCell);
    newRow.appendChild(animalCell); // Adiciona a nova célula do animal

    // Adiciona a nova linha ao corpo da tabela
    contactList.appendChild(newRow);

    // Limpa os campos do formulário para a próxima entrada
    nameInput.value = '';
    phoneInput.value = '';
});