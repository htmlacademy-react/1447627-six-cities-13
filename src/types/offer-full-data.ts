import OfferPreviewData from './offer-preview-data';

type OfferFullData = Omit<OfferPreviewData, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
};

export default OfferFullData;
