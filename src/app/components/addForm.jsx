// components/Form.js
"use client"
import React, { useState } from 'react';
import wishStore from './appstore';
import { useRouter } from 'next/navigation'

const AddForm = () => {
  const { updateFormData } = wishStore();
  const router = useRouter()
  const newYearQuotes = [
    "Wishing you a year full of joy, prosperity, and success!",
    "May this New Year bring you peace and happiness.",
    "Cheers to a new year and another chance for us to get it right.",
    "May your dreams come true in the coming year.",
    "Wishing you health, wealth, and happiness in the New Year.",
    "May the New Year bring you love, joy, and new opportunities.",
    "Here's to a year filled with new adventures and achievements.",
    "May your days be merry and bright in the New Year.",
    "Wishing you a year filled with laughter and good times.",
    "May the coming year be the best one yet!"

  ];

  const images = [
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    message: '',
  });

  const [selectedQuote, setSelectedQuote] = useState('');

  const handleQuoteChange = (e) => {
    setSelectedQuote(e.target.value);
    setFormData({ ...formData, message: e.target.value });
  };



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    updateFormData(formData);
    router.push('/wish')
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setFormData({ ...formData, image: imageUrl });
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-xl mt-10">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <div className="flex items-center justify-center flex-wrap">
              {images.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className={`cursor-pointer m-1 border ${selectedImage === imageUrl ? 'border-red-800 max-w-40' : 'border-gray-300 max-w-32'
                    }`}
                  onClick={() => handleImageClick(imageUrl)}
                />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-600">
              Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div >
            <div className="w-64">
              <label htmlFor="newYearQuotes" className="block text-sm font-medium text-gray-600 mb-2">
                Select a New Year Quote:
              </label>
              <select
                id="newYearQuotes"
                name="newYearQuotes"
                value={selectedQuote}
                onChange={handleQuoteChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="" disabled>
                  Choose a Quote
                </option>
                {newYearQuotes.map((quote, index) => (
                  <option key={index} value={quote}>
                    {quote}
                  </option>
                ))}
              </select>

              {/* {selectedQuote && (
                <div className="mt-4">
                  <p className="font-semibold">Selected Quote:</p>
                  <p className="text-gray-800">{selectedQuote}</p>
                </div>
              )} */}
            </div>
          </div>
          <div className="mb-4 mt-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

  );
};

export default AddForm;
