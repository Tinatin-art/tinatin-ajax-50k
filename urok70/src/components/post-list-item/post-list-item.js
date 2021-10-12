import React , {Component} from 'react';
import "./post-list-item.css"

export default class PostListItem extends Component{

    constructor(props){
        super(props)
        this.state = {
            important: false,
            like: false
        }

        this.addImportant = this.addImportant.bind(this)
        this.addLike = this.addLike.bind(this)
    }


    addImportant(){
        this.setState(({important}) => ({
            important: !important
        }))
    }

    addLike(){
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render(){

        const {label} = this.props
        const {important, like} = this.state

        let classNames = "app-list-item d-flex justify-content-between"
        if(important){
            classNames += " important"
        }

        if(like){
            classNames += " like"
        }

        return(
            <div className={classNames}>
                <span className="app-list-item-label" onClick={this.addLike}>{label}{important}</span>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn-star btn-sm" onClick={this.addImportant}>
                        <i className="fas fa-star"></i>
                    </button>
                    <button className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-heart"></i>
                </div>
            </div>
        )
    }

}



// const PostListItem = ({label, important = false}) => {

//     let classNames = "app-list-item d-flex justify-content-between"
//     if(important){
//         classNames += " important"
//     }
//     return (
//             <div className={classNames}>
//                 <span className="app-list-item-label">{label}{important}</span>
//                 <div className="d-flex justify-content-between align-items-center">
//                     <button className="btn-star btn-sm">
//                         <i className="fas fa-star"></i>
//                     </button>
//                     <button className="btn-star btn-sm">
//                         <i className="fas fa-trash"></i>
//                     </button>
//                 </div>
//             </div>
     
//     )
// }


// export default PostListItem