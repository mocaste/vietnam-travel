import { MapPin, Phone, Mail, Star, Calendar, Users, Plane, Camera, Shield, Clock } from 'lucide-react';

// 🔧 Fixed image URLs for GitHub Pages
// Use Unsplash images that are guaranteed to work
export const features = [
    { icon: <Plane className="w-6 h-6" />, title: "Bilete de avion incluse", desc: "Check-in, cazare, mese și alte servicii" },
    { icon: <Shield className="w-6 h-6" />, title: "Organizare completă", desc: "Lasă grijile în seama noastră pentru relaxare totală" },
    { icon: <Clock className="w-6 h-6" />, title: "Fără costuri ascunse", desc: "Totul se comunică în perioada de planificare" },
    { icon: <Users className="w-6 h-6" />, title: "Personalizat", desc: "Fiecare vacanță creată special pentru tine" },
    { icon: <Phone className="w-6 h-6" />, title: "Suport 24/7", desc: "Echipa noastră disponibilă oricând ai nevoie" },
    { icon: <Star className="w-6 h-6" />, title: "Experți locali", desc: "Sfaturi autentice de la parteneri cu experiență" }
];

export const itinerary = [
    {
        day: "Ziua 1-3",
        location: "Ho Chi Minh City",
        description: "Explorați orașul Ho Chi Minh, cel mai mare centru urban din Vietnam. Vizitați Muzeul Rămășițelor Războiului, Palatul Reunificării, Catedrala Notre-Dame și Tunelurile Cu Chi. Plimbați-vă prin piața Ben Thanh.",
        // 🔧 Using specific Unsplash URLs that work better with GitHub Pages
        image: "/images/ho-chi-minh.jpg"
    },
    {
        day: "Ziua 4-5",
        location: "Da Nang & Hoi An",
        description: "După zborul intern, vizitați Hoi An - orașul patrimoniu UNESCO. Explorați Munții de Marmură și faimosul Pod de Aur din Ba Na Hills. Relaxați-vă pe plajele My Khe și An Bang.",
        image: "/images/hoi-an.jpg"
    },
    {
        day: "Ziua 5-7",
        location: "Da Nang & Hoi An",
        description: "După zborul intern, veti avea ocazia sa va intalniti cu cea mai frumoasa si minutata femeie din lume. Acum este somnoroasa, dar este de inteles :)",
        image: "/images/iubita.jpg"
    },
    {
        day: "Ziua 7-10",
        location: "Hanoi",
        description: "Savurați capitala țării unde trecutul și prezentul dansează în același ritm. Vizitați Cartierul Vechi, Templul Literaturii, Mausoleul lui Ho Chi Minh și Pagoda cu un Singur Pilon.",
        image: "/images/hanoi.jpg"
    }
];

export const packages = [
    { duration: "8 nopți", route: "Mui Ne - Ho Chi Minh", price: "€899" },
    { duration: "17 nopți", route: "Ho Chi Minh – Hoi An – Hue – Quang Binh– Hanoi – Sapa – Ha Long Bay", price: "€1,899" },
    { duration: "10 nopți", route: "Ho Chi Minh – Da Nang – Hanoi", price: "€1,299" },
    { duration: "7 nopți", route: "Hanoi - Da Nang - Hanoi", price: "€999" }
];

export const navigationTabs = [
    { id: 'overview', label: 'Prezentare generală' },
    { id: 'itinerary', label: 'Program detaliat' },
    { id: 'features', label: 'Servicii incluse' },
    { id: 'packages', label: 'Pachete disponibile' }
];