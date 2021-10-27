import React , {Component} from 'react';
import "./post-list-item.css"

export default class PostListItem extends Component{

    render(){

        const {label, onDelete, onToggleImportant, onToggleLike , important, like} = this.props

        let classNames = "app-list-item d-flex justify-content-between"
        if(important){
            classNames += " important"
        }

        if(like){
            classNames += " like"
        }

        return(
            <div className={classNames}>
                <span className="app-list-item-label" onClick={onToggleLike}>{label}{important}</span>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn-star btn-sm" onClick={onToggleImportant}>
                        <i className="fas fa-star"></i>
                    </button>
                    <button className="btn-trash btn-sm" onClick={onDelete}>
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