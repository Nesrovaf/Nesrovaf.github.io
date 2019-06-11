
let themeable_nodes = [document.body, ...document.body.childNodes];

function toggle() {
    for (let node of themeable_nodes) {
        if (node.nodeType === 1) {
            node.toggleAttribute('data-dark-theme');
        }
    }
    sessionStorage.setItem('theme', (this.getAttribute('data-dark-theme') !== null) ? 'dark' : '');
}

if (sessionStorage.getItem('theme') === 'dark') {
    for (let node of themeable_nodes) {
        if (node.nodeType === 1) {
            node.toggleAttribute('data-dark-theme', true);
        }
    }
}
