let telaAmazon = document.getElementById("tela-amazon")
telaAmazon.innerHTML += ``;

for(let item = 0; item <= produtos.length; item ++){
    if(produtos[item].plataforma.includes("amazon") ){
        telaAmazon.innerHTML += 
            `<div class="link">
                <h5>${produtos[item].nome}</h5>
                <img src="${produtos[item].imagem}" alt="">
                <a href="${produtos[item].link}">COMPRE AQUI</a>   
            </div>`
    }
    
}





