import Image from 'next/future/image'
import Head from 'next/head'
import { Header } from '@/components/landing/Header'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { useEffect } from 'react'

export default function Faqs() {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="get in contact" />
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
              Contact us
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              If you can’t find what you’re looking for, email our support team
              and if you’re lucky someone will get back to you.
            </p>
          </div>

          <div>
          <div
              class="calendly-inline-widget"
              data-url="https://calendly.com/y8z-studios"
              style={{ minWidth: '320px', height: '630px' }}
            ></div>
            {/* <div
              class="calendly-inline-widget"
              data-url="https://calendly.com/y8z-studios"
              style={{ minWidth: '320px', height: '630px' }}
            ></div>
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            ></script> */}
          </div>
        </Container>
      </section>
    </>
  )
}
