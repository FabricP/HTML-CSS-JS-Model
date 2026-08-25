async function loadComponents(element, file){
    window.document.getElementById(element).innerHTML = await (await fetch(file)).text();
}

loadComponents('footer-placeholder', '/components/footer.html');