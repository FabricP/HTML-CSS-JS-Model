async function loadComponents(element, file){
    window.document.getElementById(element).innerHTML = await (await fetch(file)).text();
}

loadComponents('header-placeholder', '/components/header.html');