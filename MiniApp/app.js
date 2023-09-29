// Seleziona gli elementi del DOM
const inputAnnotation = document.querySelector('.form-control');
const addButton = document.getElementById('add-button');
const annotationList = document.getElementById('list'); // Cambiato l'id a "list"

// Aggiungi un gestore di eventi al pulsante "Add"
addButton.addEventListener('click', function() {
    const annotationText = inputAnnotation.value.trim(); // Rimuovi spazi vuoti iniziali e finali
    if (annotationText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = annotationText;

        // Aggiungi un pulsante "Remove" a ciascun elemento della lista
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('btn', 'btn-outline-danger', 'btn-custom-outline'); // Utilizzo delle classi specificate
        removeButton.addEventListener('click', function() {
            listItem.remove(); // Rimuovi l'elemento quando viene fatto clic su "Remove"
        });

        listItem.appendChild(removeButton);
        annotationList.appendChild(listItem);
        inputAnnotation.value = ''; // Resetta il campo di input
        // Mostra il pulsante "Remove" quando viene aggiunto un elemento
        removeButton.classList.remove('d-none');
    }
});
