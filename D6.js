/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function (newTitle) {
  const title = document.getElementsByTagName("h1")[0]
  title.innerText = newTitle
}

changeTitle("Nuovo Titolo") //verified

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {
  const title2 = document.getElementsByTagName("h1")[0]
  title2.classList.add("myHeading")
}

addClassToTitle() //verified

/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function (newPar) {
  const paragraphs = document.querySelectorAll("div > p")
  paragraphs.forEach((p) => {
    p.innerText = newPar
    //here you are selecting only one p, not the whole array of p (paragraphs)
    // paragraphs.innerText = newPar --> NO, takes all the array with the multiple p
  })
}

changePcontent("Questo è il nuovo testo dei p figli di un div") //verified

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
  const links = document.getElementsByTagName("a")
  const filteredLinks = Array.from(links).filter((link) => {
    !link.closest("footer")
    // ! --> don't include
    // .closest() --> tags inside ()
  })
  filteredLinks.forEach((link) => {
    link.setAttribute("href", "https://www.google.com")
  })
}

changeUrls() //verified

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
  const newLi = document.createElement("li")
  newLi.innerText = "Questo è un nuovo li della seconda ul"
  const secondUl = document.getElementById("secondList")
  secondUl.appendChild(newLi)
}

addToTheSecond() //verified

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function () {
  const parInDiv = document.createElement("p")
  parInDiv.innerText = "Questo è un nuovo paragrafo nel primo div"
  const firstDiv = document.querySelector("div")
  firstDiv.appendChild(parInDiv)
}

addParagraph() //verified

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

//using element.remove you eliminate an element from the DOM
//const hideFirstUl = function () {
//    const firstUl = document.querySelector('ul')
//    firstUl.remove()
//}
//
//hideFirstUl()

//using element.style.display = "none" it just hides the element bu it is still in the DOM
const hideFirstUl = function () {
  const firstUl = document.querySelector("ul")
  firstUl.style.display = "none"
}

hideFirstUl() //verified

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

//const paintItGreen = function () {
//    const uls = document.getElementsByTagName('ul')
//
//    Array.from(uls).forEach((ul) => {
//        ul.style.backgroundColor = 'green'
//    })
//}
//
//paintItGreen()

//.getElementsByTagName gives an HTML collection so if I want to use .forEach
//I first have to convert it into an array
//Using .qerySelectorAll I would have a Nodelist and it will accept .forEach (but not the other methods)

const paintItGreen = function () {
  const uls = document.querySelectorAll("ul")

  Array.from(uls).forEach((ul) => {
    ul.style.backgroundColor = "green"
  })
}

paintItGreen() //verified

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {
  //take the element
  const titleH1 = document.querySelector("h1")
  //add the element.eventListener("action", function(){code})
  titleH1.addEventListener("click", function () {
    titleH1.innerText = titleH1.innerText.slice(0, -1)
  })
}

makeItClickable() //verified

/* ESERCIZIO 10
Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {
  const footer = document.querySelector("footer")
  const linkFooter = footer.querySelector("a")

  //linkFooter.addEventLinstener --> when the link in the footer is clicked
  //footer.addEventListener --> when the footer is clicked
  footer.addEventListener("click", function () {
    alert(linkFooter.href)
  })
}

revealFooterLink() //verified

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
