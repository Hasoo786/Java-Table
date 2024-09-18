

var input = document.querySelector ("#input")
var div = document.querySelector ("#table")


function sum () {

    div.innerHTML = ""
    var num = input.value
    div.innerHTML += ""
    
    for (i = 1; i <= 10; i++){
       
        console.log( i * num );

        div.innerHTML += `<p> ${num} x ${i} = ${num * i} <p/>`
        
    }

}