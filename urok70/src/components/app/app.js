import React from 'react';
import AppHeader from "../app-header"
import PostAddForm from '../post-add-form';
import PostList from '../post-list';
import PostStatusFilter from '../post-status';
import SearchPanel from '../search-panel';
import "./app.css"

const App = () => {

    const data = [
        {label: "Статья номер 1", important: true, id: "1"},
        {label: "Статья номер 2", important: false , id: "2"},
        {label: "Статья номер 3", important: true, id: "3"},
        {label: "Статья номер 4", important: false, id: "4"}
    ]
    return (
        <div className="wrapper">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}


export default App