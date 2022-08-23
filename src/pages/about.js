import Image from 'next/future/image'
import Head from 'next/head'
import { Header } from '@/components/landing/Header'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { Footer } from '@/components/Footer'

import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/james.jpg'

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
        {/* <Image
          className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
          src={backgroundImage}
          alt=""
          width={1558}
          height={946}
          unoptimized
        /> */}
        <section
          id="author"
          aria-labelledby="author-title"
          className="relative"
        >
          <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
            <GridPattern x="50%" y="100%" />
          </div>
          <div className="relative mx-auto max-w-5xl sm:px-6">
            <div className="sm:rounded-6xl bg-slate-50 pt-px">
              {/* <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src={authorImage}
                  alt=""
                  sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
                />
              </div> */}
              <div className="">
                <SectionHeading number={'1'} id="author-title">
                  About Us
                </SectionHeading>
                <p className="mt-8 font-display text-6xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  <span className="block text-blue-600">Y8Z: Online Coding Bootcamp</span> {``}
                </p>
                <p className="mt-2 font-display text-6xl font-extrabold tracking-tight text-slate-900 sm:text-xl">
                  <span className="block ">Learn to code here</span>
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                  {`We are a new and recently founded online coding bootcamp. We believe that coding bootcamps should be created and taught by experienced engineers and that our price should be comparable to what one might pay for a semester at a community college. We have done just that with our full-time online web development course.  Learn to code here.`}
                </p>
                <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-xl">
                  <span className="block">Our Mission</span>
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                  {`We are here to help people start a new career in tech, by providing the best live online bootcamp experience at a fair and affordable price.`}
                </p>
                <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-xl">
                  <span className="block">Contact us</span>
                </p>
                <p className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
                  >
                    {/* <TwitterIcon className="h-10 w-10 fill-current" /> */}
                    <span>set up a zoom meeting with us</span>
                  </Link>
           
                    {/* <TwitterIcon className="h-10 w-10 fill-current" /> */}
                    <span className="ml-4">|  email us at y8z.studios@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}
