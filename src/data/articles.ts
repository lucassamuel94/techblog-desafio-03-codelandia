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
    title: 'Title 1',
    resume: 'Resume 1',
    body: 'Body 1',
    imageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: '2',
    title: 'Title 2',
    resume: 'Resume 2',
    body: 'Body 2',
    imageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: '3',
    title: 'Title 3',
    resume: 'Resume 3',
    body: 'Body 3',
    imageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: '4',
    title: 'Title 4',
    resume: 'Resume 4',
    body: 'Body 4',
    imageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: '5',
    title: 'Title 5',
    resume: 'Resume 5',
    body: 'Body 5',
    imageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: '6',
    title: 'Title 6',
    resume: 'Resume 6',
    body: 'Body 6',
    imageUrl: 'https://picsum.photos/200/300',
  }
]