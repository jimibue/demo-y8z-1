export function MDLink({ href, title, newTab=true }) {
  return (
    <>
      <a href={href} target="_blank" rel="noreferrer">{title}</a>
    </>
  )
}
