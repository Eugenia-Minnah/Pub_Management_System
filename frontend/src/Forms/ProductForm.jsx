import React from 'react';

const ProductForm = ({ formData, setFormData, onSubmit, onCancel }) => {
    return (
        <section className="product-form">
        <h2>{formData.currentProduct ? "Edit Product" : "Add Product"}</h2>
        <form onSubmit={onSubmit}>
            <input
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            />
            <input
            type="text"
            placeholder="Buying Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
            />
            <input
            type="text"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            required
            />
            <input
            type="text"
            placeholder="Threshold Value"
            value={formData.threshold}
            onChange={(e) => setFormData({ ...formData, threshold: e.target.value })}
            required
            />
            <input
            type="date"
            placeholder="Expiry Date"
            value={formData.expiry}
            onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
            required
            />
            <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            >
            <option value="in-stock">In Stock</option>
            <option value="out-of-stock">Low Stock</option>
            <option value="in-stock">Out Of Stock</option>
            </select>
            <button type="submit" className="btn submit">
            {formData.currentProduct ? "Update Product" : "Add Product"}
            </button>
            <button type="button" className="btn cancel" onClick={onCancel}>
            Cancel
            </button>
        </form>
        </section>
    );
    };

export default ProductForm;
