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
