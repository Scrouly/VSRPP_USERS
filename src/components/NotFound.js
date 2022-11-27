import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div class="mainbox">
      <div class="err">404</div>
      <div class="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          Let's go{' '}
          <NavLink to="." end>
            Home
          </NavLink>{' '}
          and try from there.
        </p>
      </div>
    </div>
  )
}

export default NotFound
