// Banner da Main Page
function swapBanner(posicao){
    window.document.getElementById('banner-imagem').src = bannerImagem[posicao]                                     /* Muda a imagem do banner selecionando a posição no array de acordo com o parâmetro passado pelo html */
    window.document.getElementById('banner-link').href = bannerLink[posicao]                                        /* Muda o link do banner selecionando a posição no array de acordo com o parâmetro passado pelo html */
    for (let contador = 0; contador <= 4; contador++ ){                                                             /* Estrutura for para alterar a cor de fundo dos radioButtons */
        window.document.getElementById(`banner-radioButton#${contador}`).style.background = "whitesmoke"            /* Altera a cor de fundo do radioButton de acordo com a variavel contador */
    }
    window.document.getElementById(`banner-radioButton#${posicao}`).style.background = "orange"                     /* Muda a cor do raddioButton selecionado de acordo com o parâmetro passado pelo html */
}

// Array de imagens do banner
var bannerImagem = [
    "/assets/img/placeholder-512x512.png",
    "/assets/img/placeholder-512x512.png",
    "/assets/img/placeholder-512x512.png",
    "/assets/img/placeholder-512x512.png",
    "/assets/img/placeholder-512x512.png"
]
window.document.getElementById('banner-imagem').src = bannerImagem[0] /* Muda a imagem do banner selecionando a posição 0 do array */

// Array de links das imagens do banner
var bannerLink = [
    "/pages/placeholder.html",
    "/pages/placeholder.html",
    "/pages/placeholder.html",
    "/pages/placeholder.html",
    "/pages/placeholder.html"
]
window.document.getElementById('banner-link').href = bannerLink[0] /* Muda o link do banner selecionando a posição 0 do array */

window.document.getElementById('banner-radioButton#0').style.background = "orange" /* Muda a cor inicial do radioButton do banner */