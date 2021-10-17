import React from 'react';
import "./post.status.css"
import { Button } from 'reactstrap'


const PostStatusFilter = () => {
    return (
        <div className="Btn d-flex">
            <Button color="danger">Danger!</Button>
            <button className="btn1" value="Btn1">Все</button>
            <button className="btn2" value="Btn2">Понравилось</button>
        </div>
    )
}


export default PostStatusFilter