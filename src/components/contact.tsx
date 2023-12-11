export const Contact = () => {
  return (
    <section>
      <div className="container">
        <h3>Entre em contato</h3>

        <form action="#">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Assunto da mensagem"></textarea>
          <button type="submit">ENTRAR EM CONTATO</button>
        </form>
      </div>
    </section>
  )
}