import React, {Component} from 'react';
import './Results.css'
import Gif from './Gif'
import { DATA, DATATWO } from './exampleData'

class Results extends Component {
  render() {
    // let vids = DATA.data.map(gif => gif.images.fixed_width.mp4)
    // let gifs = vids.map((url) => {
    //   return <Gif imgSrc={url} key={url}/>
    // }).splice(0,15)
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
