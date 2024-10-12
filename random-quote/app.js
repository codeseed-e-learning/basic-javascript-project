const fetchQuotes = async () => {
    await fetch('https://dummyjson.com/quotes').then((response)=>{
        if(!response.ok){
            throw new Error;
        }
        return response.json();
    }).then((data) => {
        let quote = data.quotes
        let max = quote.length;
        let random = Math.floor(Math.random() * max);
        let quoteSingle = quote[random].quote;
        let quoteHTML = document.getElementById("quote");
        quoteHTML.innerHTML = quoteSingle;
    })
}
document.getElementById("generate").addEventListener("click" , () => {
    fetchQuotes();
})