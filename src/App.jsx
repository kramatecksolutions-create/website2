
import React,{useEffect} from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesOverview from './pages/ServicesOverview'
import IndustriesOverview from './pages/IndustriesOverview'
import ServicePage from './pages/ServicePage'
import IndustryPage from './pages/IndustryPage'
import Platform from './pages/Platform'
import WhyKramatek from './pages/WhyKramatek'
import Insights from './pages/Insights'
import InsightDetail from './pages/InsightDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import {services,industries,insights} from './data/siteData'
function ScrollTop(){const {pathname}=useLocation();useEffect(()=>window.scrollTo(0,0),[pathname]);return null}
export default function App(){return <><ScrollTop/><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/services" element={<ServicesOverview/>}/>{Object.entries(services).map(([slug,data])=><Route key={slug} path={`/services/${slug}`} element={<ServicePage data={data}/>}/>)}<Route path="/industries" element={<IndustriesOverview/>}/>{Object.entries(industries).map(([slug,data])=><Route key={slug} path={`/industries/${slug}`} element={<IndustryPage data={data}/>}/>)}<Route path="/platform" element={<Platform/>}/><Route path="/why-kramatek" element={<WhyKramatek/>}/><Route path="/insights" element={<Insights/>}/>{insights.map(x=><Route key={x.slug} path={`/insights/${x.slug}`} element={<InsightDetail data={x}/>}/>)}<Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></>}
