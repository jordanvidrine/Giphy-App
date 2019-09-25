import React, {Component} from 'react'
import './Pagination.css'

class Pagination extends Component {
  render() {

  let pages = this.props.gifAmt / this.props.perPage

  return (
    <div className="Pagination">
      {this.props.currentPage === 0 ? (
        <div className="Pagination-buttons">
        <button className="Pagination-buttons-prev" onClick={this.props.prev} disabled><i class="fas fa-long-arrow-alt-left fa-5x"></i></button>
        <button className="Pagination-buttons-next" onClick={this.props.next}><i class="fas fa-long-arrow-alt-right fa-5x"></i></button>
        </div>
      ) : (this.props.currentPage + 1) * this.props.perPage === this.props.gifAmt ?
      (
        <div className="Pagination-buttons">
        <button className="Pagination-buttons-prev" onClick={this.props.prev}><i class="fas fa-long-arrow-alt-left fa-5x"></i></button>
        <button className="Pagination-buttons-next" onClick={this.props.next} disabled><i class="fas fa-long-arrow-alt-right fa-5x"></i></button>
        </div>
      ) :
      (
        <div className="Pagination-buttons">
        <button className="Pagination-buttons-prev" onClick={this.props.prev}><i class="fas fa-long-arrow-alt-left fa-5x"></i></button>
        <button className="Pagination-buttons-next" onClick={this.props.next}><i class="fas fa-long-arrow-alt-right fa-5x"></i></button>
        </div>
      )}
    </div>
  )
  }
}

export default Pagination
