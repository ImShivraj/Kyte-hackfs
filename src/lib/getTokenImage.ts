import { STATIC_IMAGES_URL } from '@constants/index';

/**
 *
 * @param symbol - Token symbol
 * @returns token image url
 */
const getTokenImage = (symbol: string): string => `${STATIC_IMAGES_URL}/tokens/${symbol?.toLowerCase()}.svg`;

export default getTokenImage;
