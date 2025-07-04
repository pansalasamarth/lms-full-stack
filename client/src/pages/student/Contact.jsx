import { useState } from 'react';
import Footer from '../../components/student/Footer';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
    <div className="min-h-screen px-6 py-12 md:px-20 text-gray-800 bg-gradient-to-b from-green-100/70">
          <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 text-cyan-600">Contact Us</h1>
              <p className="mb-6">
                  We&apos;d love to hear from you! Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                      <label className="block mb-2 font-medium">Name</label>
                      <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                      <label className="block mb-2 font-medium">Email</label>
                      <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                      <label className="block mb-2 font-medium">Message</label>
                      <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 px-4 py-2 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <button
                      type="submit"
                      className="bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition"
                  >
                      Send Message
                  </button>
              </form>
          </div>
      </div>
      <Footer />
      </>
  );
};

export default Contact;