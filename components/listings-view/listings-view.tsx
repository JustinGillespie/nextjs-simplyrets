import classNames from "classnames/bind";
import { PropertyListing } from "./property-listing";
import ListingsViewItem from "./listings-view-item";
import styles from "./listings-view.module.scss";
import Favorite from "../favorite/favorite";

const cx = classNames.bind(styles);

type Props = {
  propertyListings: Array<PropertyListing>;
  isLoading: boolean;
};

export default ({ propertyListings, isLoading = false }: Props) => {
  if (propertyListings.length === 0 && isLoading)
    return <div className={cx({ listings: true })}>Loading...</div>;

  if (propertyListings.length === 0 && !isLoading)
    return <div className={cx({ listings: true })}>No results found.</div>;

  return (
    <div className={cx({ listings: true, loading: isLoading })}>
      <ul className={styles.grid}>
        {propertyListings.map((listing: PropertyListing) => {
          return (
            <li key={listing.mlsId}>
              <ListingsViewItem propertyListing={listing} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
