import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import ContactModal from './components/modals/ContactModal';
import Overview from './components/sections/Overview';
import Itinerary from './components/sections/Itinerary';
import Features from './components/sections/Features';
import Packages from './components/sections/Packages';
import Footer from './components/Footer';

const App = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [showContactForm, setShowContactForm] = useState(false);

    const handleContactClick = () => {
        setShowContactForm(true);
    };

    const handleCloseContact = () => {
        setShowContactForm(false);
    };

    const handleBookingClick = () => {
        setActiveTab('packages');
    };

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const renderActiveSection = () => {
        switch (activeTab) {
            case 'overview':
                return <Overview />;
            case 'itinerary':
                return <Itinerary />;
            case 'features':
                return <Features />;
            case 'packages':
                return <Packages />;
            default:
                return <Overview />;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header onContactClick={handleContactClick} />

            <Hero onBookingClick={handleBookingClick} />

            <Navigation
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />

            <main className="max-w-7xl mx-auto px-4 py-12">
                {renderActiveSection()}
            </main>

            <ContactModal
                isOpen={showContactForm}
                onClose={handleCloseContact}
            />

            <Footer />
        </div>
    );
};

export default App;