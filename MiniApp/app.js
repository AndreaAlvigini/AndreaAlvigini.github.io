// Seleziona gli elementi del DOM
const inputElement = document.querySelector('.form-control');
const addButton = document.getElementById('add-button');
const annotationList = document.getElementById('list');
const removeButton = document.getElementById('remove');

// Funzione per aggiungere un elemento alla lista
function addItem(annotationText) {
    if (annotationText !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('animate__animated', 'animate__zoomIn');

        const textSpan = document.createElement('span');
        textSpan.textContent = annotationText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('btn', 'btn-outline-danger', 'btn-custom-outline');

        const checkboxDiv = document.createElement('div');
        checkboxDiv.classList.add('form-check')

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox'; // Imposta il tipo checkbox
        checkbox.classList.add('form-check-input' , 'custom-checkbox');
        checkbox.addEventListener('change', function () {
            // Quando la checkbox viene cambiata, aggiorna lo stile dell'elemento
            if (checkbox.checked) {
                textSpan.style.textDecoration = 'line-through'; // Segna l'elemento completato
            } else {
                textSpan.style.textDecoration = 'none'; // Deseleziona l'elemento
            }
        });

        removeButton.addEventListener('click', function () {
            removeItem(listItem);
        });
        
        textSpan.textContent = annotationText;

        // Aggiungi il div contenente la checkbox e il testo all'elemento listItem
        listItem.appendChild(checkboxDiv);
        listItem.appendChild(textSpan);

        checkboxDiv.appendChild(checkbox);
        listItem.appendChild(textSpan);
        listItem.appendChild(removeButton);
        annotationList.appendChild(listItem);
        inputElement.value = '';
        removeButton.classList.remove('d-none');
    }
}

// Funzione per rimuovere un elemento dalla lista
function removeItem(item) {
    item.classList.add('animate__animated', 'animate__zoomOut');
    item.addEventListener('animationend', function () {
        item.remove();
        if (annotationList.children.length === 0) {
            removeButton.classList.add('d-none');
        }
    });
}
//funzione con INVIO
inputElement.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        const annotationText = inputElement.value.trim();
        addItem(annotationText);
    }
});
// Collega la funzione all'evento di clic del pulsante "Add"
addButton.addEventListener('click', function () {
    const annotationText = inputElement.value.trim();
    addItem(annotationText);
});

// Collega la funzione removeItem all'evento di clic del pulsante "Remove"
removeButton.addEventListener('click', function () {
    const listItems = annotationList.querySelectorAll('li');
    listItems.forEach(function (item) {
        removeItem(item);
    });
});
