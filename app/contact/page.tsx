'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import settings from '@/data/settings.json';

export default function ContactPage() {
  const handleEmailContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${settings.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400">
            Get in touch with our team
          </p>
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 h-full">

              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">
                      WhatsApp
                    </h3>

                    <p className="text-gray-400">
                      {settings.whatsappNumber}
                    </p>

                    <a
                      href={settings.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-blue hover:underline text-sm"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>


                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">
                      Email
                    </h3>

                    <p className="text-gray-400">
                      {settings.email}
                    </p>
                  </div>
                </div>


                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">
                      Business Hours
                    </h3>

                    <p className="text-gray-400">
                      {settings.businessHours}
                    </p>
                  </div>
                </div>


                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">
                      Location
                    </h3>

                    <p className="text-gray-400">
                      Sheikhupura, Pakistan
                    </p>
                  </div>
                </div>

              </div>


              <div className="mt-8 pt-6 border-t border-white/10">

                <a
                  href={settings.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Message on WhatsApp
                </a>

              </div>

            </div>
          </motion.div>



          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >

            <div className="glass rounded-3xl p-8 h-full">

              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>


              <form onSubmit={handleEmailContact} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 text-white border border-white/10"
                />


                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 text-white border border-white/10"
                />


                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 text-white border border-white/10 resize-none"
                />


                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold"
                >
                  Send Message
                </button>


              </form>

            </div>

          </motion.div>

        </div>



        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 max-w-6xl mx-auto"
        >

          <div className="glass rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white mb-6">
              Our Location
            </h2>


            <div className="h-64 md:h-96 rounded-2xl overflow-hidden">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3170.001364710565!2d-122.0814!3d37.3898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918c28a688b5b1f%3A0x80b1b64a08cfde2!2sSheikhupura%2C%20Pakistan!5e0!3m2!1sen!2s!4v1784371310287!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />

            </div>

          </div>

        </motion.div>


      </div>
    </main>
  );
}