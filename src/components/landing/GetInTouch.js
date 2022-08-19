import { ScrollContainer } from './ScrollContainer'
import { useEffect } from 'react'

export function GetInTouch() {
    useEffect(() => {
        const script = document.createElement('script')
    
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
    
        document.body.appendChild(script)
    
        return () => {
          document.body.removeChild(script)
        }
      }, [])
  return (
    <ScrollContainer
      id="get-in-touch"
      number={'5'}
      title="Get In Touch"
      //   header={'yo dwag'}
      //   description={'All the basics goodies'}
    >
      <div>
        <h2
          id="faq-title"
          className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
        >
          Get in touch with us
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          {`
              Want to learn more?  Setup a zoom call with us.`}
        </p>
        <div
          className="calendly-inline-widget"
          data-url={`https://calendly.com/y8z-studios/20min?embed_domain=localhost%3A3000&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1&back=1`}
          style={{ minWidth: '320px', height: '930px' }}
        ></div>
      </div>
    </ScrollContainer>
  )
}

