import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
// fetchPosts is a function, need to call it 
// this.props.fetchPosts wont return anything
	componentDidMount(){
		this.props.fetchPosts();

	}
// this.props.posts is an obj {}, cannot use .map directly
// notice 2 returns in renderPosts fn, if missing ,nothing will show 
// on the screen

	renderPosts(){
		return _.map(this.props.posts, post=>{
			return(
				<li className="list-group-item" key={post.id}>
				{post.title}
				</li>)
		})
	}


	render(){
	
		return(
			<div>
 				<h3> Posts</h3>
 				<ul className="list-group">
 					{this.renderPosts()}
 				</ul>
			</div>)
	}
}

function mapStateToProps(state){
	return { posts: state.posts};
}


export default connect(mapStateToProps, {fetchPosts})(PostsIndex);