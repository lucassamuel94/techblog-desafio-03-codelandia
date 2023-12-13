export const Hero = () => {
  return (
    <section
      className="bg-background lg:h-[560px] lg:flex lg:items-center">
      <div
        className="container py-16 lg:py-0 flex flex-col items-center lg:flex-row gap-6 lg:justify-between max-w-[550px] lg:max-w-7xl">
        <figure>
          <img
            src='hero-image.png'
            alt='Ilustração de uma pessoa clicando no notebook'
            className="w-[208px] md:w-[330px] lg:w-[400px]" />
        </figure>

        <div
          className="lg:order-first text-center lg:text-left flex flex-col gap-6 lg:gap-8 lg:max-w-[581px]">
          <h2
            className="font-bold text-2xl md:text-[32px] lg:text-[40px] leading-tight">
            Encontre os <span className="text-brand">melhores artigos</span> de programação em um só lugar
          </h2>

          <p className="lg:pr-10 md:text-xl lg:text-2xl">
            Explore o topo da programação em um só lugar! Seu destino único para dicas e tendências atuais.
          </p>

          <a
            href="#artigos"
            className="text-sm md:text-lg bg-brand hover:bg-brand/90 text-dark-60 text-center md:text-left md:w-max md:mx-auto lg:mx-0 py-3.5 px-8 rounded font-bold uppercase transition-all">
            Buscar artigos
          </a>
        </div>
      </div>
    </section>
  )
}