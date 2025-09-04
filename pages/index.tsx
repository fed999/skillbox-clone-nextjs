import { Suspense } from 'react';
import Head from 'next/head';
import { Metrika } from '@/components/metrika';

// Импортируем наши новые, чистые секции
import PageHeader from '@/src/components/sections/PageHeader';
import Hero from '@/src/components/sections/Hero';
import SliderSection from '@/src/components/sections/SliderSection';
import CourseBenefits from '@/src/components/sections/CourseBenefits';
import Tariffs from '@/src/components/sections/Tariffs';
import Testimonials from '@/src/components/sections/Testimonials';
import FAQ from '@/src/components/sections/FAQ';
import PageFooter from '@/src/components/sections/PageFooter';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Онлайн-курс "Секреты PowerPoint" - PPTSecrets</title>
        <meta name="description" content="Присоединяйся к онлайн-обучению: монетизируй свои навыки, выделяйся, делай вау-презентации в любой сфере." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <main className="flex flex-col items-center w-full min-h-screen text-gray-800 bg-[#F9FAFB] font-sans">
        
        <PageHeader />
        
        <Hero />
        <SliderSection />
        <CourseBenefits />
        <Tariffs />
        <Testimonials />
        <FAQ />
        <PageFooter />

        <Suspense>
          <Metrika />
        </Suspense>
      </main>
    </>
  );
}