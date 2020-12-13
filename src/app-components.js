class BooksApp extends React.Component{
    constructor(props){
        super(props)
        this.chooseBook = this.chooseBook.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.deleteAllBooks = this.deleteAllBooks.bind(this)
        this.state = {
            books : [
                {title: 'El título del libro 1', author: 'El autor del libro 1'},
                {title: 'El título del libro 2', author: 'El autor de libro 2'},
                {title: 'El título del libro 3', author: 'El autor de libro 3'},
                {title: 'El título del libro 4', author: 'El autor de libro 4'}
                ]
        }
    }
    chooseBook(e){
        e.preventDefault()
        let randomBook = Math.floor(Math.random() * this.state.books.length)
        alert(`Book title: ${this.state.books[randomBook].title} Written by: ${this.state.books[randomBook].author} `)
    }

    onSubmit(e){
        e.preventDefault()
        let title = e.target.elements.title.value
        let author = e.target.elements.author.value
        this.setState({books: [...this.state.books, {title, author}]})
        e.target.reset()
    }

    deleteAllBooks(e){
        e.preventDefault()
        this.setState({books: []})
    }
    
    render(){
        let title = "Biblioteca digital"
        let subTitle = 'Te asesoro sobre entidades alfanuméricas.'
        return(
            <div>
                <Header title={title} subTitle={subTitle}/>
                <RecommendBook books={this.state.books}  chooseBook={this.chooseBook}/>       
                <Books books={this.state.books}/>
                <AddBook onSubmit={this.onSubmit}/> <br></br>
                <DeleteAllBooks deleteAllBooks={this.deleteAllBooks} />     
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
    return(
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
        </div>
    )   
   }
}

class RecommendBook extends React.Component{
    render(){
    return(
        <div>
            <button disabled={!this.props.books.length? true : false} onClick={this.props.chooseBook}>
                Recomendar Libro
            </button>
        </div>
    )   
   }
}

class Books extends React.Component{
    render(){
    return(
        <div>
            <p>{this.props.books.length? `Hay ${this.props.books.length} libros` : `No hay libros disponibles`} </p>
                <Book books={this.props.books}/>
        </div>
    )   
   }
}

class Book extends React.Component{
    render(){
    return(
        <div>
            <ul>
                {this.props.books.map((book, index) => {
                    return <li key={index}>{book.title} / {book.author}</li>
                })}
            </ul>
        </div>
    )   
   }
}

class AddBook extends React.Component{
    render(){
    return(
        <div>
            <form onSubmit={this.props.onSubmit}>
              <label htmlFor="title">Título: </label>
              <input type="text" id="title" name="title"  required />
              <label htmlFor="author">Autor: </label>
              <input type="text" id="author" name="author" required />
              <button >Submit</button>
            </form>
        </div>
    )   
   }
}

class DeleteAllBooks extends React.Component {
    render(){
        return(
            <div>
                <button onClick={this.props.deleteAllBooks}>Eliminar libros</button>
            </div>
        )
    }
}

ReactDOM.render(<BooksApp/>, document.querySelector('#appRoot'))