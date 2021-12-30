// just a bunch of example variants

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 2 }
};

const slidevar = {
  initial: { x: 10000, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 10000, opacity: 0 }
};

const variant = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};
