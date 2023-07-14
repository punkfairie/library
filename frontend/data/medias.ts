const medias = {
    books: [
        {id: 1, title: 'The Small Backs of Children', author: 'Lidia Yuknavitch', copies: 1, checkedOut: 0, holds: []},
        {id: 2, title: 'Beauty Queens', author: 'Libby Bray', copies: 2, checkedOut: 1, holds: []},
        {id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', copies: 5, checkedOut: 5, holds: [1]},
        {id: 4, title: 'Audacious', author: 'Gabrielle Prendergast', copies: 1, checkedOut: 1, holds: [3, 7]}
    ],
    movies: [
        {id: 1, title: 'Itty Bitty Titty Committee', director: 'Yaela Howard', copies: 1, checkedOut: 0, holds: []},
        {id: 2, title: 'Sing!', director: 'Tom Ford', copies: 2, checkedOut: 2, holds: [2]},
        {id: 3, title: 'Barbie', director: 'Greta Greenwood', copies: 0, checkedOut: 0, holds: [6, 3, 9]},
    ],
    music: [
        {id: 1, title: 'Fearless', artist: 'Taylor Swift', copies: 2, checkedOut: 1, holds: []},
        {id: 2, title: 'Gag Order', artist: 'Kesha', copies: 1, checkedOut: 1, holds: [5]},
        {id: 3, title: 'Speak Now', artist: 'Taylor Swift', copies: 3, checkedOut: 1, holds: []}
    ]
}

export default medias
