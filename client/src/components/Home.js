import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

// импортируем экшены
import { fetchPosts } from '../actions/index'

class Home extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    if (this.props.isGuest) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div className="Home">
          <h3>Последние новости:</h3>
          { this.props.err ? <div className="alert alert-warning" role="alert"><strong>Ошибка! Что то пошло не так!</strong></div>: '' }

          { this.props.postsLoading ? '' : '' }
      
          { 
            this.props.posts.map(post =>
            <div className="panel panel-primary" key={ post.id }>
              <div className="panel-heading">
                <h3 className="panel-title">{ post.title }</h3>
              </div>
              <div className="panel-body">{ post.body }</div>
            </div>
            )
          }
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  isGuest: state.appState.isGuest,
  posts: state.appState.posts,
  err: state.appState.err,
  postsLoading: state.appState.postsLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Home);