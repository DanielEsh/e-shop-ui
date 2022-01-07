export const TransitionVariants = {
    fade: {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    },
    scale: { 
        entering: { transform: 'scale(1)'},
        entered:  { transform: 'scale(1)' },
        exiting:  { transform: 'scale(0)'},
        exited:  { transform: 'scale(0)' },
    },
    pushUp: { 
        entering: { transform: 'translateY(0%)', opacity: 1},
        entered:  { transform: 'translateY(0%)', opacity: 1},
        exiting:  { transform: 'translateY(100%)', opacity: 0},
        exited:  { transform: 'translateY(100%)', opacity: 0},
    },
}
