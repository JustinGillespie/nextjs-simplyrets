export type PropertyListing = {
  mlsId: number;
  listPrice: number;
  listDate: Date;
  photos: [string];

  address: {
    city: string;
    full: string;
    state: string;
    streetName: string;
    streetNumberText: string;
  };

  property: {
    area: number;
    bedrooms: number;
    bathsFull: number;
    bathsHalf: number;
  };
};
