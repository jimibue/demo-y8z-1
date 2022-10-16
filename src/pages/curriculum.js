import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Curriculum() {
  return (
    <>
      <Head>
        <title>Curriculum</title>
        <meta
          name="Curriculum"
          content="Rough Draft of Curriculum: "
        />
      </Head>
      <SimpleLayout
        title="Curriculum."
        intro="Rough Draft of Curriculum.  This course is broken up into 4 modules: 1. Typescript / coding core, 2:Frontend, 3: Fullstack, 4: Industry Skills.  Each of these contain 4 sub sections.  The fourth section of each is a section to review the previous material and to build a small project that serves as a portfolio piece and also as checkpoint for student progress. Down the road it could be setup if a student doesn't pass a module they have to retake that module. For a fulltime course modules would be 4 weeks long.  For a part time course modules would be 6 weeks long. "
      >
        <div className="space-y-20">
          <ToolsSection title="Module 1: TS Core">

            <Tool title="Section 1: Intro to coding with Typescript">
              This is a crash course section into the fundamentals of coding.  
              <br />
             <br />
              <hr />
              <p>Environment: Web based Typescript.org</p>
            </Tool>
            <Tool title="Section 2: Intro to Data Structure and Algorithms">
                In this section students will learn more about why data types matter.  This section will also highly focus on functions is TS. We will spend a good chunk of time on Array, Objects and the built methods on these data structures such as map, filter, and reduce.
                <br />
             <br />
                <hr />
              <p>Environment: Web based Typescript.org</p>
            </Tool>
            <Tool title="Section 3:NPM, Terminal, Testing, and OOP">
                Here we will introduce NPM and how to use it.  We will also introduce testing and how to use it.  Classes will be introduced.  We will also introduce the concept of OOP and how it relates to TS.
                <br />
             <br />
                <hr />
              <p>Environment: Web based codesandbox, a little terminal, git here</p>
            </Tool>
            <Tool title="Section 4: TS Portfolio Project">
                This section will be a project based section.  Students will be given a project to complete.  The project will be a simple game.  The game will be a simple game of tic tac toe.  The game will be built using the concepts learned in the previous sections.
             <br />
             <br />
             <hr />
              <p>Environment</p>
              <p>Make full switch to VSCode, git/github, terminal here</p>
            </Tool>
          </ToolsSection>
          <ToolsSection title="Module 2: Frontend">

            <Tool title="Section 1: HTML(JSX), CSS, and React">
                This section will be an introduction to React.  We will also introduce HTML(JSX) and CSS.  We will also introduce the concept of components and how they relate to React.  We will look at high level at some of the core concepts of React such as props, state, and hooks.  With css we will explore flex box and grid.
            </Tool>
            <Tool title="Section 2: React In Depth">
                This section will be a deeper dive into React.  We will look at the core concepts of React in more detail.  We will also look at how to use React with Typescript.  We will also look at how to use React with React Router.  We will see how we can write our own custom hooks.
            </Tool>
            <Tool title="Section 3: Tailwind, Third-party libs, Testing React">
                In this section we will introduce Tailwind.  We will also introduce third-party libraries such as react-query and react-hook-form.  We will also look at how to test React components. We will also look at how to test custom hooks.
            </Tool>
            <Tool title="Section 4: React Portfolio Project">
               This week we will review the concepts learned in the previous sections.  We will then build a portfolio project.  The portfolio project will be a beautiful personal resume website.  The website will be built using the concepts learned in the previous sections. 
            </Tool>
          </ToolsSection>
          <ToolsSection title="Module 3: FullStack">
            <Tool title="Section 1: Third-party Apis / State Management">
              Learn how to use third-party apis and how to manage state in React.  We will not be creating our own backend in this section.  We will be using third-party apis to get data.  We will also look at how to manage state in React using Redux and Context.
            </Tool>
            <Tool title="Section 2: MERN Intro">
               Now that we have a good understanding of React, we will now look at how to create a backend using MongoDB, Express, React, and Node.  We will also look at how to use Mongoose to create schemas and models.  We will also look at how to use Axios to make requests to our backend.
            </Tool>
            <Tool title="Section 3: MERN with AWS">
                In this section we will look at how to use MERN in more detail.  We will look at how to use MERN with Typescript.  We will also look at how to use MERN with Next.js and how to deploy to AWS.  We will also look at how to use MERN with GraphQL.
            </Tool>

            <Tool title="Section 4: Fullstack Portfolio Project">
                This a week to review the concepts learned in the previous sections.  We will then build a portfolio project.  The portfolio project will be  a fullstack project.  The project will be a simple social media app.  The app will be built using the concepts learned in the previous sections.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Module 4: Industry Skills">
            <Tool title="Section 1. React Native/ Redux / GraphQl">
                In this section we will look at how to use React Native.  We will also look at how to use Redux with React Native.  We will also look at how to use GraphQl with React.
            </Tool>
            <Tool title="Section 2. Agile / Figma / Product Management">
                In this section we will look at how to use Agile.  We will also look at how to use Figma.  We will also look at how to use Product Management tools like Trello and Notion.
            </Tool>
            <Tool title=" Section 3. Dev Ops/ AWS / ETC">
                In this section we will look at how to use Dev Ops.  We will also look at how to use AWS.  We will also look at how to use other tools like Docker and Kubernetes.
            </Tool>
            <Tool title=" Section 4. Final Portfolio Project">
               Here we apply everything learned in the course and build a final portfolio project.  The project will be a complex web app of the students and project managers choice.  The project will be built using the concepts learned in the previous sections.
            </Tool>
          </ToolsSection>
          <ToolsSection title="POST CAMP">
            <Tool title="Career coaching">
                Get support and training for your job search.  We will help you build a resume, cover letter, and LinkedIn profile.  We will also help you prepare for interviews.  
            </Tool>
            <Tool title="Continuing Ed Resources">
                Learning to code does not end after the bootcamp. We will provide you with a list of resources to continue your education.  We will also provide you with a list of resources to continue your career.
            </Tool>
   
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
