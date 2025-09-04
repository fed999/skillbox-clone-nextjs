// src/app/page.tsx
import { Suspense } from 'react';
import { Metrika } from '@/components/metrika';

// Import your new section components
import Hero from '@/src/components/sections/Hero';
import CourseBenefits from '@/src/components/sections/CourseBenefits';
import Tariffs from '@/src/components/sections/Tariffs';
import Testimonials from '@/src/components/sections/Testimonials';
import FAQ from '@/src/components/sections/FAQ';
import VideoLessonsPreview from '@/src/components/sections/VideoLessonsPreview';
import SliderSection from '@/src/components/sections/SliderSection';
import PageFooter from '@/src/components/sections/PageFooter';
import PageHeader from '@/src/components/sections/PageHeader';


export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen text-gray-800 bg-[#F9FAFB] font-sans">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      
      <PageHeader />
      <Hero />
      <VideoLessonsPreview />
      <CourseBenefits />
      <Tariffs />
      <Testimonials />
      <FAQ />
      <PageFooter />
      <Suspense>
        <Metrika />
      </Suspense>
      
    </main>
  );
}