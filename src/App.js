import React, {Component} from 'react';
import './App.css';
import Results from './Results'
import SearchBar from './SearchBar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      gifs: [],
      lastQuery: '',
      perPage: 15,
      currentPage: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }

  async handleSubmit(e) {
    let query = this.state.input;

    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${this.state.input}&limit=75&offset=0&rating=G&lang=en`)

    let data = await response.json()
    let gifUrls = [];

    data.data.forEach((gif,idx) => {
      gifUrls.push(gif.images.fixed_width.mp4)
    })

    this.setState({
      ...this.state,
      gifs: gifUrls,
      lastQuery: query,
      input: '',
      currentPage: 0,
    })

  }

  handleChange(e) {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  prev(e) {
    if (this.state.currentPage === 0) return;
    else this.setState({
      ...this.state,
      currentPage: this.state.currentPage - 1
    })
  }

  next(e) {
    console.log(((this.state.currentPage+1) * (this.state.perPage)))
    if (((this.state.currentPage+1) * (this.state.perPage)) >= this.state.gifs.length) {
      return false;
    }
    else {
      this.setState({
      ...this.state,
      currentPage: this.state.currentPage + 1
    })
    }
  }

  render() {

    let indexToSpliceFrom = this.state.currentPage * this.state.perPage
    let gifsToRender = Array.from(this.state.gifs).splice(indexToSpliceFrom, this.state.perPage)

    return (
      <div className="App">
      <h1>Giphy App</h1>
        <button onClick={this.prev}>Back</button><button onClick={this.next}>Next</button>
        <SearchBar onSubmit={this.handleSubmit} onChange={this.handleChange} input={this.state.input}/>
        <Results gifsToRender={gifsToRender}/>
      </div>
    );
  }
}

export default App;
