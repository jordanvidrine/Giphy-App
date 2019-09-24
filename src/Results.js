import React, {Component} from 'react';
import './Results.css'
import Gif from './Gif'
import { DATA, DATATWO } from './exampleData'

class Results extends Component {
  render() {

    let gifs = this.props.gifsToRender.map((url,idx) => {
      return <Gif imgSrc={url} key={idx}/>
    })

    return (
      <div className='Results'>
        {gifs}
      </div>
    )
  }
}

export default Results
