class BooksApp extends React.Component{
    constructor(props){
        super(props)
        this.chooseBook = this.chooseBook.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.deleteAllBooks = this.deleteAllBooks.bind(this)
        this.deleteOneBook = this.deleteOneBook.bind(this)
        this.state = {
            books : [
                {title: 'Dune', author: 'Frank Herbert'},
                {title: 'Stormlight Archive', author: 'Brandon Sanderson'},
                {title: 'The Gambler', author: 'Fyodor Dostoyevsky'},
                {title: 'Atlas Shrugged', author: 'Ayn Rand'}
                ],
            error: undefined
        }
    }
    chooseBook(e){
        e.preventDefault()
        let randomBook = Math.floor(Math.random() * this.state.books.length)
        alert(`Book title: ${this.state.books[randomBook].title} Written by: ${this.state.books[randomBook].author} `)
    }



    onSubmit(e){
        e.preventDefault()
        let title = e.target.elements.title.value.trim()
        let author = e.target.elements.author.value.trim()

        if(this.state.books.some(item => item.title.toLowerCase() === title.toLowerCase())){
            alert('Title already exists')
        } else {
            this.setState({books: [...this.state.books, {title, author}]})
        }
        e.target.reset()
    }
    
    deleteOneBook(book){
        this.setState({books: [...this.state.books.filter((item)=> item.title !== book.title)]})
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
                <Books books={this.state.books} deleteOneBook={this.deleteOneBook}/>
                <AddBook onSubmit={this.onSubmit} error={this.state.error}/> <br></br>
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
                <Book books={this.props.books} deleteOneBook={this.props.deleteOneBook} />
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
                    return (
                        <li key={index}>{book.title} / {book.author} <button onClick={this.props.deleteOneBook.bind(this, book)}>X</button></li> 
                    )
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
            {/* {this.props.state.error && <p>{this.props.state.error}</p>} */}
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




