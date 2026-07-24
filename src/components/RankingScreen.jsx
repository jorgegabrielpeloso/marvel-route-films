import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowLeft, Star, Film, Award } from 'lucide-react';
import { subscribeToRanking } from '../services/firebase';

const RankingScreen = ({ onBack }) => {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        const unsubscribe = subscribeToRanking((data) => {
            setRanking(data);
        });
        return () => unsubscribe();
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen bg-[#0f1115] text-white p-6 pb-24"
        >
            <button 
                onClick={onBack}
                className="flex items-center text-gray-400 hover:text-white transition-colors mb-6"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver a la Base
            </button>

            <div className="flex items-center justify-center mb-10">
                <Trophy className="w-8 h-8 text-[#e23636] mr-3" />
                <h1 className="text-3xl font-black tracking-wider uppercase">
                    Ranking de Agentes
                </h1>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
                {ranking.map((user, index) => (
                    <motion.div
                        key={user.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center p-4 rounded-xl border ${
                            index === 0 ? 'bg-[#e23636]/10 border-[#e23636]' : 
                            index === 1 ? 'bg-gray-800/50 border-gray-600' :
                            index === 2 ? 'bg-amber-900/20 border-amber-800/50' :
                            'bg-[#1a1f26] border-transparent'
                        }`}
                    >
                        <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-4 ${
                            index === 0 ? 'bg-[#e23636] text-white' : 
                            'bg-gray-800 text-gray-400'
                        }`}>
                            #{index + 1}
                        </div>

                        <div className="flex-1">
                            <h3 className="font-bold text-lg">{user.name}</h3>
                            <div className="flex text-sm text-gray-400 mt-1 space-x-4">
                                <span className="flex items-center">
                                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                                    {user.score} pts
                                </span>
                                <span className="flex items-center">
                                    <Film className="w-3 h-3 text-blue-400 mr-1" />
                                    {user.moviesWatched} pelis
                                </span>
                                <span className="flex items-center">
                                    <Award className="w-3 h-3 text-purple-400 mr-1" />
                                    {user.badges} insignias
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {ranking.length === 0 && (
                    <div className="text-center text-gray-500 mt-10">
                        Cargando base de datos global...
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default RankingScreen;
