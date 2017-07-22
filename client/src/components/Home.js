import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Card, CardTitle, CardText} from 'material-ui/Card';
// импортируем экшены
import { fetchPosts } from '../actions/index'

class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {

    if (this.props.err) {
      return <div className="card-panel red">Sorry! There was an error loading the posts</div>;
    }

    if (this.props.postsLoading) {
      return (
          <div className="preloader-wrapper active">
            <div className="spinner-layer spinner-red-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
      )
    }

    return (
      <div className="Home">
        <h1>Last posts:</h1>
        {this.props.posts.map(post =>
          <Card key={ post.id }>
            <CardTitle title={ post.title } />
            <CardText>{ post.body }</CardText>
          </Card>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.postsState.posts,
  err: state.postsState.err,
  postsLoading: state.postsState.postsLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Home);