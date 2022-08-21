import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/Footer'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    // {
    //   question: 'Why is your Bootcamp not as expensive as other Bootcamps?',
    //   answer:
    //     'We are a small bootcamp, who has no plans of growing.   Because of this we do not need a marketing team, a recuting team or addmision team.  And since we are online we do not need to rent out a building. ',
    //     link: '/prep-work',
    // },
    {
      question: 'What language should I learn first?',
      answer:
        'It really does not matter, pick one and stick with it for a bit. If you are getting into web development or are coming here to Y8Z for school, you should start learning Javascript, HTML, and CSS.',
        link: '/prep-work',
    },
    {
      question: 'Do you offer a part-time course?',
      answer: 'No, at this moment we do not.',
    },
    {
      question:
        'How long does it take to find a job after finishing a Bootcamp?',
      answer: 'This varies, I see it takes on average about 1-6+ months. This is a complicated question and I talk more about it below',
      link: '/path',
    },
  ],
  [
    {
      question: 'What should I do before joining a Bootcamp?',
      answer:
        'Code, code, code. The more the better.  You can check out our prep work section for some guidance on that.  Talk to students who have walked the walk, and learn from their mistakes and successes.  Do your research on different Bootcamps, Universities, and other resources to find the one that best suits you.',
    },
    {
      question: 'Is this course accredited?',
      answer:
        'No, but the content for the course was written in 2022. It is up to date with what is being used in the real world. I personally created using the 3 years of teaching experience and 4 years of professional software development I have.',
    },
    {
      question: 'Do you offer refunds?',
      answer:
        'We offer a 100% refund if you withdraw before the start of the 3rd week of class.',
    },
  ],
  [
    {
      question: 'What services do you offer after the Bootcamp?',
      answer:
        'A post Bootcamp course is currently in the works and will offer job coaching services, internship opportunities, and resources for continuing education.',
    },

    {
      question:
        'You did not answer my question here where can I get those answered?',
      answer:
        'I am happy to meet one on one and answer any other questions you might have, click on the link below to get in touch.',
      link: '/contact',
    },
  ],
]

export default function Faqs() {
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
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Answered by James
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
          >
            {faqs.map((column, columnIndex) => (
              <li key={columnIndex}>
                <ul role="list" className="flex flex-col gap-y-8">
                  {column.map((faq, faqIndex) => (
                    <li key={faqIndex}>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="mt-4 text-sm text-slate-700">
                        {faq.answer}
                      </p>
                      {faq.link && (
                        <Link href={faq.link}>
                          <span>learn more</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <Footer />
    </>
  )
}
