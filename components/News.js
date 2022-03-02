const News = ({ articles }) => {
  return (
    <div className="mt-24">
      <h1>News</h1>
      <h2>Critical updates on the current crisis in Ukraine.</h2>
      <ul>
        {articles.map(a => {
          return (
            <li key={a.text} className="mb-0">&rarr; <a href={`https://www.reuters.com${a.href}`} target='_blank' rel="noreferrer" className="link">{a.text}</a></li>
          )
        })}
      </ul>
    </div>
  )
}

export default News
