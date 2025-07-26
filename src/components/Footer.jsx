import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-xl font-bold mb-4">Free Spirit Exotic Travel</h4>
                        <p className="text-gray-300 mb-4">
                            Transformăm visurile de călătorie în realitate cu experiențe autentice și de neuitat.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                                <Mail className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-4">Destinații populare</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Vietnam - Circuite complete</li>
                            <li>Thailanda - Plaje paradisiace</li>
                            <li>Japonia - Cultură și tradiție</li>
                            <li>Cambodia - Templele Angkor</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-4">Contact</h4>
                        <div className="space-y-2 text-gray-300">
                            <p>📧 contact@free-spirit.ro</p>
                            <p>📞 +40 XXX XXX XXX</p>
                            <p>📍 București, România</p>
                            <p className="text-emerald-400 font-semibold">Suport 24/7 disponibil</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400">&copy; 2025 Free Spirit Exotic Travel. Toate drepturile rezervate.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;