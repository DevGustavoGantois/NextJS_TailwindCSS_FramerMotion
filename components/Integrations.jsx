"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

const icons = [
    {
        src: "/integrations/notion.svg"
    }, 
    {
        src: "/integrations/slack.svg"
    },
    {
        src: "/integrations/google_drive.svg"
    },
    {
        src: "/integrations/intercom.svg"
    },
    {
        src: "/integrations/jira.svg"
    },
    {
        src: "/integrations/stripe.svg"
    },
    {
        src: "/integrations/zapier.svg"
    },
    {
        src: "/integrations/figma.svg"
    },
    {
        src: "/integrations/confluence.svg"
    },
    {
        src: "/integrations/mailchimp.svg"
    },
    {
        src: "/integrations/whatsapp.svg"
    },
    {
        src: "/integrations/bitbucket.svg"
    },
    {
        src: "/integrations/invision.svg"
    },
    {
        src: "/integrations/evernote.svg"
    },
    {
        src: "/integrations/invision.svg"
    },

    {
        src: "/integrations/discord.svg"
    }
]

const iconAnimation = {
    initial: {
        opacity: 0,
        y: 60
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    })
};

import { fadeOnScroll } from "@/motion/motionVariants";
import { fadeInUpSpring } from "@/motion/motionVariants";

const Integrations = () => {
  return (
    <section className="py-24 xl:py-32 min-h-[720px] xl:mt-32">
        <div className="container mx-auto flex flex-col justify-center items-center gap-0 xl:gap-16">
            <motion.div variants={fadeOnScroll(0.2 , 0.6)} initial="hidden" whileInView="visible" className="text-center">
                <h2 className="h2 mb-3">Fluxos de trabalho unificados</h2>
                <p className="lead">Integre-se aos principais aplicativos para criar uma experiência conectada perfeita.</p>
            </motion.div>
            <div className="flex flex-wrap gap-8 w-full max-w-[1024px] mx-auto place-content-center mb-8">
                {icons.map((icon, index) => {
                    return (
                        <motion.div className="relative w-[80px] h-[80px]" key={index} custom={index} variants={iconAnimation} initial="initial" whileInView="animate">
                            <Image src={icon.src} fill alt="" />
                        </motion.div>
                    )
                })}
            </div>
            <motion.div variants={fadeInUpSpring(0.6 , 0.8)} initial="hidden" whileInView="visible">
                <Button btnText="Veja todos" />
            </motion.div>
        </div>
    </section>
  )
}

export default Integrations
