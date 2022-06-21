import createCache from '@emotion/cache';

// This function first will import "createCache " from "@emotion/cache" and then use it to create a cache that has got a key with the value of "css".

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

export default createEmotionCache;