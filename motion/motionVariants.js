export const fadeOnScroll = (delay, duration) => ({
    hidden: {opacity: 0}, //estado inicial
    visible: {
        opacity: 1, //estado com total visibilidade
        transition: {
            delay: delay, //pequeno delay antes da animação começar
            duration: duration, // duração do efeito fade-in
            ease: [0.42, 0, 0.50, 1],
             //transição suave
        }
    }
});

export const fadeInUpSpring = (delay, duration) => ({
    hidden: {opacity: 0, y: 60, scale: 0.8}, 
    visible: {
        opacity: 1, 
        scale: 1,
        transition: {
            delay: delay, 
            duration: duration, 
            ease: [0.6, -0.85, 0.01, 0.99],
            type: "spring",
            stiffness: 100,
            
        }
    }
});