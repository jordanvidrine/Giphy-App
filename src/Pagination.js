import React, {Component} from 'react'
import './Pagination.css'

function Pagination(props) {
  let pages = props.gifAmt / props.perPage


  return (
    <div className="Pagination">
      {props.currentPage === 0 ? (
        <button onClick={props.next}>Next</button>
      ) : (props.currentPage + 1) * props.perPage === props.gifAmt ?
      (
        <div className="Pagination">
        <button onClick={props.prev}>Previous</button>
        </div>
      ) :
      (
        <div className="Pagination">
        <button onClick={props.prev}>Previous</button>
        <button onClick={props.next}>Next</button>
        </div>
      )}
    </div>
  )
}

export default Pagination
