class CounterApp extends React.Component{
    constructor(props){
        super(props)
        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
        this.resetear = this.resetear.bind(this)
        this.state = {
           count: props.empezandoPor
        }
        this.count = 0
    }
    incrementar(){
        console.log('hi')
        this.count = this.count + 1
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    decrementar(){
        this.count = this.count - 1
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    resetear(){
        this.count = 0
        return {
            count:  0
        }
    }

    render(){
        return (
            <div>
                <h1>{this.count}</h1>
                <p>{this.props.empezandoPor}</p>
                <button onClick={this.incrementar}>+1</button>
                <button onClick={this.decrementar}>-1</button>
                <button onClick={this.resetear}>reset</button>
            </div>
        )
    }
}



ReactDOM.render(<CounterApp empezandoPor={10}/>, document.querySelector('#appRoot'))