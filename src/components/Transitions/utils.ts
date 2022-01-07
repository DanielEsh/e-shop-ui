export const TransitionVariants = {
    fade: {
        entering: { 
            opacity: 0,
            transitionProperty: 'opacity'
        },
        entered:  { 
            opacity: 1,
        },
        exiting:  { 
            opacity: 0,
            transitionProperty: 'opacity'
        },
        exited:  { 
            opacity: 1,
        },
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
        exiting:  { transform: 'translateY(-100%)', opacity: 0},
        exited:  { transform: 'translateY(-100%)', opacity: 0},
    },
    pushRight: { 
        entering: { transform: 'translateX(0%)', opacity: 1},
        entered:  { transform: 'translateX(0%)', opacity: 1},
        exiting:  { transform: 'translateX(100%)', opacity: 0},
        exited:  { transform: 'translateX(100%)', opacity: 0},
    },
    pushDown: { 
        entering: { transform: 'translateY(0%)', opacity: 1},
        entered:  { transform: 'translateY(0%)', opacity: 1},
        exiting:  { transform: 'translateY(100%)', opacity: 0},
        exited:  { transform: 'translateY(100%)', opacity: 0},
    },
    pushLeft: { 
        entering: { transform: 'translateX(0%)', opacity: 1},
        entered:  { transform: 'translateX(0%)', opacity: 1},
        exiting:  { transform: 'translateX(-100%)', opacity: 0},
        exited:  { transform: 'translateX(-100%)', opacity: 0},
    },
}
