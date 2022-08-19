import Image from 'next/future/image'
import Head from 'next/head'
import { Header } from '@/components/landing/Header'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import backgroundImage from '@/images/background-faqs.jpg'
import { useEffect } from 'react'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Path() {
  return (
    <>
      <Head>
        <title>Path</title>
        <meta name="description" content="get in contact" />
      </Head>

      <Header />
      <div
        className="mb-4 rounded-lg bg-yellow-100 p-4 text-sm text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800"
        role="alert"
      >
        <span className="font-medium">Warning alert!</span> This section is still
        under construction
      </div>
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
