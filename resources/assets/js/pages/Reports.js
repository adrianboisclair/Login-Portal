import React from 'react';
import PostList from '../containers/post-list';
import PostDetail from '../containers/post-detail';

const postsStyle = {
    border: "1px solid lightgray"
};

export default class Reports extends React.Component {
    title = 'Reports';
    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <div className="posts" style={postsStyle}>
                    <h3>Select a Post</h3>
                    <PostList />
                    <hr/>
                    <PostDetail />
                </div>
            </div>
        );
    }
}