"use client";


//components
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import Trial from "@/components/Trial";
import Footer from "@/components/Footer";
//import library lenis scroll
import { ReactLenis } from 'lenis/dist/lenis-react';


const Home = () => {
  return (
    <>
    <ReactLenis root>
    <Hero />
    <Brands />
    <Features />
    <Integrations />
    <Testimonials />
    <Trial />
    <Footer />
    </ReactLenis>
   
    </>
  )
}

export default Home