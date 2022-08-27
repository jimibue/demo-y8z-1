import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { SectionHeading } from '@/components/SectionHeading'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const schedule = [
  {
    date: 'Module 1: Frontend Focus',
    dateTime: 'Frontend',
    summary:
      'Learn the fundamentals of React, Javascript, HTML, CSS and Frontend Web Development.',
    timeSlots: [
      {
        name: 'Week 1: Javascript',
        description:
          'A deep dive into Javascript looking at functions, conditional, async-await, loops and more. We will also spend some time with Git and Github.',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Week 2-4: React I and II',
        description:
          'A crash course in React. Learn about state, props, react-router,component design and libraries. CSS and HTML review as well',
        start: '10:00AM',
        end: '11:00AM',
      },

      {
        name: 'Week 5: Tailwind/Next.js',
        description:
          'Learn how to make our apps look professional and beatiful with tailwind.css and learn how to more easily get static website up and running with next.js',
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Week 6: Project #1',
        description:
          'Learn how to make our apps look professional and beatiful with tailwind.css and learn how to more easily get static website up and running with next.js',
        start: '12:00PM',
        end: '1:00PM',
      },
    ],
  },
  {
    date: 'Module 2: Full-Stack Focus',
    dateTime: 'Full-Stack Web Development',
    summary:
      'Learn how to create the backend and also integrate with it React using the MERN stack.',
    timeSlots: [
      {
        name: 'Week 7-8: THE MERN  Stack I',
        description:
          "Crash course in the MERN stack: MongoDB, Express, React, and Node. We'll use this to build our first full-stack app.",
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Week 9: THE MERN Stack II',
        description:
        'Continue to build full-stack apps. We will also integrate authentication, image upload, model associations, and more.',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Week 10-11 GraphQL/Redux',
        description:
          'Now that we have a backend built we learn how to handle more advanced state in React with tools like Redux and GraphQL.',
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Week 12: Project #2',
        description:
          'Learn how to make our apps look professional and beatiful with tailwind.css and learn how to more easily get static website up and running with next.js',
        start: '12:00PM',
        end: '1:00PM',
      },
    ],
  },
  {
    date: 'Module 3: Industry Skills',
    dateTime: 'Industry Dev Skills',
    summary:
      'Learn common skills that companies are looking for and build advanced applications.',
    timeSlots: [
      {
        name: 'Week 13-14: Testing / Typescript',
        description:
          'Learn how to write better code by adding tests using jest and enzyme. Learn about typed Javascript with Typescript.',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Week 15-16: React Native',
        description:
          'Get prepared for whiteboard interview questions and strengthen your coding fundamentals.',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Week 17: DEV OPS',
        description:
          'Using tools such as Docker, Kuberantes, Github, and Heroku we will see how we can streamline the development experience and create CI/CD pipelines.',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Week 18: Project #3',
        description:
          'Learn how to make our apps look professional and beatiful with tailwind.css and learn how to more easily get static website up and running with next.js',
        start: '12:00PM',
        end: '1:00PM',
      },

    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70'
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-blue-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          {/* <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p> */}
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function SchedulePT() {
  return (
    <section id="schedule-pt" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <SectionHeading number="3"  className='mb-10' id="schedule-pt-title">
          Partime Curriculum
          </SectionHeading>
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Our part-time is jam-packed with brilliant and creative content, front-end focused. 
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Advanced, in-depth, and integrated curriculum. You will the learn the tool and skills companies are looking for.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-indigo-50">
          <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
