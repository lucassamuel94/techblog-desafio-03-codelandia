export const Contact = () => {
  return (
    <section className="bg-background">
      <div className="container py-16 md:py-20 space-y-12 lg:max-w-[544px]">
        <h3 className="font-bold text-2xl md:text-[28px] lg:text-[32px] leading-tight lg:text-center">Entre em contato</h3>

        <form
          action="#"
          className="grid gap-6">
          <input
            id="name"
            type="text"
            placeholder="Nome"
            className="form-input rounded border border-dark-30 p-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-brand transition-all"
            required
          />
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="form-input rounded border border-dark-30 p-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-brand transition-all"
            required
          />
          <textarea
            id='message'
            placeholder="Assunto da mensagem"
            className="form-input rounded border border-dark-30 p-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-brand transition-all min-h-[150px]"
            required
          ></textarea>
          <button
            type="submit"
            className="py-3.5 px-8 w-full text-center bg-brand hover:bg-brand/90 text-dark-60 font-bold uppercase rounded transition-all duration-300 hover:-translate-y-1"
          >
            ENTRAR EM CONTATO
          </button>
        </form>
      </div>
    </section>
  )
}