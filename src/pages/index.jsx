import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/landing/Header'
import { Actions } from '@/components/landing/Actions'
import { Schedule } from '@/components/landing/Schedule'
import { Hero } from '@/components/landing/HeroS'
import { Author } from '@/components/landing/Author'
import { Pricing } from '@/components/landing/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Y8Z Fulltime Web Deveolpment Course</title>
        <meta
          name="description"
          content="Don't spend $14000 on a bootcamp.  We offer an advanced and proffesional fullstack web development course for $3500"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Schedule />
        <SecondaryFeatures />
        {/* <CallToAction />
        <Testimonials /> */}
        <Pricing />
        <Author />
        <Actions />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
