/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          rose: colors.rose,
        },
      },
    },
  }
  ```
*/
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/outline'

const actions = [
  {
    title: 'PROFESSIONAL CURRICULUM',
    href: '#',
    icon: ClockIcon,
    description:'Learn relevant tools and skills that are used today in the real world.',
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    title: 'SKILLED INSTRUCTOR',
    href: '#',
    description:"Course created and taught by a senior engineer, with 3 years of experience as an educator",
    icon: BadgeCheckIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'LIVE ONLINE CLASS',
    href: '#',
    description:"Live class every day. Ask questions as they come up and get them answered on the spot.",
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'LOW PRICE',
    href: '#',
    description:"At $3500, this is the lowest priced, professional lead full-time Bootcamp",
    icon: CashIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'TA LEAD PROJECT TIME',
    href: '#',
    description:"  Stuck on a problem? Get live help from the instructor or one of our TAs",
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    title: 'SMALL CLASS SIZE',
    href: '#',
    description:"Class size will cap at 20 students.",
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Actions() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        {/* <GridPattern x="50%" y="100%" /> */}
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="sm:rounded-6xl bg-slate-50 pt-px">
          <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
            {actions.map((action, actionIdx) => (
              <div
                key={action.title}
                className={classNames(
                  actionIdx === 0
                    ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                    : '',
                  actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                  actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                  actionIdx === actions.length - 1
                    ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                    : '',
                  'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                )}
              >
                <div>
                  <span
                    className={classNames(
                      action.iconBackground,
                      action.iconForeground,
                      'inline-flex rounded-lg p-3 ring-4 ring-white'
                    )}
                  >
                    <action.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a disabled className="focus:outline-none">
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      {action.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                   {action.description}
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
