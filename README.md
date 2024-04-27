# README

## Thought process: First steps

- Investigate SimplyRETS API with a REST client to learn of its capabilities.
- Investigate Google Maps API, but more specifically `@react-google-maps/api`
- Find common patterns in the Figma mockup.

## Code and Design Decisions

### Code

I prefer the separation of "smart" and "dumb" components (container/component pattern). `/components` will contain UI components and helpers that have little to no internal state. `/containers` is similar to a "controller" or "view controller" in MVC and MVVC respectively. Renders the containers on the page, which will manage state and pass it down to children.

#### Structure

```ts
./containers/ // react components that contain business logic
./components/ // user interface and dumb components
./pages/      // components that are rendered by routing
./services/   // non-react business logic
./__tests__/  // high level page tests (integration/snapshot/e2e)
```

##### Components conventions

`src/components/{component_name}/`

- `{component_name}.tsx`
- `{component_name}.test.tsx`
- `{component_name}.module.scss`

##### Container conventions

`src/containers/{container_name}/`

- `{container_name}.tsx`
- `{container_name}.test.tsx`

### Styling

Normally I like to use `emotion.js` and keep my styles contained within the rendered component. However, because of the time constraint and emotion not playing nicely with Next.js without some tooling setup, I've opted to use Sass modules. They are supported out of the box, extremely performant (moreso than emotion.js), and scale rather nicely.

### Additional libraries

- [axios](https://www.npmjs.com/package/axios) network calls
- [classnames.js](https://www.npmjs.com/package/classnames) for easy conditional switching of css modules.
- [date-fns.js](https://www.npmjs.com/package/date-fns) for easy date formatting.

## Getting Started

Create a `.env.local` file or copy the example using the following command:

```sh
cp .env.example .env.local
```

and add the example Google API key

```js
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = AIzaSyCqxqAPlybcdfWGj5SX5kIDG7CmLtPiR58;
```

With Node 18.17.0 installed, run the following commands:

```sh
yarn && yarn dev
```

Navigate to `http://localhost:3000/`.

## Known issues and improvements

- Was having trouble finding the correct interface/type for the google maps library suggested. Had to go ahead and just use "any" but that should be refactored with the map instance type.
- Map onChange function could use a debouncer function
- Timeout error should be caught and handled from axios

## Future Enhancements

Just a place for me to jot down some "enhancements" as I could in a normal project.

- **Pagination** Currently we are displaying only 4 results.
- **Skeleton Loading Screen** Populate right side with skeleton while loading
- **Geolocation API** On listings page load set map to current location using geolocation api.
