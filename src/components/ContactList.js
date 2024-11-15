import React, { useEffect, useState } from 'react';
import AddContactForm from './AddContactForm';
import ViewContactDetails from './ViewContactDetails';
import EditContactForm from './EditContactForm';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [editingContact, setEditingContact] = useState(null);
  const [showAddContactForm, setShowAddContactForm] = useState(false);

  // Fetch contacts from the URL
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json'
        );
        const data = await response.json();
        setContacts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Delete contact handler
  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  // Add contact handler
  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
    setShowAddContactForm(false); // Close the form after adding the contact
  };

  return (
    <div className="p-4">
      {loading ? (
        <p>Loading contacts...</p>
      ) : contacts.length === 0 ? (
        <p>No contacts available</p>
      ) : (
        <div>
          {/* Button to open AddContactForm */}
          <button
            onClick={() => setShowAddContactForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 w-full flex items-center justify-center"
          >
            Add Contact
            <i className="fas fa-plus text-white p-3 bg-blue-500 rounded-full text-xl ml-2"></i>
          </button>

          {contacts.map((contact, index) => (
            <div
              key={contact.id}
              className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
            >
              <div className="flex items-center space-x-4 mb-4">
                {/* Serial Number */}
                <div className="text-gray-600 font-semibold">{index + 1}</div>
                <div className="bg-gray-100 p-3 rounded-full">
                  <i className="fas fa-user text-2xl text-gray-500"></i>
                </div>
                {/* Contact Details */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
                  <p className="text-sm text-gray-600">{contact.mobile}</p>
                </div>

                {/* Action Icons */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => setSelectedContact(contact)}
                    className="text-blue-500 hover:text-blue-700"
                    title="View Contact"
                  >
                    <i className="fas fa-eye text-xl"></i>
                  </button>
                  <button
                    onClick={() => setEditingContact(contact)}
                    className="text-green-500 hover:text-green-700"
                    title="Edit Contact"
                  >
                    <i className="fas fa-pen text-xl"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="text-red-500 hover:text-red-700"
                    title="Delete Contact"
                  >
                    <i className="fas fa-trash text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View Contact Modal */}
      {selectedContact && (
        <ViewContactDetails
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
        />
      )}

      {/* Edit Contact Form */}
      {editingContact && (
        <EditContactForm
          contact={editingContact}
          onUpdate={(updatedContact) => {
            setContacts(
              contacts.map((c) => (c.id === updatedContact.id ? updatedContact : c))
            );
            setEditingContact(null); // Close the edit form after update
          }}
          onClose={() => setEditingContact(null)}
        />
      )}

      {/* Add Contact Form as Popup Modal */}
      {showAddContactForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <AddContactForm
            onAddContact={handleAddContact}
            onClose={() => setShowAddContactForm(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ContactList;
