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
    name: 'Step 1: Prep',
    summary: '1-2 months(100 + hours)',
    description:
      'Learn the fundamentals of Javascript, HTML, CSS, and Programming',
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
    name: 'Step 2: Bootcamp',
    summary: '3-6 months(>500 hours)',
    description:
      'Intensive, immersive, and structured content. Learn how to build complicated applications.',
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
    name: `Step 3: Don't stop`,
    summary: '1-6+ months(~500hours)',
    description:
      'Start applying for jobs while you continue to learn new skills and build upon your existing ones.',
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
      className={clsx(
        className,
        'p-5 shadow-lg',
        !isActive && 'opacity-75 hover:opacity-100 '
      )}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500'
        )}
      >
        {/* <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg> */}
      </div>
      <h3
        className={clsx(
          'mt-6 text-xl font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className="text-md mt-2 font-display text-slate-700">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden ">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
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
          <Tab.List className="grid grid-cols-3 gap-x-8 ">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none ">
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
        <div className="mx-auto max-w-3xl  md:text-left">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            The Accelerated Path to Becoming a Software Engineer
          </h2>
          <p className="mt-1 text-lg font-bold tracking-tight text-slate-500 md:text-left">
            by James Yeates
          </p>
          <p className="mt-8 text-lg tracking-tight text-slate-700 md:text-left">
            {`
        Software Engineers, Web Developers, and other coding-related careers are some of the fastest-growing and well-paying careers in today's economy. Coding Bootcamps were created to help people gain the skills they need to enter this industry in a short amount of time. This guide was created for those who are interested in pursuing a career in tech and doing it through a Bootcamp. It  is meant to give you a general overview and some honest expectations about what to expect along the way. Generally speaking, the path can be broken up into 3 main steps:`}
          </p>
          {/* <h2 className="mt-10 font-display text-3xl tracking-tight text-slate-900 md:text-left">
            3 Steps
          </h2> */}

          <FeaturesMobile />
          <FeaturesDesktop />

          <h2 className="mt-20 font-display text-3xl tracking-tight text-slate-900 md:text-left">
            Step 1: Prep
          </h2>

          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            Before joining a Bootcamp or any other type of school, you should
            learn some of the basics of coding on your own. There are plenty of
            free resources to get you started and build a basic foundation. You
            can check out our reference{' '}
            <Link href="/prep-work">
              <a className="text-cyan-500">here</a>
            </Link>{' '}
            which has some great external resources as well as some of our own
            for getting started. Learning the basics is going to do a few things
            for you:
          </p>

          <p className="mt-4 text-lg font-bold tracking-tight text-slate-700 md:text-left">
            1. It will give you a chance to see if coding is something you enjoy
            doing.
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            Far too often people get lured into coding Bootcamps because they
            get sold on the idea of getting into a great paying field in a short
            amount of time. But more than just the idea of making more money you
            need to find out if coding is something that you find interesting
            and are excited about. This is a challenging field and is something
            you might be doing a lot of in the future so you want to make sure
            you enjoy it and the best way to find out is to try it.
          </p>

          <p className="mt-4 text-lg font-bold tracking-tight text-slate-700 md:text-left">
            2. You will want to have a foundation in coding basics before
            joining a Bootcamp.
          </p>

          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            I would recommend planning on spending a minimum of 100 hours coding,
            which you could do in a month before you start a Bootcamp. The more
            the better. Learning to code is hard and for most people is somewhat
            foreign when first hearing some of the concepts and can take some
            reputation before concepts begin to sink in. Bootcamps also move at
            a rapid pace so the stronger your foundation going into one the more
            you will be able to absorb during the Bootcamp.
          </p>

          <p className="mt-4 text-lg font-bold tracking-tight text-slate-700 md:text-left">
            3. You might find that Bootcamps are not for you.
          </p>

          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            Bootcamps are not for everyone. You might find the pace to be too
            fast and might prefer to go to a University. You also might find
            that you are able to learn on your own. I do warn that learning how
            to code gets more challenging as the material gets harder but some
            people are successful with this.
          </p>

          <h2 className="mt-10 font-display text-3xl tracking-tight text-slate-900 md:text-left">
            Step 2: Bootcamp
          </h2>

          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            Something that is very common when people start learning to code on
            their own, is that they realize it can be challenging and
            frustrating a lot of the time. Your code does not work and you have
            no idea what is wrong, it is harder to follow along with tutorials
            as they get more advanced, there are so many resources out there
            that you are not sure what to pick and what to learn next. You soon
            realize that you need some structure, guidance, and actual people to
            help. This is where Bootcamps come in. There are two primary types
            of Bootcamps:
          </p>

          <p className="mt-4 text-lg font-bold tracking-tight text-slate-700 md:text-left">
            Full-time Bootcamps
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            In a full-time Bootcamp, you can expect to spend 40+ hours a week in
            lecture, project time, and studying and writing code. These are
            immersive and intensive and it is really not recommended that you
            are working during these. They generally run anywhere from 10 - 16+
            weeks. They are a great way to talk a leap and 100% immerse yourself
            in code. They also create a supportive environment where you are
            alongside peers in the same shoes and TAs and instructors to assist
            you. They also should have a thought-out and well-structured
            curriculum with a blend of lectures and lots of project time to give
            you a great learning experience.
          </p>

          <p className="mt-4 text-lg font-bold tracking-tight text-slate-700 md:text-left">
            Part-time Bootcamps
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            In a part-time Bootcamp, you can expect to spend 20+ hours a week in
            lecture, project time, and studying and writing code. These are less
            immersive and intensive than full-time Bootcamps and are designed
            more for people who are working or can not make the time commitment
            required for the full-time Bootcamps. These are generally longer in
            duration to make up for the less time spent during the week and can
            be anywhere from 10-36 weeks. These do not provide the same
            immersive and in-depth experience that full-time boot camps do, but
            they are more flexible and not as fast-paced and can be a good
            option for those with jobs, or for those who do not want the
            intensity of a full-time Bootcamp.
          </p>

          <p className="mt-4 text-lg font-bold tracking-tight text-slate-700 md:text-left">
            Either way: 500+ hours
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            Whether you choose a part-time Bootcamp or a full-time one, you
            should be looking at spending about 500+ hours here in this step.
            These should be 500 hours of well-structured and relevant material.
            Whether a full-time or part-time Bootcamp is better, really has more
            to do with you and your individual circumstances. I personally think
            full-time is the better option as it really does force you to make
            the commitment to coding and can help give people a little bit extra
            motivation.
          </p>
          <h2 className="mt-10 font-display text-3xl tracking-tight text-slate-900 md:text-left">
            {`Step 3: Don't stop`}
          </h2>

          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            Before signing up for a Bootcamp you need to ask yourself if this is
            something you truly want to do and if you are ready to put in the
            amount of work required for it. The truth of the matter is
            completing the Bootcamp is just the first step of many on this path.
            It generally takes about 1-6 months after the Bootcamp to find your
            first job. During this time it is important to keep going. Here is
            what I recommend:
          </p>

          <h3 className="mt-10 font-display text-2xl tracking-tight text-slate-900 md:text-left">
            {`What to do after graduation`}
          </h3>

          <p className="mt-4 text-lg font-bold tracking-tight text-slate-700 md:text-left">
            Job Search
          </p>
          <p className="mt-2 text-lg tracking-tight text-slate-700 md:text-left">
            Apply, apply and apply. Get creative here. Reach out directly to
            hiring managers. reach out to people you know in the field,
            non-profits, or small-sized businesses who might need websites
            built.
          </p>
          <p className="mt-4 text-lg font-bold tracking-tight text-slate-700 md:text-left">
            Network
          </p>
          <p className="mt-2 text-lg tracking-tight text-slate-700 md:text-left">
            Finding a job sometimes can be as much about your soft skills as
            your technical skills. Keep in touch with your classmates, and meet
            new people at meetups and coding events. Put yourself out there.
          </p>

          <p className="mt-4 text-lg font-bold tracking-tight text-slate-700 md:text-left">
            Continue to learn
          </p>
          <p className="mt-2 text-lg tracking-tight text-slate-700 md:text-left">
            As you apply for jobs and have interviews, you will start to find
            some of your weak spots and where you can improve. You should be
            spending 15+ hours a week learning new skills.
          </p>

          <p className="mt-4 text-lg font-bold tracking-tight text-slate-700 md:text-left">
            Continue to build
          </p>
          <p className="mt-2 text-lg tracking-tight text-slate-700 md:text-left">
            As someone with little real-world experience, one way to stand out
            from other Jr. Developers is to continue to work and build actual
            projects that you can show off to potential employees. Much like an
            artist builds their portfolio to show to an interested buyer, build
            your own portfolio to showcase your skills.
          </p>

          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left"></p>

          <h2 className="mt-10 font-display text-3xl tracking-tight text-slate-900 md:text-left">
            Conclusion
          </h2>

          <p className="mt-4 text-lg tracking-tight text-slate-700 md:text-left">
            Becoming a Software Engineer via a coding Bootcamp is a challenging
            and rewarding path. It is one full of ups and downs and more than
            anything it is full of opportunities for those who stick with it.
            When it comes down to it, going to a coding Bootcamp is not going to
            get you a job. It is your hard work and persistence that will.
            Bootcamps are there to give you guidance and assistance and to
            accelerate this path, but ultimately it is up to you.
          </p>
        </div>
      </Container>
    </section>
  )
}
