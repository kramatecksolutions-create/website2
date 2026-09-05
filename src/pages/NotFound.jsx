import React from 'react'
import {Link} from 'react-router-dom'
export default function NotFound(){return <section className="notfound"><div><span>404</span><h1>Page not found.</h1><p>The page you requested does not exist.</p><Link className="btn primary" to="/">Back Home</Link></div></section>}
