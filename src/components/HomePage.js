import React from 'react';
import ContactList from './ContactList';

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Contact Management</h1>
      </div>
      <ContactList onUpdateContacts={(updatedContacts) => console.log(updatedContacts)} />
    </div>
  );
};

export default HomePage;
