const styles = {
  xs: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2',
  sm: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12',
  md: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8',
  lg: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8',
}

function Container({ size = 'sm', className, ...props }) {
  return <div className={clsx(styles[size], className)} {...props} />
}

import clsx from 'clsx'

function SectionHeading({ number, children, className, ...props }) {
  return (
    <h2
      className={clsx(
        className,
        'inline-flex items-center rounded-full py-1 px-4 text-blue-600 ring-1 ring-inset ring-blue-600'
      )}
      {...props}
    >
      <span className="font-mono text-sm" aria-hidden="true">
        {number.padStart(2, '0')}
      </span>
      <span className="ml-3 h-3.5 w-px bg-blue-600/20" />
      <span className="ml-3 text-base font-medium tracking-tight">
        {children}
      </span>
    </h2>
  )
}

export function ScrollContainer({
  number,
  title,
  id,
  header,
  description,
  children,
}) {
  return (
    <section
      id={id}
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number={number} id={`${id}-title`}>
          {title}
        </SectionHeading>
        {header && (
          <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
            {header}
          </p>
        )}
        {description && (
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {description}
          </p>
        )}
        <Container size="lg" className="mt-16">
          {children}
        </Container>
      </Container>
    </section>
  )
}
