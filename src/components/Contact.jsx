import axios from 'axios';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/contact', formData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false // Only set to true if backend uses cookies
      });
      alert("✅ Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      alert("Error: Could not send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" required value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" placeholder="Email" required value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <textarea placeholder="Message" required value={formData.message}
        onChange={e => setFormData({ ...formData, message: e.target.value })} />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
