import Image from 'next/future/image'
import Head from 'next/head'
import { Header } from '@/components/landing/Header'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { Footer } from '@/components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="about y8x" />
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
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              id="faq-title"
              className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
            >
              About
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              {`
              Small coding bootcamp here.  More about us coming soon`}
            </p>
          </div>

        </Container>
      
      </section>
      <Footer />
    </>
  )
}
