import React from 'react';

const ViewContactDetails = ({ contact, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white text-black p-6 rounded-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
        <div className="mb-4">
          <strong>Name:</strong> {contact.name}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {contact.email}
        </div>
        <div className="mb-4">
          <strong>Phone:</strong> {contact.mobile}
        </div>
        <div className="mb-4">
          <strong>Address:</strong> {contact.address || 'N/A'}
        </div>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewContactDetails;
