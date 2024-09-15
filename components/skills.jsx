import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, 
            },
        },
    };

    const skillVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="mt-12 max-w-3xl text-center">
            <h2 className="text-3xl font-semibold mb-6">Yetenekler</h2>
            <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'Node.js', 'Express'].map(skill => (
                    <motion.div
                        key={skill}
                        className="bg-gray-800 rounded-lg p-4"
                        variants={skillVariants}
                        whileHover={{ scale: 1.1 }}
                    >
                        <p className="text-lg font-bold">{skill}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
