import { PaperClipIcon } from '@heroicons/react/solid'
import { ScrollContainer } from './ScrollContainer'

const stats = [
  { name: 'Start Date', stat: '11/1/22' },
  { name: 'Duration', stat: '22 weeks' },
  { name: 'Time *Attendace required', stat: ' M-TH, 6:00 - 8:30 (MST)' },
  { name: 'Price', stat: '$3,000' },
  { name: 'Location', stat: 'online' },
  { name: 'Instructor', stat: 'James Yeates' },
]

function Stats() {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function CourseDetails1() {
  return (
    <section
      id="course-details"
      aria-labelledby="course-details-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        {/* <GridPattern x="50%" y="100%" /> */}
      </div>

      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="sm:rounded-6xl bg-slate-50 pt-px"></div>
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div>
            <Stats />
          </div>
        </div>
      </div>
    </section>
  )
}

export function CourseDetailsPT() {
  return (
    <ScrollContainer
      id="course-details-pt"
      number={'1'}
      title="Course Details"
    //   header={'yo dwag'}
    //   description={'All the basics goodies'}
    >
      <div>
        <Stats />
      </div>
    </ScrollContainer>
  )
}
