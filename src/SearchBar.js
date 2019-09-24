import React from 'react'
import './SearchBar.css'

function SearchBar(props) {
    return (
      <div className="SearchBar">
        <input className="SearchBar-input" onChange={props.onChange} type="text" value={props.input}></input>
        <button className="SearchBar-submit" onClick={props.onSubmit}><i className="fas fa-search fa-2x"></i></button>
      </div>
    )
  }

export default SearchBar
