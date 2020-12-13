class Description extends React.Component  {
    render(){
        return <h2>Hola desde Description</h2>
    }
}

class Title extends React.Component {
    render(){
        return <h1>{this.props.title}</h1>
    }
}

class Paragraph extends React.Component {
    render(){
        return <p>Here come the books:</p>
    }
}


class RemoveBooks extends React.Component{
    render(){
        return(<button>{this.props.orden}</button>) 
    }
}

class AddBook extends React.Component {
    render() {
        return(            
            <form action="">
                <label htmlFor="title">Book title:</label>
                <input type="text" id="title" name="title"/>
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author"/>
                <button>Submit</button>
            </form>
        )  
    }
}

class ConsejeroApp extends React.Component{
    render(){
        return(
            <div>
                <Title title="Librero Digital"/>
                <Description/>
                <RemoveBooks orden="Borrar Libros"/>
                <Paragraph/>
                <AddBook/>
            </div>
        )
    }
}

ReactDOM.render(<ConsejeroApp/>, document.querySelector('#appRoot'))