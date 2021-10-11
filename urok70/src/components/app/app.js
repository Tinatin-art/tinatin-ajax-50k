import React from 'react';
import AppHeader from "../app-header"
import PostAddForm from '../post-add-form';
import PostList from '../post-list';
import PostStatusFilter from '../post-status';
import SearchPanel from '../search-panel';

const App = () => {
    return (
        <div>
            <AppHeader/>,
            <div className="search-panel d-flex">
            <SearchPanel/>,
            <PostStatusFilter/>
            </div>
            <PostList/>,
            <PostAddForm/>
        </div>
    )
}


export default App