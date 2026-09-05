import React from 'react'
import {motion} from 'framer-motion'
export default function PageHero({eyebrow,title,description,image}){return <section className="page-hero"><div className="container page-hero-grid"><motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.6}}><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></motion.div>{image&&<motion.div className="page-hero-image" initial={{opacity:0,x:25}} animate={{opacity:1,x:0}} transition={{duration:.7}}><img src={image} alt=""/></motion.div>}</div></section>}
