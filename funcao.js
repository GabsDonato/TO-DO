// Função para adicionar um novo item
document.getElementById('addItemButton').addEventListener('click', function() {
    const itemName = prompt('Qual item você deseja adicionar?');

    if (itemName) {
      const itemContainer = document.createElement('div');
      itemContainer.classList.add('input-container');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'Lista';

      const label = document.createElement('label');
      label.textContent = itemName;

      itemContainer.appendChild(checkbox);
      itemContainer.appendChild(label);

      document.getElementById('item-list').appendChild(itemContainer);
    }
  });

  // Função para remover os itens marcados como concluídos
  document.getElementById('removeCompletedButton').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(function(checkbox) {
      checkbox.parentElement.remove();
    });
  });