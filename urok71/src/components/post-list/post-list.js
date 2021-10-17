import React from 'react';
import PostListItem from '../post-list-item';
import "./post-list.scss"
import style from "./app.module.css"


const PostList = ({posts}) => {

    const elem = posts.map((item)=>{

        const {id, ...itemProps} = item

        return(
            <li key={id} className={style.bg}>
                <PostListItem {...itemProps}/>
                {/* <PostListItem label={item.label} className={item.important}/> */}
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elem}
        </ul>
    )
}


export default PostList