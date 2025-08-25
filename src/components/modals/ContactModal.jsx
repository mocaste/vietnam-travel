import React, { useState } from 'react';
import Button from '../ui/Button';
import { submitContactForm } from '../../services/supabase';

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
        
        const result = await submitContactForm(formData);
        
        if (result.success) {
            setSubmitMessage('Mesajul a fost trimis cu succes!');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => {
                onClose();
                setSubmitMessage('');
            }, 2000);
        } else {
            setSubmitMessage('Eroare la trimiterea mesajului. Te rugăm să încerci din nou.');
        }
        
        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Contactează-ne</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-xl"
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Numele tău"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Telefon"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mesajul tău"
                        rows={4}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    ></textarea>

                    <Button
                        type="submit"
                        variant="success"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}
                    </Button>
                </form>

                {submitMessage && (
                    <p className={`text-center text-sm mt-4 ${
                        submitMessage.includes('succes') ? 'text-green-600' : 'text-red-600'
                    }`}>
                        {submitMessage}
                    </p>
                )}

                {!submitMessage && (
                    <p className="text-center text-sm text-gray-500 mt-4">
                        Te vom contacta în cel mai scurt timp!
                    </p>
                )}
            </div>
        </div>
    );
};

export default ContactModal;