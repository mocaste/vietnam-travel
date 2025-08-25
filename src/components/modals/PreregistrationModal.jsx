import React, { useState } from 'react';
import Button from '../ui/Button';
import { useTranslation } from '../../hooks/useTranslation';
import { submitPreregistrationForm } from '../../services/supabase';

const PreregistrationModal = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredDate: '',
        numberOfTravelers: '1',
        specialRequests: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
        
        // Transform data to match Supabase schema
        const submissionData = {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            travelDates: formData.preferredDate,
            groupSize: formData.numberOfTravelers,
            specialRequests: formData.specialRequests
        };
        
        const result = await submitPreregistrationForm(submissionData);
        
        if (result.success) {
            setSubmitMessage('Preregistration submitted successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                preferredDate: '',
                numberOfTravelers: '1',
                specialRequests: ''
            });
            setTimeout(() => {
                onClose();
                setSubmitMessage('');
            }, 2000);
        } else {
            console.error('Submission failed:', result);
            const errorMessage = result.error || 'Unknown error occurred';
            setSubmitMessage(`Error: ${errorMessage}. Please check the console for details.`);
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
            <div className="bg-white rounded-xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Ready for Adventure?</h3>
                        <p className="text-gray-600">Preregister for your Vietnam adventure and we'll get back to you with exclusive offers!</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-2xl p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                First Name *
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Your first name"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                Last Name *
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Your last name"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 123-4567"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                                Preferred Travel Date
                            </label>
                            <input
                                type="date"
                                id="preferredDate"
                                name="preferredDate"
                                value={formData.preferredDate}
                                onChange={handleChange}
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="numberOfTravelers" className="block text-sm font-medium text-gray-700 mb-2">
                                Number of Travelers
                            </label>
                            <select
                                id="numberOfTravelers"
                                name="numberOfTravelers"
                                value={formData.numberOfTravelers}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                            >
                                <option value="1">1 person</option>
                                <option value="2">2 people</option>
                                <option value="3">3 people</option>
                                <option value="4">4 people</option>
                                <option value="5">5 people</option>
                                <option value="6+">6+ people</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                            Special Requests or Questions
                        </label>
                        <textarea
                            id="specialRequests"
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleChange}
                            placeholder="Tell us about any special requirements, dietary restrictions, or questions you have..."
                            rows={4}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                            type="submit"
                            variant="primary"
                            className="flex-1"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Preregistration'}
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            className="flex-1"
                        >
                            Cancel
                        </Button>
                    </div>
                </form>

                {submitMessage && (
                    <div className={`mt-6 p-4 rounded-lg border ${
                        submitMessage.includes('successfully') 
                            ? 'bg-green-50 border-green-200 text-green-800' 
                            : 'bg-red-50 border-red-200 text-red-800'
                    }`}>
                        <p className="text-sm">{submitMessage}</p>
                    </div>
                )}

                {!submitMessage && (
                    <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="text-sm text-amber-800">
                            <strong>What happens next?</strong> After submitting your preregistration, our travel experts will review your preferences and contact you within 24 hours with personalized Vietnam adventure packages and exclusive early-bird offers!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreregistrationModal;
