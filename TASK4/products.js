const products = [
  {
    name: "Wireless Mouse",
    category: "tech",
    price: 786,
    rating: 4.5,
    image: "TASK4/images/mouse.jpg"
  },
  {
    name: "Bluetooth Headphones",
    category: "tech",
    price: 999,
    rating: 4.8,
    image: "TASK4/images/headphones.jpg"
  },
  {
    name: "Denim Jacket",
    category: "fashion",
    price: 1249,
    rating: 4.3,
    image: "TASK4/images/jacket.jpg"
  },
  {
    name: "Python Book",
    category: "books",
    price: 299,
    rating: 4.6,
    image: "TASK4/images/python.jpg"
  },
  {
    name: "Dell Laptop",
    category: "tech",
    price: "80,000",
    rating: 4.2,
    image: "TASK4/images/laptop.jpg"
  },
  {
    name: "T-Shirt",
    category: "fashion",
    price: 699,
    rating: 4.0,
    image: "TASK4/images/tshirt.jpg"
  }
];


const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortBy = document.getElementById("sortBy");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: ₹<span>${product.price}</span></p>
      <p>Rating: <span>${product.rating}</span></p>
    `;
    productList.appendChild(card);
  });
}


function filterAndSort() {
  let filtered = [...products];

  // Filter by category
  const selectedCategory = categoryFilter.value;
  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  // Filter by price
  const selectedPrice = priceFilter.value;
  if (selectedPrice !== "all") {
    const [min, max] = selectedPrice.split("-").map(Number);
    filtered = filtered.filter(p => p.price >= min && p.price <= max);
  }

  // Sort
  if (sortBy.value === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy.value === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

// Event listeners
categoryFilter.addEventListener("change", filterAndSort);
priceFilter.addEventListener("change", filterAndSort);
sortBy.addEventListener("change", filterAndSort);

// Initial load
displayProducts(products);
