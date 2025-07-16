import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');
    setShowToast(false);

    emailjs
      .send(
        'service_1qnkn8r',
        'template_hgsfxwc',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'S_l0Puew8LHJeABAx'
      )
      .then(() => {
        setLoading(false);
        setSuccessMsg('Thanks for contacting me! 🙌 I will get back to you soon.');
        setForm({ name: '', email: '', message: '' });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
      })
      .catch((error) => {
        setLoading(false);
        setErrorMsg('Oops, something went wrong. Please try again later.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <>
      <section id="contact" className="bg-black text-white px-4 py-20 min-h-screen">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="max-w-3xl mx-auto grid">
          <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-1 rounded-2xl shadow-lg">
            <div className="bg-gray-900 rounded-[15px] p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 text-indigo-300">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-indigo-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-indigo-300">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 h-36 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    placeholder="Write your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${
                    loading ? 'bg-indigo-700' : 'bg-indigo-600 hover:bg-indigo-700'
                  } text-white py-3 rounded-lg font-semibold transition`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {errorMsg && <p className="text-red-500 text-center mt-4">{errorMsg}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Toast notification */}
      {showToast && (
        <div
          className="fixed bottom-6 right-6 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-up"
          style={{ minWidth: '250px', zIndex: 1000 }}
        >
          {successMsg}
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease forwards;
        }
      `}</style>
    </>
  );
};

export default Contact;
