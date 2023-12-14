export type Article = {
  id: string,
  title: string,
  resume: string,
  body?: string,
  imageUrl: string,
}


export const articles: Article[] = [
  {
    id: '1',
    title: 'O que é linguagem de programação? Conheça as principais',
    resume: 'Uma das mais populares vertentes da tecnologia da informação, a área de...',
    body: 'Body 1',
    imageUrl: 'thumbnail-post-01',
  },
  {
    id: '2',
    title: 'Python: por que a linguagem é tão usada para Data Science e finanças?',
    resume: 'O mundo da programação conta com algumas opções de linguagem para...',
    body: 'Body 2',
    imageUrl: 'thumbnail-post-02',
  },
  {
    id: '3',
    title: 'GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários',
    resume: 'O popular serviço de repositório de código GitHub foi adquirido pela...',
    body: 'Body 3',
    imageUrl: 'thumbnail-post-03',
  },
  {
    id: '4',
    title: '15 comandos no GIT que os desenvolvedores precisam saber',
    resume: 'Dominar os comandos GIT é uma habilidade que se conquista com...',
    body: 'Body 4',
    imageUrl: 'thumbnail-post-04',
  },
  {
    id: '5',
    title: 'GIT e GitHub: o que são e quais as diferenças entre eles?',
    resume: 'Git e GibHub são dois softwares de controle de versão essenciais para...',
    body: 'Body 5',
    imageUrl: 'thumbnail-post-05',
  },
  {
    id: '6',
    title: 'GitHub Copilot ganha integração com GPT-4 e interface conversacional',
    resume: 'O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...',
    body: 'Body 6',
    imageUrl: 'thumbnail-post-06',
  }
]