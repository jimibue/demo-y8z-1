import Head from 'next/head'
import { useRouter } from 'next/router'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/landing/Header'
import { Actions } from '@/components/landing/Actions'
import { Schedule } from '@/components/landing/Schedule'
import { Hero } from '@/components/landing/HeroS'
import { Author } from '@/components/landing/Author'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import ScrollContent from '@/components/landing/ScrollContent'
import ScrollContentPT from '@/components/landing/ScrollContentPT'

export default function PartTime() {

  return (
    <>
      <Head>
        <title>Y8Z Full-Time Web Deveolpment Course</title>
        <meta
          name="description"
          content="Don't spend $14000 on a bootcamp.  We offer an advanced and proffesional full-stack web development course for $3500"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <ScrollContentPT />
      </main>
      <Footer />
    </>
  )
}
