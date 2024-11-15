import React, { useState } from 'react';

const AddContactForm = ({ onAddContact, onClose }) => {
  const [contact, setContact] = useState({
    id: Date.now(),
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email && contact.phone && contact.address) {
      onAddContact(contact);
      setContact({ id: Date.now(), name: '', email: '', phone: '', address: '' });
    } else {
      alert('Please fill all fields!');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-auto text-black">
      <h2 className="text-2xl font-bold mb-4">Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label>Address</label>
          <textarea
            name="address"
            value={contact.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Submit
          </button>
          <button type="button" onClick={onClose} className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContactForm;
