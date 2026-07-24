import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Rocket } from 'lucide-react';

const SuperHeroAnimation = ({ type, onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    const renderAnimation = () => {
        switch (type) {
            case 'ironman':
                return (
                    <motion.div
                        initial={{ x: '-100vw', y: '50vh', rotate: 45, scale: 0.5 }}
                        animate={{ x: '100vw', y: '-20vh', scale: 2 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute z-50 text-[#e23636] drop-shadow-[0_0_15px_rgba(226,54,54,0.8)]"
                    >
                        <Rocket size={100} />
                    </motion.div>
                );
            case 'cap':
                return (
                    <motion.div
                        initial={{ x: '-100vw', rotate: 0 }}
                        animate={{ x: '100vw', rotate: 1080 }}
                        transition={{ duration: 2, ease: "linear" }}
                        className="absolute z-50 top-1/2 -translate-y-1/2 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                    >
                        <Shield size={120} />
                    </motion.div>
                );
            case 'thor':
                return (
                    <motion.div
                        initial={{ y: '-100vh', opacity: 0, scale: 2 }}
                        animate={{ y: '50vh', opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
                        className="absolute z-50 left-1/2 -translate-x-1/2 text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,1)]"
                    >
                        <Zap size={200} fill="currentColor" />
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden bg-black/20 backdrop-blur-sm">
                    {renderAnimation()}
                </div>
            )}
        </AnimatePresence>
    );
};

export default SuperHeroAnimation;
