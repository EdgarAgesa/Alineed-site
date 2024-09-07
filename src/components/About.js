import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden pt-16">
            {/* About Us Section */}
            <section className="py-12 px-4 bg-gradient-to-r from-teal-200 to-blue-100 text-center" id="about">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About Alineed Solutions</h2>
                <p className="mt-4 text-gray-800 text-lg max-w-3xl mx-auto">
                    At <span className="text-indigo-600 font-semibold">Alineed Solutions</span>, we breathe new life into your travel essentials. Whether it's a cherished suitcase or a must-have luggage piece, our expert team is dedicated to restoring it to its former glory.
                    <br /> <br />
                    With <span className="text-gray-900 font-medium">over a decade</span> of hands-on experience in luggage repair, we combine cutting-edge techniques with genuine craftsmanship. We take pride in our attention to detail, ensuring each repair meets the highest standards of quality.
                </p>
                <div className="flex justify-center mt-8">
                    <img src="https://images.pexels.com/photos/20325709/pexels-photo-20325709/free-photo-of-travel-concept-baggage-luggage-in-airport-terminal.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Suitcase Repair" className="rounded-lg shadow-lg w-96 h-auto" />
                </div>
                <p className="mt-4 text-gray-600 text-sm max-w-md mx-auto">
                    <em>Our skilled craftsmen carefully restore each suitcase, using precision tools and time-honored techniques to ensure durability and style for your next adventure.</em>
                </p>
                <p className="mt-6 text-gray-700 text-md max-w-3xl mx-auto">
                    Our mission is simple: to provide you with hassle-free, reliable, and high-quality repair services. Whether your luggage needs a simple fix or a complete overhaul, <span className="italic text-teal-600">we've got you covered</span>.
                </p>
            </section>
        </div>
    );
};

export default About;
