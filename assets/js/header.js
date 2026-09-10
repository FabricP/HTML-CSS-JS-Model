async function loadComponents(id, file){                                               /* Função assincrona pois preciso que o código espere o "fetch" encontrar o arquivo "header.html" */
    window.document.getElementById(id).innerHTML = await (await fetch(file)).text()    /* "await" faz o código esperar até que o "fetch()" e o ".text" retornem com o resultado */
}

function showMenu(id){
    let element_id = window.document.getElementById(id)                     /* Encontra o elemento que foi clicado */
    
    if (element_id.style.display == 'flex'){                                /* Comparação para saber se o menu está aberto */
        element_id.style.display =  'none'                                  /* Caso esteja aberto o menu é fechado */
    } else{
        for (let position of document.getElementsByClassName('submenu')){   /* Para cada posição do array da classe submenu... */
            position.style.display = 'none'                                 /* Fecha todos os menus abertos */
        }

        element_id.style.display = 'flex'                                   /* Abre o menu que foi clicado */
    }
}

loadComponents('header-placeholder', '/components/header.html')