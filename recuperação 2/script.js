document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastro-form');
    const table = document.getElementById('alunos-list');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nome = document.getElementById('nome').value;
      const idade = document.getElementById('idade').value;
  
      const aluno = { nome, idade };
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${aluno.nome}</td>
        <td>${aluno.idade}</td>
      `;
  
      table.appendChild(row);
  
      // Limpar campos do formulário após cadastro
      form.reset();
    });
  });
  