import { motion } from "framer-motion";
import {BiSolidQuoteLeft } from 'react-icons/bi';

import { fadeOnScroll } from "@/motion/motionVariants";

const testimonails = [

    {
        name: 'João Silva',
        message: 'Esse serviço foi incrível! Superou todas as minhas expectativas e eu não poderia estar mais feliz com os resultados.'
    },
    {
        name: 'Maria Souza',
        message: 'Esse serviço foi incrível! Superou todas as minhas expectativas e eu não poderia estar mais feliz com os resultados.'
    },
    {
        name: 'Samuel Oliveira',
        message: 'Esse serviço foi incrível! Superou todas as minhas expectativas e eu não poderia estar mais feliz com os resultados.'
    },
    {
        name: 'Emília Branco',
        message: 'Esse serviço foi incrível! Superou todas as minhas expectativas e eu não poderia estar mais feliz com os resultados.'
    },
    {
        name: 'Miguel Costa',
        message: 'Esse serviço foi incrível! Superou todas as minhas expectativas e eu não poderia estar mais feliz com os resultados.'
    },
    {
        name: 'Sofia Lima',
        message: 'Esse serviço foi incrível! Superou todas as minhas expectativas e eu não poderia estar mais feliz com os resultados.'
    },
    {
        name: 'João Silva',
        message: 'Esse serviço foi incrível! Superou todas as minhas expectativas e eu não poderia estar mais feliz com os resultados.'
    },
    {
        name: 'Olívia Pereira',
        message: 'Esse serviço foi incrível! Superou todas as minhas expectativas e eu não poderia estar mais feliz com os resultados.'
    }
    
]

const Testimonials = () => {
    return (
        <section>
             <div className="mb-10">
                <h2 className="h2 mb-6 text-center">O que as pessoas estão dizendo?</h2>
                <p className="text-center lead mb-24">Ouça diretamente aqueles que melhoraram sua eficiência e organização.</p>
            </div>
            <div className="w-full xl:py-24 mb-24 xl:mb-32 flex justify-center items-center">
        <div className="flex overflow-hidden">
    <motion.div variants={fadeOnScroll(0.2, 0.6)} initial="hidden" whileInView="visible" className="flex">
        <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-nowrap">
        {testimonails.map((item, index) => (
            <div key={index} className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14">
            <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
            <p className="mb-4 text-lg">{item.message}</p>
            <p className="text-xl">{item.name}</p>
            </div>
        ))}
        </motion.div>

        <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-nowrap">
        {testimonails.map((item, index) => (
            <div key={index} className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14">
            <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
            <p className="mb-4 text-lg">{item.message}</p>
            <p className="text-xl">{item.name}</p>
            </div>
        ))}
        </motion.div>
    </motion.div>
    </div>
    </div>
        </section>
  )
}

export default Testimonials
