const ProductList = ({ products, deleteProduct, editProduct }) => {
  return (
    <div className="list">
      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id} className="card">
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <p>{p.description}</p>

          <button onClick={() => editProduct(p)}>Edit</button>
          <button onClick={() => deleteProduct(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;