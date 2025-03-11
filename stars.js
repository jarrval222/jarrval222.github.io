document.addEventListener('mousemove', function(e) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${e.pageX}px`;
    star.style.top = `${e.pageY}px`;
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 500);
});