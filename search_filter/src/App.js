import React, { Component } from 'react';
import './App.css';
import Request from './utils/Request';

// let Movie = React.createClass({
//   render() {
//     return (
//       <li>
//         <img src={this.props.image} alt="img" />
//         <span>{this.props.name}</span>
//         <span>{this.props.tear}</span>
//       </li>
//     );
//   }
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentWillMount() {
    this.search();
  }

  search = (query = '') => {
    if (query != '') {
      Request.get('/', {
        params: {
          apikey: 'cd46097b',
          s: query
        }
      })
        .then(({ data }) => {
          this.setState({
            movies: data.Search
          });
        })
        .catch(err => {
          alert(err);
        });
    }
  };

  updateSearch = e => {
    if (e && e != '') {
      alert('Search updated' + e);
      this.search(this.refs.query.value);
    } else {
      alert('Search init: ' + e);
    }
  };

  render() {
    var movies = [];
    if (this.state.movies != []) {
      alert(this.state.movies);
      console.log(this.state.movies);
      movies = this.state.movies.map(el => {
        return (
          <li>
            <img src={el.Poster} alt="img" />
            <span>{el.Title}</span>
            <span>
              {el.Year} && {el.imdbId}
            </span>
          </li>
        );
      });
    }

    return (
      <div>
        <input className="app_input" ref="query" type="text" onChange={e => this.updateSearch(e)} />
        <ul>{movies}</ul>
      </div>
    );
  }
}

export default App;
