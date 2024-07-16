import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../Styles/ProductForm.css';

const ProductForm = ({ formData, setFormData, onSubmit, onCancel, currentProduct }) => {
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleValidation = () => {
        let formIsValid = true;
        let errors = {};

        if (!formData.name) {
            formIsValid = false;
            errors["name"] = "Product Name cannot be empty";
        }
        if (!formData.price) {
            formIsValid = false;
            errors["price"] = "Buying Price cannot be empty";
        }
        if (!formData.quantity) {
            formIsValid = false;
            errors["quantity"] = "Quantity cannot be empty";
        }
        if (!formData.threshold) {
            formIsValid = false;
            errors["threshold"] = "Threshold Value cannot be empty";
        }
        if (!formData.expiry) {
            formIsValid = false;
            errors["expiry"] = "Expiry Date cannot be empty";
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (handleValidation()) {
            onSubmit(e);
            setSuccessMessage(currentProduct ? "Product updated successfully!" : "Product added successfully!");
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    };

    return (
        <section className="product-form">
            <div className="form-header">
                <h2>{currentProduct ? "Edit Product" : "Add Product"}</h2>
                <button className="close-button" onClick={onCancel}>
                    <FaTimes />
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <span className="error">{errors["name"]}</span>

                <input
                    type="text"
                    placeholder="Buying Price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
                <span className="error">{errors["price"]}</span>

                <input
                    type="text"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />
                <span className="error">{errors["quantity"]}</span>

                <input
                    type="text"
                    placeholder="Threshold Value"
                    value={formData.threshold}
                    onChange={(e) => setFormData({ ...formData, threshold: e.target.value })}
                />
                <span className="error">{errors["threshold"]}</span>

                <input
                    type="date"
                    placeholder="Expiry Date"
                    value={formData.expiry}
                    onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                />
                <span className="error">{errors["expiry"]}</span>

                <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                    <option value="in-stock">In Stock</option>
                    <option value="low-stock">Low Stock</option>
                    <option value="out-of-stock">Out Of Stock</option>
                </select>

                <input
                    type="text"
                    placeholder="Category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
                <span className="error">{errors["category"]}</span>

                <button type="submit" className="button submit">
                    {currentProduct ? "Update Product" : "Add Product"}
                </button>
            </form>
            {successMessage && <div className="success-message">{successMessage}</div>}
        </section>
    );
};

export default ProductForm;
