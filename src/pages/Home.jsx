import { useState } from "react";
import products from "../data/products";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {

    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <>

      <Navbar />
      <Hero />

      <section id="home">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </section>

      <section id="categories">
        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />
      </section>

      <section id="products">
        <ProductList
          products={filteredProducts}
        />
      </section>

      <section id="cart">
        <Cart />
      </section>

      <Footer />

    </>
  );
};

export default Home;