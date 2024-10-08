document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o recarregamento da página

    // Obtendo os valores inseridos pelo usuário
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Validação do telefone: exatamente 9 dígitos
    if (!/^\d{9}$/.test(phone)) {
        alert('O número de telefone deve conter exatamente 9 dígitos.');
        return; // Interrompe a execução se a validação falhar
    }

    // Criando uma nova linha para a tabela
    const table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Adicionando as células para o nome e telefone
    const nameCell = newRow.insertCell(0);
    const phoneCell = newRow.insertCell(1);

    // Preenchendo as células com os valores inseridos
    nameCell.textContent = name;
    phoneCell.textContent = phone;

    // Limpando os campos do formulário
    document.getElementById('contactForm').reset();
});
