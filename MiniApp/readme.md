# Applicazione Calcolatrice

Un'applicazione web di calcolatrice semplice e intuitiva.

## JavaScript

Il codice JavaScript gestisce le operazioni matematiche della calcolatrice e l'interazione con gli elementi HTML. Ecco una panoramica delle funzionalità principali:

- **Inizializzazione delle Variabili**: Vengono inizializzate variabili per tracciare il valore visualizzato, gli operandi, gli operatori e lo stato di attesa per il secondo operando.

- **Funzione `appendToDisplay`**: Aggiunge numeri e operatori al display in base alla situazione corrente.

- **Funzione `handleOperator`**: Gestisce il clic sugli operatori, esegue calcoli e aggiorna il display.

- **Oggetto `performCalculation`**: Contiene funzioni per eseguire le operazioni matematiche.

- **Gestione degli Eventi Click**: Eventi gestiscono i clic sui pulsanti della calcolatrice per aggiungere input al display.

- **Aggiornamento del Display**: La funzione `updateDisplay` aggiorna il valore visualizzato nel display HTML.

- **Eventi Click per "=" e "C"**: Gestiscono il clic sui pulsanti "=" e "C" per ottenere il risultato e cancellare il display.

- **Input da Tastiera**: Permette l'input da tastiera, inclusa la cancellazione con il tasto "Backspace".

## HTML

L'HTML definisce la struttura della calcolatrice, inclusi i pulsanti numerici, gli operatori e il display.

## CSS

Il CSS personalizzato definisce lo stile della calcolatrice. Ecco alcuni punti chiave:

- `.icon-color`: Personalizza i colori delle icone Font Awesome.

- `.calculator-card` e `.calculator`: Impostano lo stile del contenitore della calcolatrice.

- `.calculator-screen`: Definisce lo stile del display, inclusi colori, allineamento del testo e dimensioni del font.

- `.button-calculator` e `.button-number`: Stilizza i pulsanti numerici e gli operatori.

- `.equal-sign`: Imposta lo stile del pulsante "=".

- `.calculator-keys`: Stilizza il contenitore dei pulsanti della calcolatrice, definendo colonne e spaziatura.

---
