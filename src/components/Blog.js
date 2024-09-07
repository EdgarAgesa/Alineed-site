import React from "react";
import { motion } from "framer-motion";

const Blogs = () => {
    return (
        <div className="bg-gray-100">
            {/* Blog or Tips Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 via-red-50 to-pink-50 text-gray-800 text-center" id="blog">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Blog & Tips</h2>

                    {/* Blog Post 1 */}
                    <motion.div
                        className="mb-12 p-6 bg-white shadow-lg rounded-lg text-left border-l-8 border-green-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">How to Properly Care for Your Luggage</h3>
                        <p className="text-gray-700 mb-4">
                            Taking good care of your luggage will help it last longer. Here are some essential tips:
                        </p>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li><strong>Always clean your luggage</strong> after a trip to remove any dirt or stains. Use a damp cloth and mild detergent for best results.</li>
                            <li><strong>Avoid overpacking</strong> your luggage, as this can strain the zippers and seams. Distribute weight evenly to prevent damage.</li>
                            <li><strong>Store your luggage</strong> in a cool, dry place when not in use. Avoid leaving it in direct sunlight or humid areas to prevent deterioration.</li>
                        </ul>
                        <p className="text-gray-700">
                            By following these simple steps, you can ensure that your luggage remains in excellent condition and serves you well on many more adventures.
                        </p>
                    </motion.div>

                    {/* Blog Post 2 */}
                    <motion.div
                        className="mb-12 p-6 bg-white shadow-lg rounded-lg text-left border-l-8 border-blue-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Latest in Luggage Trends for 2024</h3>
                        <p className="text-gray-700 mb-4">
                            Staying updated with the latest trends in luggage can enhance your travel experience. Here’s what’s trending in 2024:
                        </p>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li><strong>Smart Suitcases:</strong> Luggage equipped with GPS tracking and built-in chargers is becoming increasingly popular for tech-savvy travelers.</li>
                            <li><strong>Eco-Friendly Materials:</strong> Many brands are now using sustainable materials like recycled plastics and organic fabrics to reduce environmental impact.</li>
                            <li><strong>Customizable Designs:</strong> Personalization options allow you to choose colors, patterns, and even monograms, making your luggage stand out.</li>
                        </ul>
                        <p className="text-gray-700">
                            These innovations are designed to make travel more convenient and environmentally friendly, while also allowing you to express your personal style.
                        </p>
                    </motion.div>

                    {/* Blog Post 3 */}
                    <motion.div
                        className="p-6 bg-white shadow-lg rounded-lg text-left border-l-8 border-purple-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">How to Fix Common Luggage Problems</h3>
                        <p className="text-gray-700 mb-4">
                            Even the most durable luggage can encounter issues. Here’s how to tackle some common problems:
                        </p>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li><strong>Stuck Zippers:</strong> Apply a lubricant like WD-40 or graphite powder to ease the zipper’s movement. Gently work the zipper back and forth to free it.</li>
                            <li><strong>Broken Wheels:</strong> Check if the wheel assembly is damaged. If so, you can often replace individual wheels or the entire assembly depending on the suitcase design.</li>
                            <li><strong>Cracked Shell:</strong> For hard-shell suitcases, use a repair kit designed for plastic. Clean the area, apply the filler, and sand it smooth before repainting if needed.</li>
                        </ul>
                        <p className="text-gray-700">
                            With the right tools and a bit of patience, many common luggage problems can be resolved at home, saving you time and money.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Blogs;
