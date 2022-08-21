import Image from 'next/future/image'
import backgroundImage from '@/images/background-faqs.jpg'
import Head from 'next/head'
import { Header } from '@/components/landing/Header'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'

import { useEffect } from 'react'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Path() {
  return (
    <>
      <Head>
        <title>Becoming a Engineer</title>
        <meta name="description" content="The Accelerated Path to Becoming a Software Engineer" />
      </Head>

      <Header />

      <section
        id="faq"
        aria-labelledby="faq-title"
        className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
      >
        <Image
          className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
          src={backgroundImage}
          alt=""
          width={1558}
          height={946}
          unoptimized
        />
        <Container className="relative">
          <SecondaryFeatures />
        </Container>
      </section>
      <Footer />
    </>
  )
}
