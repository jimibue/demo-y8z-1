import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { Question } from '@/components/Question'
import { List1 } from '@/components/md/List1'
import { MDLink } from '@/components/md/MDLink'
import { CodePen } from '@/components/md/CodePen'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'question': {
    render: Question,
    attributes: {
      question: { type: String },
      answer: { type: String },
    },
  },
  'codepen': {
    render: CodePen,
    selfClosing: true,
  },
  'list1': {
    render: List1,    
    selfClosing: true,
  },
  'md-link': {
    render: MDLink, 
    attributes: {
      title: { type: String },
      href: { type: String },
      newTab: { type: Boolean },
    },   
    selfClosing: true,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
}

export default tags
