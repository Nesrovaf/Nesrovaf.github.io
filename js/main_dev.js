function toggle() {
    this.toggleAttribute('data-dark-theme');
    sessionStorage.setItem('theme', (this.getAttribute('data-dark-theme') !== null) ? 'dark' : '');
}

if (sessionStorage.getItem('theme') === 'dark') {
    for (let s of document.getElementsByClassName('switch')) {
        s.toggleAttribute('data-dark-theme', true);
    }
}
