import React from 'react'
import {motion} from 'framer-motion'
export default function PageHero({eyebrow,title,description,image}){
 const style=image?{backgroundImage:`linear-gradient(135deg,rgba(47,27,16,.10),rgba(47,27,16,.28)),url("${image}")`}:{}
 return <section className="page-hero"><div className="container page-hero-grid"><motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.6}}><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></motion.div>{image&&<motion.div className="page-hero-image page-hero-bg" style={style} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{duration:.7}}><span>{title}</span></motion.div>}</div></section>
}
