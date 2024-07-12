import React from 'react';
import '../Styles/Inventory.css';

const products = [
  { name: "Rice", price: "GHC 430", quantity: "43 Packets", threshold: "12 Packets", expiry: "11/12/22", status: "in-stock" },
  { name: "Cocktail", price: "GHC 257", quantity: "22 Packets", threshold: "12 Packets", expiry: "21/12/22", status: "out-of-stock" },
  { name: "Red Bull", price: "GHC 405", quantity: "36 Packets", threshold: "9 Packets", expiry: "5/12/22", status: "in-stock" },
  { name: "Rice", price: "GHC 430", quantity: "43 Packets", threshold: "12 Packets", expiry: "11/12/22", status: "in-stock" },
  { name: "Cocktail", price: "GHC 257", quantity: "22 Packets", threshold: "12 Packets", expiry: "21/12/22", status: "out-of-stock" },
  { name: "Red Bull", price: "GHC 405", quantity: "36 Packets", threshold: "9 Packets", expiry: "5/12/22", status: "in-stock" },
  { name: "Rice", price: "GHC 430", quantity: "43 Packets", threshold: "12 Packets", expiry: "11/12/22", status: "in-stock" },
  { name: "Cocktail", price: "GHC 257", quantity: "22 Packets", threshold: "12 Packets", expiry: "21/12/22", status: "out-of-stock" },
  { name: "Red Bull", price: "GHC 405", quantity: "36 Packets", threshold: "9 Packets", expiry: "5/12/22", status: "in-stock" },
];

export const Inventory = () => {
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
            <span className="value">868</span>
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
            <button className="btn add-product">Add Product</button>
            <button className="btn filters">Filters</button>
            <button className="btn download">Download all</button>
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
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button className="btn prev">Previous</button>
            <span>Page 1 of 10</span>
            <button className="btn next">Next</button>
          </div>
        </section>
      </main>
    </div>
  );
};
