async function loadComponents(element, file){                                               /* Função assincrona pois preciso que o código espere o "fetch" encontrar o arquivo "header.html" */
    window.document.getElementById(element).innerHTML = await (await fetch(file)).text();   /* "await" faz o código esperar até que o "fetch()" e o ".text" retornem com o resultado */
}

loadComponents('header-placeholder', '/components/header.html');