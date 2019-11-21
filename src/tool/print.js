export default (title, content) => {
  console.log(
    `%c${title}%c${content}`,
    'background: #00d1b2; padding: 5px; color: #fff; border-radius: 5px 0 0 5px',
    'background: #555; padding: 5px; color: #fff; border-radius: 0 5px 5px 0'
  )
}
