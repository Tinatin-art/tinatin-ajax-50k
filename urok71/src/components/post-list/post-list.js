import React from 'react';
import PostListItem from '../post-list-item';
import "./post-list.scss"



const PostList = ({posts, onDelete , onToggleImportant, onToggleLike}) => {

    const elem = posts.map((item)=>{

        const {id, ...itemProps} = item

        return(
            <li key={id}>
                <PostListItem 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLike={() => onToggleLike(id)}
                />
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