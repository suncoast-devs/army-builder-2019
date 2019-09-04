import React from 'react'
import { Icon } from '.'

export function Layout({ children }) {
  return (
    <>
      <div className="container">
        <section className="section">{children}</section>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Made with <Icon name="heart" /> by <strong>SDG</strong> in St.
            Petersburg, Florida.
          </p>
        </div>
      </footer>
    </>
  )
}
