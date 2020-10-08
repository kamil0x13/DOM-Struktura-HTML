const addElement = (e, node, txt, attr, value) => {
    e.preventDefault();
    const element = document.createElement(node);
    if (txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
    if (attr) {
        element.setAttribute(attr, value)
    }
    document.querySelector('.content').appendChild(element)

}

const searchElements = (e, nameElement) => {
    e.preventDefault();
    const infoElement = document.querySelector('.result');
    infoElement.textContent = '';
    const elements = document.querySelectorAll(nameElement);
    if (elements.length) {
        infoElement.innerHTML = `<p class="result__number-info">W tym dokunencie znalazłem ${elements.length} elementów <strong>${nameElement}</strong></p>`
        showInfo(elements, infoElement)
    } else {
        infoElement.innerHTML = `<p class="result__number-info">W tym dokunencie nie znalazłem elementów <strong>${nameElement}</strong></p>`
        return;
    }
}

const showInfo = (elements, infoElement) => {
    console.log(elements, infoElement)
    elements.forEach(e => {
        const item = document.createElement('div');
        item.className = 'result__element-description';
        item.innerHTML = `
        <div><strong>${e.nodeName}</strong></div>
        <div>klasa/klasy: ${e.className}</div>
        <div>Wysokość elementu (offsetHeight): ${e.offsetHeight}</div>
        <div>Szerokość elementu (offsetWidth): ${e.offsetWidth}</div>
        <div>Odległość od lewej krawędzi (offsetLeft): ${e.offsetLeft}</div>
        <div>Odległość od górnej krawędzi (offsetTop): ${e.offsetTop}</div>
        <div>Liczba elementów dzieci (childElementCount): ${e.childElementCount}</div>
        `;
        infoElement.appendChild(item);
    })
}

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value,
));

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElements(
    e,
    searchForm.elements['searching-element'].value
));