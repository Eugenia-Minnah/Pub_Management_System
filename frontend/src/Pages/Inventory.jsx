import React, { useState } from 'react';
import '../Styles/Inventory.css';
import ProductForm from '../Forms/ProductForm';

const initialProducts = [
  { name: "Rice", price: "GHC 430", quantity: "43 Packets", threshold: "12 Packets", expiry: "11/12/22", status: "in-stock", category: "Food" },
  { name: "Cocktail", price: "GHC 257", quantity: "22 Packets", threshold: "12 Packets", expiry: "21/12/22", status: "out-of-stock", category: "Beverages" },
  { name: "Red Bull", price: "GHC 405", quantity: "36 Packets", threshold: "9 Packets", expiry: "5/12/22", status: "low-stock", category: "Beverages" },
  //Add more products with categories
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
    category: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const handleAddProduct = () => {
    setFormData({
      name: '',
      price: '',
      quantity: '',
      threshold: '',
      expiry: '',
      status: 'in-stock',
      category: '',
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
      setProducts(products.map(p => (p === currentProduct ? formData : p)));
      setSuccessMessage("Product updated successfully!");
    } else {
      setProducts([...products, formData]);
      setSuccessMessage("Product added successfully!");
    }
    setFormVisible(false);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleFilterProducts = () => {
    const filteredProducts = initialProducts.filter(product =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleDownloadProducts = () => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + products.map(product => `${product.name},${product.price},${product.quantity},${product.threshold},${product.expiry},${product.status},${product.category}`).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "products.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handlePagination = (direction) => {
    if (direction === 'Previous' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'Next' && currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Calculate current products to display
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate unique categories
  const uniqueCategories = [...new Set(products.map(product => product.category))];

  return (
    <div className="container">
      <main className="main-content">
        <section className="overview">
          <div className="overview-item">
            <span className="label">Categories </span>
            <span className="value">{uniqueCategories.length} </span>
            <span className="subtext">Last 7 days</span>
          </div>
          <div className="overview-item">
            <span className="label">Total Products </span>
            <span className="value">{products.length} </span>
            <span className="subtext">Last 7 days</span>
          </div>
          
          <div className="overview-item">
            <span className="label">Low Stocks </span>
            <span className="value">{products.filter(p => p.status === 'low-stock').length} </span>
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
            <button className="btn product_btn" onClick={handleAddProduct}>Add Product</button>
            <button className="btn product_btn" onClick={handleFilterProducts}>Filter</button>
            <button className="btn product_btn" onClick={handleDownloadProducts}>Download all</button>
          </div>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {formVisible && (
            <ProductForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
              onCancel={() => setFormVisible(false)}
              currentProduct={currentProduct}
            />
          )}
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
              {currentProducts.map((product, index) => (
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
            <button className="btn prev" onClick={() => handlePagination('Previous')} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {Math.ceil(products.length / productsPerPage)}</span>
            <button className="btn next" onClick={() => handlePagination('Next')} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>Next</button>
          </div>
        </section>
      </main>
    </div>
  );
};
