import React, { useState } from 'react';
import '../Styles/Inventory.css';
import ProductForm from '../Forms/ProductForm';

const initialProducts = [
  { name: "Rice", price: "GHC 430", quantity: "43 Packets", threshold: "12 Packets", expiry: "11/12/22", status: "in-stock" },
  { name: "Cocktail", price: "GHC 257", quantity: "22 Packets", threshold: "12 Packets", expiry: "21/12/22", status: "out-of-stock" },
  { name: "Red Bull", price: "GHC 405", quantity: "36 Packets", threshold: "9 Packets", expiry: "5/12/22", status: "in-stock" },
];

export const Inventory = () => {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('');
  const [formVisible, setFormVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
    threshold: '',
    expiry: '',
    status: 'in-stock',
  });

  const handleAddProduct = () => {
    setFormData({
      name: '',
      price: '',
      quantity: '',
      threshold: '',
      expiry: '',
      status: 'in-stock',
    });
    setCurrentProduct(null);
    setFormVisible(true);
  };

  const handleEditProduct = (product) => {
    setFormData(product);
    setCurrentProduct(product);
    setFormVisible(true);
  };

  const handleDeleteProduct = (product) => {
    setProducts(products.filter(p => p !== product));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentProduct) {
      // Update existing product
      setProducts(products.map(p => (p === currentProduct ? formData : p)));
    } else {
      // Add new product
      setProducts([...products, formData]);
    }
    setFormVisible(false);
  };

  const handleFilterProducts = () => {
    const filteredProducts = initialProducts.filter(product =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleDownloadProducts = () => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + products.map(product => `${product.name},${product.price},${product.quantity},${product.threshold},${product.expiry},${product.status}`).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "products.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handlePagination = (direction) => {
    alert(`${direction} button clicked!`);
  };

  return (
    <div className="container">
      <main className="main-content">
        <section className="overview">
          <div className="overview-item">
            <span className="label">Categories</span>
            <span className="value">14</span>
            <span className="subtext">Last 7 days</span>
          </div>
          <div className="overview-item">
            <span className="label">Total Products</span>
            <span className="value">{products.length}</span>
            <span className="subtext">Last 7 days</span>
          </div>
          <div className="overview-item">
            <span className="label">Top Selling</span>
            <span className="value">5</span>
            <span className="subtext">Last 7 days</span>
          </div>
          <div className="overview-item">
            <span className="label">Low Stocks</span>
            <span className="value">12</span>
            <span className="subtext">Ordered</span>
          </div>
        </section>

        <section className="products">
          <div className="products-header">
            <input
              type="text"
              placeholder="Filter by name"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="filter-input"
            />
            <button className="btn add-product" onClick={handleAddProduct}>Add Product</button>
            <button className="btn filters" onClick={handleFilterProducts}>Filter</button>
            <button className="btn download" onClick={handleDownloadProducts}>Download all</button>
          </div>

          <table className="products-table">
            <thead>
              <tr>
                <th>Products</th>
                <th>Buying Price</th>
                <th>Quantity</th>
                <th>Threshold Value</th>
                <th>Expiry Date</th>
                <th>Availability</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.threshold}</td>
                  <td>{product.expiry}</td>
                  <td className={`status ${product.status}`}>{product.status.replace('-', ' ')}</td>
                  <td>
                    <button className="btn edit" onClick={() => handleEditProduct(product)}>Edit</button>
                    <button className="btn delete" onClick={() => handleDeleteProduct(product)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button className="btn prev" onClick={() => handlePagination('Previous')}>Previous</button>
            <span>Page 1 of 10</span>
            <button className="btn next" onClick={() => handlePagination('Next')}>Next</button>
          </div>
        </section>

        {formVisible && (
          <ProductForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            onCancel={() => setFormVisible(false)}
          />
        )}
      </main>
    </div>
  );
};
