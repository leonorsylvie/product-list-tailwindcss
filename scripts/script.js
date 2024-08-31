//search function
function filterProducts() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const productTitles = document.querySelectorAll('.product-list .title');

    productTitles.forEach(title => {
        const product = title.closest('div');
        const text = title.textContent.toLowerCase();
        
        if (text.includes(searchInput)) {
            product.style.display = 'block';
        } 
        else {
            product.style.display = 'none';
        }
    });
}

//filter product
function filterProducts() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const selectedCategory = document.getElementById('filter').value.toLowerCase();
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        const productName = product.querySelector('h1.title').textContent.toLowerCase();
        const productCategory = product.getAttribute('data-category').toLowerCase();

        const matchesSearch = productName.includes(searchQuery);
        const matchesCategory = !selectedCategory || productCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

// lenis
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
