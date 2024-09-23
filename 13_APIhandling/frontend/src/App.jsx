import { useState } from "react";
import "./App.css";
import useRTQ from "./customHook/useRTQ";

function App() {
  const [products, error, loading, search, setSearch] = useRTQ("/api/products?search=");

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  if (loading) {
    return <h1>Loading.......</h1>;
  }

  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1>Chai aur API in react</h1>
      <h2>Number of Products are : {products.length}</h2>

      <div className="style">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <img src={product["image"]} alt="img" height={200} width={200} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
