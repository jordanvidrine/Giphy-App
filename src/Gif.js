import React, {Component} from 'react';
import './Gif.css'

class Gif extends Component {
  static defaultProps = {
    colors: ['#ffe066','#247ba0','#70c1b3','#7078c1','#e65c5c']
  }
  render() {

    let backgroundColor = {
      backgroundColor: this.props.colors[Math.floor(Math.random()*this.props.colors.length)]
    }

    return (
      <div className="Gif" style={backgroundColor}>
        <video className="Gif-media" autoPlay loop>
          <source src={this.props.imgSrc} type="video/mp4"/>
        </video>
        <p className="Gif-copy" title="Copy to clipboard"><i className="far fa-copy"></i></p>
      </div>
    )
  }
}

export default Gif
