import { useEffect, useState } from "react";

const ProductForm = ({ addProduct, updateProduct, selectedProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: ""
  });

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (product.id) {
      updateProduct(product);
    } else {
      addProduct(product);
    }

    setProduct({ name: "", price: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>{product.id ? "Update Product" : "Add Product"}</h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {product.id ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default ProductForm;