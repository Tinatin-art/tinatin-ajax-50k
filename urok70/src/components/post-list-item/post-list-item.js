import React from 'react';

const PostListItem = () => {
    return (
        <div>
            <li className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">Статья номер 1</span>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn-star btn-sm">
                        <i className="fas fa-star"></i>
                    </button>
                    <button className="btn-star btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </li>
            <li className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">Статья номер 1</span>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn-star btn-sm">
                        <i className="fas fa-star"></i>
                    </button>
                    <button className="btn-star btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </li>
            <li className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">Статья номер 1</span>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn-star btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </li>
        </div>
    )
}


export default PostListItem