import React from 'react'
import {ArrowLeft} from 'lucide-react'
export default function InsightDetail({item}){return <><section className="article-hero"><div className="container article-hero-grid"><div><a className="back-link" href="/insights"><ArrowLeft size={15}/> Insights</a><span>{item.category}</span><h1>{item.title}</h1><p>{item.summary}</p></div><img src={item.image} alt=""/></div></section><article className="article-body container">{item.body.map((p,i)=><p key={i}>{p}</p>)}</article></>}
