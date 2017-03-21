import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectPost} from '../actions/index';

class PostList extends Component {
    createListItems() {
        return this.props.posts.map((post) => {
            return (
                <li
                    className="btn btn-primary"
                    key={post.ID}
                    onClick={() => this.props.selectPost(post)}
                >
                    {this.formatName(post.post_name)}
                </li>
            )
        });
    }
    formatName(string) {
        return string.replace(new RegExp('-', 'g'), ' ');
    }
    render() {
        return (
            <ul style={listStyle}>
                {this.createListItems()}
            </ul>
        );
    }
}
const listStyle = {
    border: '1px solid lightgray',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    listStyleType: 'none',
    padding: '0'
};
const postStyle = {
    border: '1px solid lightgray'
};
const h2Style = {
    textTransform: 'capitalize',
    fontSize: '12px'
};

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectPost: selectPost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);