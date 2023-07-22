if(document.querySelector('.menu')) {
    document.querySelector('.menu').addEventListener('click', function() {
        this.classList.toggle('opened');
        this.setAttribute('aria-expanded', this.classList.contains('opened'));
        document.querySelector('.nav-mobile').classList.toggle('opened');
    });
}