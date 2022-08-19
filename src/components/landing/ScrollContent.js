import { Author } from '@/components/landing/Author'
import { CourseDetails } from '@/components/landing/CourseDetails'
import { Schedule } from '@/components/landing/Schedule'
import { Pricing } from '@/components/Pricing'
import {ScrollNav} from '@/components/landing/ScrollNav'
export default function ScrollContent() {
  return (
    <>
      <ScrollNav />
      <CourseDetails/>  
      <Author/>  
      <Schedule />
      <Pricing />

    </>
  )
}
