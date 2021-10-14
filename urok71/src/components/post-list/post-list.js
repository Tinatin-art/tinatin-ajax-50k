import React from 'react';
import PostListItem from '../post-list-item';
import "./post-list.css"


const PostList = ({posts}) => {

    const elem = posts.map((item)=>{

        const {id, ...itemProps} = item

        return(
            <li key={id}>
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