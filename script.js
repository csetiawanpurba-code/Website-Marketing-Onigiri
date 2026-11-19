const items = document.querySelectorAll(
'.card,.menu-card,.gallery-item,.testi'
);

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add('show');
}

});

});

items.forEach(item => {

item.classList.add('fade');
observer.observe(item);

});