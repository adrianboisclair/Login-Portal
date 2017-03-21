import React, {Component} from "react";
import {connect} from "react-redux";

class PostDetail extends Component {
    render() {
        if (!this.props.post){return (<h3>Select a Post...</h3>);}
        return (
            <div>
                <h2 style={h2Style}>{formatName(this.props.post.post_name)}</h2>
                <p dangerouslySetInnerHTML={createMarkup(this.props.post.post_content)}></p>
            </div>
        );
    }
}
const h2Style = {
    textTransform: 'capitalize'
};
function formatName(string) {
    return string.replace(new RegExp('-', 'g'), ' ');
}

/**
 * Func: createMarkup
 * Returns an object of properly formatted HTML
 * @param string
 * @returns {{__html: *}}
 */
function createMarkup(string) {
    return {__html: string};
}

/**
 * Func: mapStateToProps
 * Returns mapped properties
 * @param state
 * @returns {{post: *}}
 */
function mapStateToProps(state) {
    console.log(state);
    return {post: state.activePost};
}

export default connect(mapStateToProps)(PostDetail);