
import React from 'react'
import {motion} from 'framer-motion'
export default function PageHero({eyebrow,title,description,image}){
 return <section className="page-hero"><div className="container page-hero-grid">
   <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}>
     <div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p>
   </motion.div>
   <motion.div className="page-hero-media" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}}><img src={image} alt={`${title} visual`}/></motion.div>
 </div></section>
}
