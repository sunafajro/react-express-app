import React, { Component } from 'react';
import { connect } from 'react-redux';
// импортируем экшены
import { postsFetchData } from '../actions/index'

class Home extends Component {
  // подгружаем посты через экшен
  componentDidMount() {
    this.props.fetchData('/posts');
  }

  render() {
    if (this.props.hasErrored) {
      return <div className="card-panel red">Sorry! There was an error loading the posts</div>;
    }

    if (this.props.isLoading) {
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
        { this.props.posts.map(post =>
          <div key={ post.id }>
            <h4>{ post.title }</h4>
            <p>{ post.body }</p>
          </div>
        ) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(postsFetchData(url))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);