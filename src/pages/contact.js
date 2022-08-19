import Image from 'next/future/image'
import Head from 'next/head'
import { Header } from '@/components/landing/Header'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { useEffect, useState } from 'react'
import { Footer } from '@/components/Footer'

export default function Faqs() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error))

    e.preventDefault()
  }
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
              Get in touch with us
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              {`
              If you are wanting to sign up for our course or simply learn more about and get any another general questions answered we would love to hear from you.  Use the calendar below to setup a zoom call.`}
            </p>
          </div>

          <div>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/y8z-studios"
              style={{ minWidth: '320px', height: '630px' }}
            ></div>
            {/* <div
              className="calendly-inline-widget"
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
        <form onSubmit={handleSubmit} data-netlify="true" name="contact">
          <p>
            <label>
              Your Name:{' '}
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:{' '}
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </p>
          <p>
            <label>
              Message:{' '}
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        );
      </section>
      <Footer />
    </>
  )
}
