let books = [
    {
        title: 'Dune',
        author: 'Frank Herbert'
    },
    {
        title: 'Stormlight Archive',
        author: 'Brandon Sanderson'
    },
    {
        title: 'Foundation of Earth',
        author: 'Isaac Asimov'
    }
]

const onSubmitNewBook = (e) => {
    e.preventDefault()
    let newTitle = e.target.elements.title.value
    let newAuthor = e.target.elements.author.value
    e.target.reset()
    if(newTitle && newAuthor) {
        books.push({title: newTitle, author: newAuthor})
    } else if (newTitle){
        books.push({title: newTitle, author: "Anónimo"})
    } else {
        alert("Book title is required.")
    }
   render()
}

const removeAllBooks = (e)=>{
    e.preventDefault()
    books = [];
    render()
}

const adviceAbook = (e) =>{
    e.preventDefault()
    let randomBook = Math.floor(Math.random() * books.length)
    alert(`Book title: ${books[randomBook].title} Written by: ${books[randomBook].author} `)
    // return `Book title: ${books[randomBook].title} Written by: ${books[randomBook].author} `
    
}

const render = () => {
    
    const template = (
        <div>
            <h1>Consejero de libros</h1>
            <h2>Descripción:</h2>
            <p>{(books.length > 0) ? 'Hay ' + books.length + ' libros' : 'No hay libros'}</p>
            <button onClick={(removeAllBooks)}> Borrar Todos Libros</button>
            <br></br>
            <br></br>
            <button onClick={(adviceAbook)}>Recomendar Libro</button>
            
            <p>Número de libros disponibles: <b>{books.length}</b></p>
            <ul>
                {
                  books.map((book, i) => {
                    return <li key={i}><p>Titulo: {book.title} <b>Escrito por:</b> {book.author}</p></li> 
                  })
                }
            </ul>
            <form action="" onSubmit={onSubmitNewBook}>
                <label htmlFor="titulo">Nuevo Título:</label>
                <input type="text" name="title" id="titulo"></input>
                
                <label htmlFor="titulo">Autor del libro:</label>
                <input type="text" name="author" id="autor"></input>
                
                <button>Añadir Libro</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render()

