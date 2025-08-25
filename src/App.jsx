import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import OverviewHero from './components/OverviewHero';
import Navigation from './components/Navigation';
import ContactModal from './components/modals/ContactModal';
import PreregistrationModal from './components/modals/PreregistrationModal';
import Overview from './components/sections/Overview';
import Itinerary from './components/sections/Itinerary';
import Features from './components/sections/Features';
// import Packages from './components/sections/Packages';
import Footer from './components/Footer';

const App = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [showContactForm, setShowContactForm] = useState(false);
    const [showPreregistration, setShowPreregistration] = useState(false);

    const handleContactClick = () => {
        setShowContactForm(true);
    };

    const handleCloseContact = () => {
        setShowContactForm(false);
    };

    const handlePreregistrationClick = () => {
        setShowPreregistration(true);
    };

    const handleClosePreregistration = () => {
        setShowPreregistration(false);
    };

    // const handleBookingClick = () => {
    //     setActiveTab('packages');
    // };

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
            // case 'packages':
            //     return <Packages />;
            default:
                return <Overview />;
        }
    };

    return (
        <div className="min-h-screen bg-white w-full">
            <Header onContactClick={handleContactClick} />
            <Hero onPreregistrationClick={handlePreregistrationClick} />
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
            <PreregistrationModal
                isOpen={showPreregistration}
                onClose={handleClosePreregistration}
            />
            <Footer />
        </div>
    );
};

export default App;