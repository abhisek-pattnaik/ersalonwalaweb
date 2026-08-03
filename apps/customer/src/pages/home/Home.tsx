import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroStylistImg from '@/assets/hero_stylist.png';
import facialImg from '@/assets/facial_treatment.png';
import masterStylistImg from '@/assets/master_stylist.png';
import './Pages.css';
import HeaderSection from '@/components/home/header';
import BeautyGalary from '@/components/home/BeautyGalary';
import CategorySection from '@/components/home/CategorySection';
import RecommendedSection from '@/components/home/RecommendedSection';
import DownloadSection from '@/components/home/DownloadSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import EngineerSection from '@/components/home/EngineerSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Hair Cut');

  const categories = [
    { name: 'Waxing', icon: '✨' },
    { name: 'Spa', icon: '🌸' },
    { name: 'Nails', icon: '💅' },
    { name: 'Hair Cut', icon: '✂️' },
    { name: 'Hair Treatment', icon: '💇‍♀️' },
    { name: 'Massage', icon: '💆‍♂️' }
  ];

  const recommendedSalons = [
    {
      id: '1',
      name: 'Luxe Salon Studio',
      location: 'Downtown, Sector 5',
      rating: 4.9,
      reviews: 128,
      price: '₹499',
      image: heroStylistImg
    },
    {
      id: '2',
      name: 'Master Barber & Spa',
      location: 'West End Plaza',
      rating: 4.8,
      reviews: 95,
      price: '₹699',
      image: masterStylistImg
    },
    {
      id: '3',
      name: 'Glow & Grace Studio',
      location: 'Central Mall',
      rating: 4.9,
      reviews: 210,
      price: '₹899',
      image: facialImg
    },
    {
      id: '4',
      name: 'Prestige Grooming Club',
      location: 'Heights Road',
      rating: 4.7,
      reviews: 85,
      price: '₹399',
      image: heroStylistImg
    }
  ];

  const testimonials = [
    {
      name: 'Anand S.',
      role: 'Verified Client',
      stars: '⭐⭐⭐⭐⭐',
      comment: 'Precision haircut and top-tier hospitality! Booking through ErSalonWala was seamless.'
    },
    {
      name: 'Nisha R.',
      role: 'Verified Client',
      stars: '⭐⭐⭐⭐⭐',
      comment: 'Best facial & organic skincare treatment in town. Highly recommend their recommended salons!'
    },
    {
      name: 'Tarun K.',
      role: 'Verified Client',
      stars: '⭐⭐⭐⭐⭐',
      comment: 'Super easy booking and zero waiting time at the salon. Loved the engineer stylist approach.'
    },
    {
      name: 'Bhavna M.',
      role: 'Verified Client',
      stars: '⭐⭐⭐⭐⭐',
      comment: 'Always my go-to salon platform. Clean UI, honest reviews, and premium stylists.'
    }
  ];

  const engineers = [
    {
      name: 'Alex Morgan',
      role: 'Master Barber & Stylist',
      exp: '10+ Yrs Experience',
      rating: '⭐ 4.9',
      image: masterStylistImg
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Hair Artist',
      exp: '8+ Yrs Experience',
      rating: '⭐ 4.9',
      image: heroStylistImg
    },
    {
      name: 'Vikram Singh',
      role: 'Spa & Skincare Specialist',
      exp: '12+ Yrs Experience',
      rating: '⭐ 5.0',
      image: facialImg
    }
  ];

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <HeaderSection />

      {/* Galary Section */}
      <BeautyGalary />

      {/* category section */}
      <CategorySection />

      {/* RecommendedSection */}
      <RecommendedSection />

      {/* SECTION 5: MOBILE APP PROMO */}
      <DownloadSection />

      {/* SECTION 6: CLIENT FEEDBACK */}
      <TestimonialSection />

      <EngineerSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
