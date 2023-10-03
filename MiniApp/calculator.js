document.addEventListener('DOMContentLoaded', function () {
    console.log("Test1");
    let displayValue = '0';  // Il valore visualizzato nella calcolatrice
    let firstOperand = null; // Il primo operando
    let waitingForSecondOperand = false; // Indica se si sta aspettando il secondo operando
    let operator = null;  // L'operatore selezionato

    // Funzione per aggiungere un numero o un operatore al display
    function appendToDisplay(value) {
        console.log("Test3");
        // Verifica se stiamo aspettando il secondo operando per una nuova operazione
        if (waitingForSecondOperand) {
            // Se sì, assegna il valore direttamente a displayValue
            displayValue = value;
            console.log("Test2");
            // E imposta il flag waitingForSecondOperand su false
            waitingForSecondOperand = false;
        } else {
            // Se non stiamo aspettando il secondo operando
            // Verifica se il displayValue attuale è '0'
            if (displayValue === '0') {
                // Se è '0', sostituisci con il nuovo valore
                displayValue = value;
            } else {
                // Se non è '0', concatena il nuovo valore al displayValue esistente
                displayValue = displayValue + value;
            }
        }
    }

    // Funzione per gestire il clic su un operatore
    function handleOperator(nextOperator) {
        // Converte il valore del display in un numero a virgola mobile (float)
        const inputValue = parseFloat(displayValue);
        console.log("Test4");

        // Verifica se `firstOperand` è nullo, il che significa che è il primo operatore nella sequenza
        if (firstOperand === null) {
            firstOperand = inputValue; // Assegna il valore del display a `firstOperand`
        } else if (operator) {
            // Se `operator` ha già un valore, significa che l'utente ha premuto un operatore prima
            // di completare il calcolo. Esegue il calcolo utilizzando il precedente operatore
            // e mostra il risultato sul display.

            // Esempio: Se l'utente preme "+" dopo aver inserito "2" e "3", 
            // il risultato "5" viene calcolato e visualizzato sul display.

            // Eseguire il calcolo in base all'operatore precedente
            const result = performCalculation[operator](firstOperand, inputValue);

            // Converte il risultato in una stringa e lo assegna a `displayValue`
            displayValue = String(result);

            // Aggiorna `firstOperand` con il risultato per il calcolo successivo
            firstOperand = result;
        }

        // Imposta il flag `waitingForSecondOperand` su `true` per indicare che stiamo aspettando
        // il secondo operando dell'operazione successiva.
        waitingForSecondOperand = true;

        // Memorizza l'operatore corrente (ad esempio "+", "-", "*", "/") in `operator`
        operator = nextOperator;
    }

    // Oggetto per gestire le operazioni di calcolo
    const performCalculation = {

        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
        '=': (x, y) => y
    };

    // Eventi Click
    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {
        const { target } = event;
        // Verifica se l'elemento cliccato è un pulsante
        if (!target.matches('button')) {
            return; // Se non è un pulsante, esci dalla funzione
        }
        // Verifica se l'elemento cliccato ha la classe 'operator' (operatore)
        if (target.classList.contains('operator')) {
            handleOperator(target.value); // Chiama la funzione handleOperator con il valore del pulsante come argomento
            updateDisplay(); // Aggiorna il display della calcolatrice
            return; // Esci dalla funzione
        }
        // Verifica se l'elemento cliccato ha la classe 'number' (numero)
        if (target.classList.contains('button-number')) {
            appendToDisplay(target.value); // Aggiungi il valore del pulsante al display
            updateDisplay(); // Aggiorna il display della calcolatrice
            return; // Esci dalla funzione
        }
        // Verifica se l'elemento cliccato ha la classe 'number' (numero) o 'decimal' (virgola)
        if (target.classList.contains('button-number') || target.classList.contains('decimal')) {
            // Se il valore del pulsante è '.', gestisci il punto
            if (target.value === '.') {
                // Verifica se il displayValue contiene già un punto
                if (!displayValue.includes('.')) {
                    // Se non contiene un punto, aggiungi il punto
                    displayValue += '.';
                }
            } else {
                // Altrimenti, gestisci normalmente gli altri input numerici
                appendToDisplay(target.value);
            }
            updateDisplay(); // Aggiorna il display della calcolatrice
            return; // Esci dalla funzione
        }
    });

    // Aggiungi un listener per il pulsante "="
    document.querySelector('.equal-sign').addEventListener('click', () => {
        handleOperator('=');
        updateDisplay();
    });


    // Aggiungi un listener per il pulsante "C" (Clear)
    document.querySelector('.all-clear').addEventListener('click', () => {
        displayValue = '0';
        firstOperand = null;
        waitingForSecondOperand = false;
        operator = null;
        updateDisplay();
    });
    function updateDisplay() {
        const display = document.querySelector('.calculator-screen');
        display.value = displayValue; // Assegna il valore corrente del display al campo di input
    }
    // Inizializza il display
    updateDisplay();
});