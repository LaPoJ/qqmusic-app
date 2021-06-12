import React from 'react'
import BScroll from 'better-scroll'
import './scroll.styl'

class Scroll extends React.Component{
  state = {}

  componentDidMount () {
    if (!this.bscrol) {
      this.bscrol = new BScroll(this.refs.scrollView, {
        probeType: 3,
        click: this.props.click,
      })
      console.log('1')
      this.bscrol.on('scroll', (e) => {
        this.props.onScroll(e)
      })
    }
  }

  componentWillUnmount () {
    this.bscrol = null
  }

  componentDidUpdate () {
    if (this.bscrol && this.props.refresh){
      this.bscrol.refresh()
    }
  }

  render() {
    return (
      <div className="scroll-view" ref="scrollView">
        { this.props.children }
      </div>
    )
  }
}
export default Scroll