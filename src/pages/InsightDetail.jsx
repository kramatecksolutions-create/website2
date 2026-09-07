
import React from 'react'
import {ArrowLeft} from 'lucide-react'
export default function InsightDetail({data}){return <article><section className="article-hero"><div className="container article-grid"><div><a className="back-link" href="/insights"><ArrowLeft size={15}/> Back to Insights</a><span>{data.category}</span><h1>{data.title}</h1><p>{data.summary}</p></div><img src={data.detailImage || data.image} alt=""/></div></section><div className="container article-body">{data.body.map((p,i)=><p key={i}>{p}</p>)}</div></article>}
