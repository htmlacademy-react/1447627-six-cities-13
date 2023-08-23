import {OfferPreviewsData, OfferFullData, MapMarkersData} from './types';

const getRandomInteger = (from: number, to: number): number => {
  const min = Math.min(from, to);
  const max = Math.max(from, to);

  return Math.floor(min + Math.random() * (max - min + 1));
};

const createUniqueRandomIntegerGenerator = (from: number, to: number) => {
  const min = Math.min(from, to);
  const max = Math.max(from, to);
  const valuesMaxCount = max - min + 1;

  const previousValues = new Set();

  return () => {
    if (previousValues.size < valuesMaxCount) {
      let value = getRandomInteger(from, to);

      while(previousValues.has(value)) {
        value = getRandomInteger(from, to);
      }

      previousValues.add(value);

      return value;
    } else {
      throw 'The unique values in the passed range have been exhausted.';
    }
  };
};

const getRandomArrayItem = <T>(array: T[]): T => array[getRandomInteger(0, array.length - 1)];

const getRandomUniqueArrayItems = <T>(array: T[], count: number): T[] => {
  const getUniqueRandomArrayIndex = createUniqueRandomIntegerGenerator(0, array.length - 1);
  return Array.from({length: count}, () => array[getUniqueRandomArrayIndex()]);
};

const getOfferMarkersData = (offers: OfferPreviewsData | OfferFullData[]): MapMarkersData =>
  offers.map((offer) => ({
    id: offer.id,
    coordinates: {
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    },
  }));

export {getRandomUniqueArrayItems, getOfferMarkersData, getRandomArrayItem};
