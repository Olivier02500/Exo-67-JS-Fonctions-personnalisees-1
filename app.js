

/*
* get ID and add text in elements HTML
 */

function newText(elementId, Text) {
    let element = document.getElementById(elementId);
    element.innerHTML = Text;
    return element;
}

newText('p1','lorem');
newText('p2','lorem ispum');
newText('p3','lorem truc');
newText('p4','lorem machin');
newText('p5','lorem autre');