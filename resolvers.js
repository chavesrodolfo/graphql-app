const authors = [{
    name: 'JK Rowling',
    age: 50,
    books: ['Harry Potter and the prisoner of Azkaban', 'Harry Potter and the Goblet of Fire']
},
{
    name: 'George RR Martin',
    age: 70,
    books: ['GOT - Song og Ice and Fire', 'GOT - A dance with dragons']
}];

const resolvers = {
    Query: {
        author: () => {
            return authors
        }
    }
}

export default resolvers;