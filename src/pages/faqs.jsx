import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/landing/Header'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What language do I want to learn first?',
      answer:
        'Short answer: it really doesn not matter, pick one and stick with it for a bit. Longer answer If you are getting into web development you might as well start with Javascript. Note: if you are getting into web development learn a bit of  HTML and CSS, but these are not are not programing languages.',
    },
    {
      question: 'Do you offer a part-time course',
      answer: 'No, at this moment we do not but',
    },
    {
      question:
        'How long does it take to find a job after finishing a bootcamp?',
      answer: 'This is complicated question I wrote an article about it here',
      link: '/path',
    },
  ],
  [
    {
      question: 'What should I do before joining a bootcamp?',
      answer:
        'Code, code, code. The more the better.  You can checkout our prepwork section for some guidance on that.  Also talk to students who have walked the walk, learn from there mistakes and successes.',
    },
    {
      question: 'Is this course accrediated?',
      answer:
        'No, but the content for the course was written in 2022. and I have 3 years teaching expierience and 4 years proffesional software development.',
    },
    {
      question: 'If I get cold feet, do you offer a refund',
      answer:
        'We offer 100% refund after if you withdraw before the start of the 3rd week of class',
    },
  ],
  [
    {
      question: 'What services do you offer after the bootcamp',
      answer:
        'A post bootcamp course is currently in the works and will offer job coaching services, intership oppurtunites, and resources for contining education',
    },

    {
      question:
        'You did not answer my question here where can I get those answered?',
      answer:
        'I am happy to meet one on one and answer any other other questions you might have',
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
              Answered by James,
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
                          <span>here.</span>
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
    </>
  )
}
