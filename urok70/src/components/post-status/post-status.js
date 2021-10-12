import React from 'react';
import "./post.status.css"

const PostStatusFilter = () => {
    return (
        <div className="Btn d-flex">
            <button className="btn1" value="Btn1">Все</button>
            <button className="btn2" value="Btn2">Понравилось</button>
        </div>
    )
}


export default PostStatusFilter