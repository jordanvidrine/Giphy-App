import React, {Component} from 'react';
import './Results.css'
import Gif from './Gif'
import { DATA, DATATWO } from './exampleData'

class Results extends Component {
  render() {
    console.log('rendering')
    let gifs = this.props.gifsToRender.map((url) => {
      return <Gif imgSrc={url} key={url}/>
    })

    return (
      <div className='Results'>
        {gifs}
      </div>
    )
  }
}

export default Results
