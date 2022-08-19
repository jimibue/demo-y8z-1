import { useId } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'
import Link from 'next/link'

const features = [
  {
    name: '1. Prep work',
    summary: 'time: 1-2 months(100 + hours)',
    description:
      'Learn the fundamentals of React, Javascript, HTML, CSS, and Frontend Web Development.',
    image: screenshotProfitLoss,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
  {
    name: 'Part 2: Full-Time Bootcamp',
    summary:
      'time: 3-6 months (>500 hours)',
    description:
      'Learn how to create the backend and also integrate with it React using the MERN stack.',
    image: screenshotInventory,
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
  },
  {
    name: 'part 3 post bootcamp',
    summary:
      '1-6 months(~500hours)',
    description:
      'Learn common skills that companies are looking for and build advanced applications.',
    image: screenshotContacts,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500'
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          {/* <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div> */}
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={true}
                className="relative"
              />
            ))}
          </Tab.List>
          {/* <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60'
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels> */}
        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-0"
    >
      <Container>
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            The acclerated path to becoming a Software Engineer
          </h2>
          <FeaturesMobile />
        <FeaturesDesktop />
          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            There is no other field where the oppurtinty to switch careers into a well-paid in demand in a relatively cheap way than there is software.  This does not mean it is automatic or easy.  Learning to code is not easy and doing it in an accelerated pace makes things more challenging.  There is a huge ad
          </p>

          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            There is no other field where the oppurtinty to switch careers into a well-paid in demand in a relatively cheap way than there is software.  This does not mean it is automatic or easy.  Learning to code is not easy and doing it in an accelerated pace makes things more challenging.  There is a huge ad
          </p>

          <h2 className="font-display text-3xl tracking-tight text-slate-900 md:text-left mt-10">
            Prep work
          </h2>

          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            Before joining a Bootcamp or other type of school you should learn some basics on your own.  There are more than enough free resources to get you started and to start giving you a base.  You can checkout our reference <Link href='/courses'>here</Link> that is links to some goode resources as long as some of our own.
          </p>

          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            Spending time here is going to do two things.  It will give your a chance to see if coding is something you might enjoy doing.  It also might show you that you can learn on your own and you don't need to spend thousand of dollars on a bootcamp. The common expiernce is though that many people find that they enjoy it, but find that is challenging to learn on your own espically once you start to move on from the basics.
          </p>

          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            But don not under estimate this step.  Bootcamps are insanely faced paced and you do not want to start out behind so I reccommend spending at least 100 hours learning the basic of html, css, and javascript.  It is also wouldn not hurt if you did a little React or Node as well.  You can not over prepare for a Bootcamp, even if you have 400 hours coding expierince you will find them fast paced.
          </p>

          <h2 className="font-display text-3xl tracking-tight text-slate-900 md:text-left mt-10">
            Bootcamp 
          </h2>

          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            There are two main flavors of bootcamps one that are full-time, meaning you spend 40+ hours a week in lecture, coding, and learning.  These generally run anywhere from 10 - 16 weeks.  The other variety is partime bootcamps which you will spend around 20+ hours a week in lecture, coding, and leanring.  These last anywhere from 10-36 weeks. I personally think Full-Time bootcamps are the more efficient way to leatn, they teach you how to 'drink from the fire hose' as they say which really does prepare you for a software job.  I think they also help yo get into a rythm of coding 40 hours a week, which if you maintain after the bootcamp you will be on a path to getting hired.   That not everyone can the time off required to do a full-time bootcamp and parttime bootcamps provide a good option for that.  
          </p>

          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            Whether you choose a parttime bootcamp our a full-time one,  you should be looking at spending about 500+ hours here.
          </p>
          <h2 className="font-display text-3xl tracking-tight text-slate-900 md:text-left mt-10">
            Post Bootcamp 
          </h2>

          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            There is a little white lie going around the bootcamp industry and that is you will be ready for a job after the bootcamp.  Truth of the matter is most graduates are not.  Now the reason this is a white lie is because their are some students who find jobs realtively quick (with in a month or so) of graduating.  But those are students who either has some previous expiernce that helped, or have naturally good netwroking skills or sometimes it is a matter of luck. Fact it can takes months before people land their first job, and it was not just because they were patiently waiting around. It was because they were actively still learning after the bootcamp and diligently apply for jobs. 
            </p>

            <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">

            </p>
   
        </div>
     
      </Container>
    </section>
  )
}
