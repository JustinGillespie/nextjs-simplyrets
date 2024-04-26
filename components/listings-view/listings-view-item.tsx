import { format } from "date-fns";
import { currency } from "services";
import { FavoritesContainer } from "containers";
import { PropertyListing } from "./property-listing";
import styles from "./listings-view.module.scss";

type Props = {
  propertyListing: PropertyListing;
};

export default ({ propertyListing }: Props) => {
  const { mlsId, listPrice, listDate, photos, property, address } =
    propertyListing;

  // Format the property listing address object into a short usable string
  const formatAddress = () => {
    const { streetNumberText, streetName, city, state } = address;
    return `${streetNumberText} ${streetName}, ${city}, ${state}`;
  };

  // Format the property details object into a short usable string
  const formatDetails = () => {
    const { bedrooms, bathsFull, bathsHalf, area } = property;
    return `${bedrooms} BR | ${formatBathroomOutput()} Bath | ${area} Sq Ft.`;
  };

  /**
   * This is an interesting use case: Normally, when there is a half-bathroom
   * alongside a full bathroom for a listing, it displays as "1.5 bath", however
   * whenever there is more than one half bathroom, the standard way of display
   * this to the user is "1.5+ bath".
   *
   * That is exactly what this method does. Checks how many full and half
   * bathrooms are contained within the property and output the correct value
   * accordingly (i.e: .0 .5 or .5+ )
   *
   * @return string
   */
  const formatBathroomOutput = () => {
    const { bathsFull, bathsHalf } = property;
    const halfBathOutput = bathsHalf > 1 ? ".5+" : ".5";
    return bathsHalf > 0 ? `${bathsFull}${halfBathOutput}` : bathsFull;
  };

  return (
    <div className={styles.item} role="propertyitem">
      <div className={styles.photo}>
        <FavoritesContainer id={mlsId} />
        <img src={photos[0]} alt={`Photo of ${address.full}`} />
      </div>

      <h2 className={styles.details}>{formatDetails()}</h2>
      <h3 className={styles.price}>{currency.format(listPrice)}</h3>
      <p className={styles.address}>{formatAddress()}</p>
      <p className={styles.listed}>Listed: {format(listDate, "MM/dd/yy")}</p>
    </div>
  );
};
