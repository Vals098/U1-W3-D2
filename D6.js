/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function (newTitle) {
  const title = document.getElementsByTagName("h1")[0]
  title.innerText = newTitle
}

changeTitle('Nuovo Titolo')

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {
    const title2 = document.getElementsByTagName("h1")[0]
    title2.classList.add("myHeading")
}

addClassToTitle()

/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function (newPar) {
    const paragraphs = document.querySelectorAll('div > p')
    paragraphs.forEach((p) => {
        p.innerText = newPar
        //here you are selecting only one p, not the whole array of p (paragraphs)
        // paragraphs.innerText = newPar --> NO, takes all the array with the multiple p
    })
}

changePcontent('Questo è il nuovo testo dei p figli di un div')


/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
    const links = document.getElementsByTagName('a')
    const filteredLinks = Array.from(links).filter((link) => {
     !link.closest("footer")
     // ! --> don't include
     // .closest() --> tags inside ()
    })
    filteredLinks.forEach ((link) =>{
        link.setAttribute('href', 'https://www.google.com')
    })
}

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {}

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function () {}

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {}

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {}

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {}

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {}

/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const generateTable = function () {}

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function () {}

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {}
