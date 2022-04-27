// function getData(){
//     const endpoint ='https://www.rijksmuseum.nl/api/nl/collection?key=m37TFPjT'
//     //const key ='m37TFPjT'
//     //let url=''
//     const display = document.getElementById('art-collection');
//     display.textContent = "loading, even geduld a.u.b";
//     const collectionOfArt = [];

//     /*
//     Data ophalen
//     een fetch schrijven die de data ophaalt, en deze terug stuurt.

//     */
// }

/* Functie exporteren met een link die data terug stuurt */
export const getData = async (url) => {
    return await fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
        .finally(() => {
            console.log('klaar met laden')
            // binnenkort: een lader toevoegen en verwijderen
        })
}