import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./App.css";

const API_URL = "http://localhost:8081/api/products";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // GET
  const fetchProducts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // POST
  const addProduct = async (product) => {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });

    fetchProducts();
  };

  // PUT
  const updateProduct = async (product) => {
    await fetch(`${API_URL}/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });

    setSelectedProduct(null);
    fetchProducts();
  };

  // DELETE
  const deleteProduct = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    fetchProducts();
  };

  const editProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container">
      <h1>Product Manager</h1>

      <ProductForm
        addProduct={addProduct}
        updateProduct={updateProduct}
        selectedProduct={selectedProduct}
      />

      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
    </div>
  );
}

export default App;