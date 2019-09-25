import React, {Component} from 'react';
import './Gif.css'
import Clipboard from 'clipboard'

class Gif extends Component {
  static defaultProps = {
    colors: ['rgba(255, 224, 102, 0.75)','rgba(36, 123, 159, 0.75)','rgba(112, 193, 179, 0.75)','rgba(112, 120, 193, 0.75)','rgba(230, 92, 92, 0.75)']
  }
  render() {

    let clipboard = new Clipboard('.Gif')
    clipboard.on('success', function(e) {
      console.info('Action:', e.action);
    })

    function copyText(e) {
      let text;
      if (e.target.hasAttribute('data-link')) {
        navigator.clipboard.writeText(e.target.attributes["data-link"].nodeValue).then(() => {} , (err) => console.log(err))
      } else {
        navigator.clipboard.writeText(e.target.parentNode.attributes["data-link"].nodeValue).then(() => {} , (err) => console.log(err))
      }
    }

    let backgroundColor = {
      backgroundColor: this.props.colors[Math.floor(Math.random()*this.props.colors.length)]
    }

    return (
      <div className="Gif" data-clipboard-text={this.props.gifUrl}>
        <video className="Gif-media" autoPlay loop>
          <source src={this.props.imgSrc} type="video/mp4"/>
        </video>
        <div data-link={this.props.gifUrl} className="Gif-copy" title="Copy to clipboard" style={backgroundColor}><i className="far fa-copy fa-3x Gif-icon"></i></div>
      </div>
    )
  }
}

export default Gif
