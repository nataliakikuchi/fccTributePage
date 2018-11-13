const listItens = document.querySelectorAll("#biography-list li");
const size = listItens.length;

const search = document.querySelector("#search-input");

search.addEventListener("keyup", function(){
    const inputValue = search.value;

    for(let index = 0; index < size; index +=1) {
        
        // //todas
        // listItens

        // // cada <li>
        // listItens[index]

        // // texto dentro de cada <li>
        // listItens[index].innerHTML

        const listContent = listItens[index].innerHTML; 

        if(listContent.indexOf(inputValue) != -1) {
            listItens[index].style.display = 'list-item';
        } else {
            listItens[index].style.display = 'none';
        }
    }
})

//dropdown titulo
const title = document.querySelector("#dropdown-options");

//conteúdo do dropdown retornado em string
const conteudoDropdown = document.querySelectorAll("#dropdown-menu a");

//armazenar a quantidade de itens do array
const dropdownItens = conteudoDropdown.length;

title.addEventListener('click', function(){
    for(let i = 0; i < conteudoDropdown.length; i++) {
         // verifico se o conteudo esta visivel
        if(conteudoDropdown[i].style.display === 'none') {
            conteudoDropdown[i].style.display = 'block';
            console.log("oi");
        } else {
            conteudoDropdown[i].style.display = 'none';
            console.log("ola");
        }
    }
   
})

//le o estilo que está aplicado
//elemento.style.display === 'block' //compara