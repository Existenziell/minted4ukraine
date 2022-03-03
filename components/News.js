const News = ({ articles }) => {
  return (
    <div>
      <h1>News</h1>
      <h2>Critical updates on the current crisis in Ukraine.</h2>
      <ul>
        {articles.map((a, i) => {
          return (
            <li key={i} className="mb-2">
              <span className="hidden md:inline">&rarr;</span>{` `}
              <a href={`https://www.reuters.com${a.href}`} target='_blank' rel="noreferrer" className="link">{a.text}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default News
