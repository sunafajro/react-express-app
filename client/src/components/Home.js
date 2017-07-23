import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

// импортируем экшены
import { fetchPosts } from '../actions/index'

class Home extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="Home">
        <h1>Last posts:</h1>
        { this.props.err ? 
          <Card>
            <CardTitle title="Oops!" />
            <CardText>Something went wrong!</CardText>
          </Card> : '' }

        { this.props.postsLoading ? <CircularProgress /> : '' }
    
        { 
          this.props.posts.map(post =>
          <Card key={ post.id }>
            <CardTitle title={ post.title } />
            <CardText>{ post.body }</CardText>
          </Card>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.appState.posts,
  err: state.appState.err,
  postsLoading: state.appState.postsLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Home);