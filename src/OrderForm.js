import React, { useState } from "react";
import Tesseract from "tesseract.js";

const OrderForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [orderItems, setOrderItems] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [image, setImage] = useState(null);
  const [ocrStatus, setOcrStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setOcrStatus("Processing image...");
      setImage(file);
      Tesseract.recognize(file, "eng", { logger: (m) => console.log(m) })
        .then(({ data: { text } }) => {
          const lines = text.trim().split("\n").filter((line) => line.trim().length);
          const extractedId = lines.length ? lines[0] : "";
          setTransactionId(extractedId);
          setOcrStatus("OCR complete. Please verify the transaction ID.");
        })
        .catch((err) => {
          console.error(err);
          setOcrStatus("OCR failed. Please try again or check the image quality.");
        });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const formData = new FormData();
    formData.append("customerName", customerName);
    formData.append("orderItems", orderItems);
    formData.append("transactionId", transactionId);
    if (image) formData.append("image", image);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzlzD6IT_l6_6582Gk_0NMb5a692fH_Tlx2WFI7MSM_5_UvL06g3uv_MLgY6vYtaMCQ/exec",
        {
          method: "POST",
          body: formData
        }
      );
      await response.text();
      alert("Form submitted successfully!");
      // Reset form fields
      setCustomerName("");
      setOrderItems("");
      setTransactionId("");
      setImage(null);
      setOcrStatus("");
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Pre-Booking Order Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Order Items</label>
          <textarea
            value={orderItems}
            onChange={(e) => setOrderItems(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
            placeholder="List your order items"
            rows="4"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Upload Payment Screenshot</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
            className="w-full text-gray-700"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Extracted Transaction ID</label>
          <input
            type="text"
            value={transactionId}
            readOnly
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        {ocrStatus && <p className="text-blue-600 text-center">{ocrStatus}</p>}

        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-3 rounded-lg text-white font-semibold transition duration-200 ${
            submitting ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
