import React, { useState } from 'react';

export const OrderForm = ({ order, onAdd, onEdit, onClose }) => {
    const [formState, setFormState] = useState(
        order || { customerName: '', items: [{ name: '', quantity: 1 }], total: 0, status: 'Pending' }
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: name === 'total' ? Number(value) : value });
    };

    const handleItemChange = (index, key, value) => {
        const newItems = formState.items.map((item, i) => (
        i === index ? { ...item, [key]: key === 'quantity' ? Number(value) : value } : item
        ));
        setFormState({ ...formState, items: newItems });
    };

    const handleAddItem = () => {
        setFormState({ ...formState, items: [...formState.items, { name: '', quantity: 1 }] });
    };

    const handleRemoveItem = (index) => {
        setFormState({ ...formState, items: formState.items.filter((_, i) => i !== index) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (order) {
        onEdit(formState);
        } else {
        onAdd(formState);
        }
        onClose();
    };

    return (
        <form className="order-form" onSubmit={handleSubmit}>
        <h2>{order ? 'Edit Order' : 'Add Order'}</h2>
        <label>
            Customer Name:
            <input
            type="text"
            name="customerName"
            value={formState.customerName}
            onChange={handleInputChange}
            />
        </label>
        <label>
            Items:
            {formState.items.map((item, index) => (
            <div key={index} className="item-input">
                <input
                type="text"
                name="name"
                placeholder="Item Name"
                value={item.name}
                onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                />
                <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                />
                <button type="button" onClick={() => handleRemoveItem(index)}>Remove</button>
            </div>
            ))}
            <button type="button" onClick={handleAddItem}>Add Item</button>
        </label>
        <label>
            Total:
            <input
            type="number"
            name="total"
            value={formState.total}
            onChange={handleInputChange}
            />
        </label>
        <label>
            Status:
            <select name="status" value={formState.status} onChange={handleInputChange}>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            </select>
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
        </form>
  );
};
