function shopApp() {
  return {
    products: [
      {
        id: 1,
        name: "Kaos Streetwear",
        desc: "Nyaman dan trendy",
        price: 12000000,
        img: "assets/img/produk1.jpg",
        category: "Atasan",
      },
      {
        id: 2,
        name: "Hoodie Hangat",
        desc: "Cocok untuk dingin",
        price: 20000000,
        img: "assets/img/produk2.jpg",
        category: "Atasan",
      },
      {
        id: 3,
        name: "Celana Chino",
        desc: "Modis dan fleksibel",
        price: 15000000,
        img: "assets/img/produk3.jpg",
        category: "Bawahan",
      },
      {
        id: 4,
        name: "Jaket Denim",
        desc: "Keren sepanjang hari",
        price: 25000000,
        img: "assets/img/produk4.jpg",
        category: "Jaket",
      },
      {
        id: 5,
        name: "Kemeja Polos",
        desc: "Simple dan formal",
        price: 18000000,
        img: "assets/img/produk5.jpg",
        category: "Atasan",
      },
      {
        id: 6,
        name: "Sweater Rajut",
        desc: "Hangat dan stylish",
        price: 21000000,
        img: "assets/img/produk6.jpg",
        category: "Atasan",
      },
    ],
    page: 1,
    perPage: 4,
    search: "",
    selectedCategory: "",
    showDetail: null,
    cart: [],
    showCart: false,
    showCheckoutModal: false,

    // Filter dan paginate
    get filteredProducts() {
      return this.products.filter((p) => {
        const matchSearch = p.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
        const matchCategory =
          !this.selectedCategory || p.category === this.selectedCategory;
        return matchSearch && matchCategory;
      });
    },
    get paginatedProducts() {
      const start = (this.page - 1) * this.perPage;
      return this.filteredProducts.slice(start, start + this.perPage);
    },
    get pageCount() {
      return Math.ceil(this.filteredProducts.length / this.perPage);
    },
    get categories() {
      return [...new Set(this.products.map((p) => p.category))];
    },

    // Keranjang
    addToCart(product) {
      this.cart.push(product);
    },
    get totalPrice() {
      return this.cart.reduce((sum, item) => sum + item.price, 0);
    },

    // Checkout pakai modal
    checkout() {
      this.showCheckoutModal = true;
    },
    confirmCheckout() {
      alert("Checkout berhasil! Terima kasih telah berbelanja.");
      this.cart = [];
      this.showCart = false;
      this.showCheckoutModal = false;
    },
  };
}
