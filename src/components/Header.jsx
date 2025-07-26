import React from 'react';
import { Plane } from 'lucide-react';
import Button from './ui/Button';

const Header = ({ onContactClick }) => {
    return (
        <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Plane className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Free Spirit Exotic Travel</h1>
                            <p className="text-emerald-100 text-sm">Călătorii de neuitat în Vietnam</p>
                        </div>
                    </div>
                    <Button
                        variant="secondary"
                        onClick={onContactClick}
                    >
                        Contactează-ne
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;