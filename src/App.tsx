/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PromotionalBanner from "./components/PromotionalBanner";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import NewArrivals from "./components/NewArrivals";
import ReviewCarousel from "./components/ReviewCarousel";
import TrustBadgeRow from "./components/TrustBadgeRow";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-red-900">
      {/* Global Header Section */}
      <div className="flex flex-col">
        <TopBar />
        <Header />
        <Navigation />
        <PromotionalBanner />
      </div>

      {/* Main Content Sections */}
      <main>
        <Hero />
        <CategoryGrid />
        <NewArrivals />
        <ReviewCarousel />
        <TrustBadgeRow />
        <FAQ />
      </main>

      {/* Global Footer Section */}
      <Footer />
    </div>
  );
}
