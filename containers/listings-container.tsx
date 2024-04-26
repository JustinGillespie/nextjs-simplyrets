import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { Flex, MapView, ListingsView, Button } from "components";
import { api } from "services";

/**
 * @name listings-container.tsx
 * @author Justin Gillespie <justin@justingillespie.com>
 *
 *
 * This container is responsible for initializing the google maps component
 * and tracking state. It also fetches properties from the API when the map
 * state changes.
 *
 */

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showMapView, setShowMapView] = useState(true);

  /**
   * The current latitude and longitude stored as an array. The defaults
   * i'm using are just some I found in the documentation, but I would
   * recommend using the geolocation API.
   *
   * TODO: Geolocation API
   */
  const [center, setCenter] = useState({
    lat: 29.723837146389066,
    lng: -95.69778442382812,
  });

  // TODO: Needs a type
  const [map, setMap] = useState<any>(null);

  /**
   * Normally i would like to shape the data from the response using
   * a custom typescript type, but for the sake of the timeblock we
   * will let the array be inferred
   */
  const [properties, setProperties] = useState([]);

  /**
   * loadProperties
   * Triggers an API call to fetch properties using a query string
   *
   * @param query query string to append to the URL
   * @param limit number of items returned
   */
  const loadProperties = (query: string = "q=Houston", limit = 4) => {
    setIsLoading(true);

    api
      .get(`/properties?${query}&limit=${limit}`, {})
      .then((res: AxiosResponse) => {
        setProperties(res.data);
        setIsLoading(false);
      });
  };

  /**
   * handleMapChange
   * Triggered when the MapView is dragged or zoomed
   */
  const handleMapChange = () => {
    if (map) {
      setCenter({
        lat: map.center.lat(),
        lng: map.center.lng(),
      });

      loadProperties(generateQueryStringFromBounds(map));
    }
  };

  /**
   * generateQueryStringFromBounds
   *
   * Get the latitude and longitude for each of the corners of the map and formats
   * them into a query string that simplyrets will play nice with.
   *
   * @param {any} map - Google maps instance (TODO: type saftey)
   */

  const generateQueryStringFromBounds = (map: any) => {
    const bounds = map.getBounds();

    const NECorner = bounds.getNorthEast();
    const SWCorner = bounds.getSouthWest();
    const NWCorner = new google.maps.LatLng(NECorner.lat(), SWCorner.lng());
    const SECorner = new google.maps.LatLng(SWCorner.lat(), NECorner.lng());

    const points1 = [NECorner.lat(), NECorner.lng()].join(",");
    const points2 = [NWCorner.lat(), NWCorner.lng()].join(",");
    const points3 = [SWCorner.lat(), SWCorner.lng()].join(",");
    const points4 = [SECorner.lat(), SECorner.lng()].join(",");

    return `points=${points1}&points=${points2}&points=${points3}&points=${points4}&limit=4`;
  };

  /**
   * handleMapLoad
   *
   * @param mapObj a google maps instance
   * @returns void
   */
  const handleMapLoad = (mapObj: any) => setMap(mapObj);

  // Load the initial properties when the page loads
  useEffect(() => loadProperties(), []);

  return (
    <div role="propertylistings" data-testid="listings">
      <Flex>
        <Flex.Column
          fillScreen
          hiddenOnMobile={!showMapView}
          role="propertylistingsmap"
        >
          <MapView
            center={center}
            onChange={handleMapChange}
            onLoad={handleMapLoad}
          />
        </Flex.Column>
        <Flex.Column
          fillScreen
          hiddenOnMobile={showMapView}
          role="propertyresultslist"
        >
          <ListingsView propertyListings={properties} isLoading={isLoading} />
        </Flex.Column>
      </Flex>

      <Button onClick={() => setShowMapView(!showMapView)}>
        {showMapView ? "List View" : "Map View"}
      </Button>
    </div>
  );
};
