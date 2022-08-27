export function CodePen({src, href}) {
  return (
    <>
      <iframe
        height="300"
        style={{width: '100%'}}
        scrolling="no"
        title="yo"
        src={src}
        frameBorder="no"
        loading="lazy"
        allowTransparency="true"
        allowFullScreen="true"
      >
        See the Pen <a href={href}>yo</a>{' '}
        by James Yeates (
        <a href="https://codepen.io/JamesYeates">@JamesYeates</a>) on{' '}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  )
}
