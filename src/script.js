const toggleMenu = (btn) => {
    const linkList = document.querySelectorAll('.link');
    btn.classList.toggle('active-btn');
    linkList.forEach((item) => {item.classList.toggle('active')});
}