let telaAmazon = document.getElementById("tela-amazon")
telaAmazon.innerHTML += ``;

for(let item = 0; item <= produtos.length; item ++){
    if(produtos[item].plataforma.includes("amazon") ){
        telaAmazon.innerHTML += 
            `<a class="link" href="${produtos[item].link}"_blank">
                <h5>${produtos[item].nome}</h5>
                <img src="${produtos[item].imagem}" alt="">     
            </a>`
    }
    
}





