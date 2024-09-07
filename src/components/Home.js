import React from 'react';
import LiveChat from './Livechat';
import { CogIcon, AdjustmentsIcon, ScissorsIcon, KeyIcon, ColorSwatchIcon, PhoneIcon, ShieldCheckIcon } from '@heroicons/react/solid';
import logo from '../assests/Alineed_Solutions.gif';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden pt-16"> 
      <header className="w-full relative bg-gray-800 text-white" id="home">
        <div
          className="h-80 bg-cover bg-center"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
        </div>
      </header>     
      <LiveChat />

      {/* Services Section */}
      <section className="py-16 bg-white" id="services">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Our Services</h2>
        <div className="max-w-full mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {/* Service Cards */}
          <div className="bg-gray-100 p-4 max-w-full w-full rounded-lg text-center flex flex-col items-center shadow-md hover:bg-green-100 transition-transform transform hover:scale-105">
            <CogIcon className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mb-2 sm:mb-4" />
            <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Zipper Repairs</h3>
          </div>
          <div className="bg-gray-100 p-4 max-w-full w-full rounded-lg text-center flex flex-col items-center shadow-md hover:bg-green-100 transition-transform transform hover:scale-105">
            <AdjustmentsIcon className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mb-2 sm:mb-4" />
            <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Wheel Replacement</h3>
          </div>
          <div className="bg-gray-100 p-4 max-w-full w-full rounded-lg text-center flex flex-col items-center shadow-md hover:bg-green-100 transition-transform transform hover:scale-105">
            <ScissorsIcon className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mb-2 sm:mb-4" />
            <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Scratch Removal</h3>
          </div>
          <div className="bg-gray-100 p-4 max-w-full w-full rounded-lg text-center flex flex-col items-center shadow-md hover:bg-green-100 transition-transform transform hover:scale-105">
            <KeyIcon className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mb-2 sm:mb-4" />
            <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Lock Repairs</h3>
          </div>
          <div className="bg-gray-100 p-4 max-w-full w-full rounded-lg text-center flex flex-col items-center shadow-md hover:bg-green-100 transition-transform transform hover:scale-105">
            <ColorSwatchIcon className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mb-2 sm:mb-4" />
            <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Color Restoration</h3>
          </div>
          <div className="bg-gray-100 p-4 max-w-full w-full rounded-lg text-center flex flex-col items-center shadow-md hover:bg-green-100 transition-transform transform hover:scale-105">
            <PhoneIcon className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mb-2 sm:mb-4" />
            <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Phone Pouch Repairs</h3>
          </div>
          <div className="bg-gray-100 p-4 max-w-full w-full rounded-lg text-center flex flex-col items-center shadow-md hover:bg-green-100 transition-transform transform hover:scale-105">
            <ShieldCheckIcon className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mb-2 sm:mb-4" />
            <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Reinforcement</h3>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16" id="why-choose-us">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Why Choose Us</h2>
        <div className="max-w-full mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
            <img src="https://images.pexels.com/photos/12966761/pexels-photo-12966761.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Experience" className="h-24 w-24 mx-auto mb-4 rounded-full" />
            <h3 className="text-sm sm:text-lg font-semibold text-gray-700">Years of Experience</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Our team has years of experience ensuring that your luggage is repaired efficiently.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
            <img src="https://images.pexels.com/photos/28028316/pexels-photo-28028316/free-photo-of-the-leather-wallet-is-made-from-brown-and-tan.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Quality Materials" className="h-24 w-24 mx-auto mb-4 rounded-full" />
            <h3 className="text-sm sm:text-lg font-semibold text-gray-700">Quality Materials</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">We only use premium materials and components for durable repairs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
            <img src="https://images.pexels.com/photos/6262845/pexels-photo-6262845.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fast Service" className="h-24 w-24 mx-auto mb-4 rounded-full" />
            <h3 className="text-sm sm:text-lg font-semibold text-gray-700">Fast Turnaround</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">We provide quick and efficient repair services without compromising quality.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100" id="testimonials">
        <h2 className="text-3xl font-bold text-gray-800 text-center">What Our Clients Say</h2>
        <div className="max-w-full mx-auto px-4 mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-600 text-sm sm:text-base">“The service was exceptional! My suitcase was repaired in no time and looks brand new.”</p>
            <p className="mt-4 font-semibold text-gray-800">Jane Doe</p>
            <p className="text-gray-600 text-sm sm:text-base">Traveler</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-600 text-sm sm:text-base">“Highly recommend! The quality of repair was top-notch and the turnaround time was impressive.”</p>
            <p className="mt-4 font-semibold text-gray-800">John Smith</p>
            <p className="text-gray-600 text-sm sm:text-base">Businessman</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-600 text-sm sm:text-base">“Excellent customer service and quality repairs. Will definitely use their services again.”</p>
            <p className="mt-4 font-semibold text-gray-800">Emily Johnson</p>
            <p className="text-gray-600 text-sm sm:text-base">Tourist</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 text-gray-800" id="faq">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

          {/* FAQ Item 1 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">What is the turnaround time for repairs?</h3>
            <p className="mt-2 text-gray-600">
              The turnaround time for repairs varies depending on the type of repair needed. Generally, most repairs are completed within 3-5 business days. For more urgent repairs, please contact us to discuss expedited options.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">How much do repairs cost?</h3>
            <p className="mt-2 text-gray-600">
              Our repair costs vary based on the type and extent of damage. Common repairs like zipper replacements start at $15, while more complex repairs may cost more. Please reach out to us with details of your repair needs for a quote.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">What payment methods do you accept?</h3>
            <p className="mt-2 text-gray-600">
              We accept various payment methods including cash, credit/debit cards, and mobile money transfers. If you have any specific payment preferences or questions, feel free to contact us.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Do you offer a warranty on repairs?</h3>
            <p className="mt-2 text-gray-600">
              Yes, we offer a 30-day warranty on all repairs. If you encounter any issues with your repair within this period, please bring it back to us, and we will address it at no additional cost.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Can I drop off my luggage outside of business hours?</h3>
            <p className="mt-2 text-gray-600">
              Our shop is open from 9 AM to 6 PM, Monday through Saturday. Unfortunately, we do not have a drop-off box for outside of business hours. If you need to arrange a drop-off outside of these hours, please contact us in advance to make special arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-800 text-white text-center" id="contact">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4 text-lg">We're located at Utawala Shooters, Nairobi. Feel free to drop by for any inquiries or reach out to us:</p>
        <p className="mt-2">Phone: +254721987966</p>
        <p className="mt-1">Email: contact@alineedsolutions.com</p>

        {/* Google Maps Embed */}
        <div className="mt-8 mx-auto max-w-md">
          <iframe 
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.343318390618!2d36.884071315289!3d-1.3173426990502895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a0a98912321%3A0x2e087af981761236!2sUtawala%2C%20Shooters!5e0!3m2!1sen!2ske!4v1630467321075!5m2!1sen!2ske"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
