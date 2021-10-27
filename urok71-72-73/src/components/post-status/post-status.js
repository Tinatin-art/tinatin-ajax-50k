import React , {Component} from 'react';
import "./post.status.css"
// import { Button } from 'reactstrap'


export default class PostStatusFilter extends Component {

    constructor(props){
        super(props);
        this.button = [
            {
                name: 'all' , label: "Все"
            },
            {
                name: 'like' , label: "Понравилось"
            }
        ]

    }

    render(){
        const btns = this.button.map(({name, label}) => {
            const {filter, onUpdateFilter} = this.props

            const active = filter === name;
            const activeClass = active ? "btn1 btn-info" : "btn-outline-secondary"

            return (
                <button key={name} className={`btn ${activeClass}`} value="Btn1" onClick={() => onUpdateFilter(name)} >{label}</button>
            )
        })

        return (
            <div className="Btn d-flex">
                {/* <Button color="danger">Danger!</Button> */}
                {/* <button className="btn1" value="Btn1">Все</button>
                <button className="btn2" value="Btn2">Понравилось</button> */}
                {btns}
            </div>
        )
    }
    
}


