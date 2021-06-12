import React from 'react'
import LoadingImg from './loading.gif'
import './loading.styl'

export default class Loading extends React.Component{
  state = { }

  render () {
    const { show, title } = this.props

    return (
      <div className="loading-container" style={ {display: show ? '' : 'none'} }>
        <div className="loading-wrapper">
          <img src={ LoadingImg } alt="" width="18px" height="18px"/>
          <div className="loading-title">
            { title }
          </div>
        </div>
      </div>
    )
  }
}