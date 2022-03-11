import { Component } from "react"

class CounterClass extends Component {
    
    constructor(){
        super()
        
        this.state = {
            jumlah: 0
        }

        this.onCounterClick = this.onCounterClick.bind(this)
    }

    onCounterClick(){
        this.setState({
            jumlah: this.state.jumlah+1
        })
    }

    render(){
        const {label="OK"} = this.props


        return (
            <>
                <button onClick={this.onCounterClick}>
                    {label}
                </button>

                <p>jumlah klik class component: {this.state.jumlah}</p>
            </>
        )
    }
}
export default CounterClass