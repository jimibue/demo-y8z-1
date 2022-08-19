import { Author } from '@/components/landing/Author'
import { CourseDetails } from '@/components/landing/CourseDetails'
import { SchedulePT } from '@/components/landing/SchedulePT'
import { Pricing } from '@/components/Pricing'
import {ScrollNavPT} from '@/components/landing/ScrollNavPT'
import {CourseDetailsPT} from '@/components/landing/CourseDetailsPT'
export default function ScrollContentPartTime() {
  return (
    <>
      <ScrollNavPT />
      <CourseDetailsPT/> 
      <Author/>   
      <SchedulePT />
      {/* <Author/>  
      <Schedule />
      <Pricing /> */}

    </>
  )
}
