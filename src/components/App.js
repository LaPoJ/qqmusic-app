import React from 'react'
// Redirect
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Recommend from './recommend/Recommend'
import Ranking from './ranking/Ranking'
import Search from './search/Search'

import '../assets/stylus/font.styl'
// import './App.css'
import './style.styl'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          QQ 音乐
        </header>
        <div className="music-tab">
          <div className="tab-item">
            <NavLink className="nav-link" to="/recommend">
              <span>推荐</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/ranking">
              <span>排行榜</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/search">
              <span>搜索</span>
            </NavLink>
          </div>
        </div>
        <div className="music-view">
          {/* 路由 */}
          <Switch>
            {/* switch 只显示符合 path 的第一个组件 */}
            <Route path="/recommend" component={ Recommend } />
            <Route path="/ranking" component={ Ranking } />
            {/* <Route path="/singer" component={Singer} /> */}
            <Route path="/search" component={ Search } />
            <Route path="/" component={ Recommend } />
            {/* <Redirect from="/" to="/recommend"></Redirect> */}
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
