async function loadComponents(id, file){                                               /* Função assincrona pois preciso que o código espere o "fetch" encontrar o arquivo "carrossel.html" */
    window.document.getElementById(id).innerHTML = await (await fetch(file)).text()    /* "await" faz o código esperar até que o "fetch()" e o ".text" retornem com o resultado */
}

loadComponents('banner-placeholder', '/components/banner.html') /* Carrega o carrossel ao iniciar o programa */