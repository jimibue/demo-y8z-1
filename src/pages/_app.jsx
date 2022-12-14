import 'focus-visible'
import '@/styles/tailwind.css'

import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'

import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'
import { Pricing } from '@/components/landing/Pricing'

function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (node.name === 'h2' || node.name === 'h3') {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        if (node.name === 'h3') {
          if (!sections[sections.length - 1]) {
            throw new Error(
              'Cannot add `h3` to table of contents without a preceding `h2`'
            )
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export default function App({ Component, pageProps }) {
  let { asPath } = useRouter()
  // LANDING PAGE
  console.log(asPath)
  console.log(asPath.includes('faqs'))
  if ( asPath.includes('privacy') || asPath.includes('faqs')||asPath.includes('part-time') || (!asPath.includes('prep-work') && !asPath.includes('intro') && !asPath.includes('dad') && !asPath.includes('react')  && !asPath.includes('frontend')   && !asPath.includes('fullstack'))) {
    return (
      <>
      
        <Component {...pageProps} />
      </>
    )
  }

  // Course Pages
  let title = pageProps.markdoc?.frontmatter.title

  let pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} - Docs`

  let description = pageProps.markdoc?.frontmatter.description

  let videoURL = pageProps.markdoc?.frontmatter.videoURL

  let tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Layout title={title} tableOfContents={tableOfContents}>
        {/* <p>{JSON.stringify(videoURL)}</p> */}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
