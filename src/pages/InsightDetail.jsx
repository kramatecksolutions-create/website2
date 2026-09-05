import React from 'react'
import {Link} from 'react-router-dom'
import {ArrowLeft} from 'lucide-react'
export default function InsightDetail({item}){return <><section className="article-hero"><div className="container article-hero-grid"><div><Link className="back-link" to="/insights"><ArrowLeft size={15}/> Insights</Link><span>{item.category}</span><h1>{item.title}</h1><p>{item.summary}</p></div><img src={item.image} alt=""/></div></section><article className="article-body container">{item.body.map((p,i)=><p key={i}>{p}</p>)}</article></>}
