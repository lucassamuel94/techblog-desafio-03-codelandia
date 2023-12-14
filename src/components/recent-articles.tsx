import { articles } from "../data/articles"

export const RecentArticles = () => {
  return (
    <section id="artigos">
      <div className="container py-16 md:py-20">
        <h3 className="font-medium text-2xl md:text-[28px] lg:text-[32px] leading-tight">Artigos recomendados</h3>

        <ul className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-y-12 md:gap-x-8">
          {
            articles.map(article => (
              <li key={article.id} className="w-full rounded border border-dark-30 overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300">
                <figure className="w-full">
                  <img src={`${article.imageUrl}.png`} alt={article.title} className="w-full h-[175px] object-cover object-center" />
                </figure>

                <footer className="px-[18px] py-6 lg:px-6 lg:py-8 space-y-3">
                  <h4 className="font-bold text-lg lg:text-xl">{article.title}</h4>
                  <p className="text-xl lg:text-lg">{article.resume}</p>
                </footer>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}