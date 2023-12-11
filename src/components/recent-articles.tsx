import { articles } from "../data/articles"

export const RecentArticles = () => {
  return (
    <section>
      <div className="div">
        <h3>Artigos recentes</h3>

        <ul>
          {
            articles.map(article => (
              <li key={article.id}>
                <figure>
                  <img src={article.imageUrl} alt={article.title} />
                </figure>

                <footer>
                  <h4>{article.title}</h4>
                  <p>{article.resume}</p>
                </footer>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}