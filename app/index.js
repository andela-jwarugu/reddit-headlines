
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

render(
  <Root />,
  document.getElementById('root')
)

// store.dispatch(selectSubreddit('reactjs'));
// store.dispatch(fetchPosts('reactjs')).then(() =>
//   console.log('getState', store.getState())
// )
// store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
//   console.log('getState', store.getState())
// )
