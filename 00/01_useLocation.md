From the `useLocation` hook in React Router, you import only the hook itself:

```js
import { useLocation } from "react-router-dom";
```

When you call `useLocation()`, it returns the **location object** representing the current URL, which includes these
properties:

- `pathname`: string - the path part of the URL (e.g., `/planner`)
- `search`: string - the query string including the question mark (e.g., `?startLat=16.9498&startLng=52.3967`)
- `hash`: string - the URL hash fragment (e.g., `#section1`)
- `state`: any - state passed via navigation (e.g., with ``)
- `key`: string - a unique key for the location, useful for remounting components on navigation

You do **not** import these properties individually; they are accessed from the object returned by `useLocation()`.

Example usage:

```js
import { useLocation } from "react-router-dom";

function MyComponent() {
  const location = useLocation();

  console.log(location.pathname); // "/planner"
  console.log(location.search); // "?startLat=16.9498&startLng=52.3967"
  console.log(location.hash); // ""
  console.log(location.state); // any state passed
  console.log(location.key); // unique key string

  // Use these values as needed in your component
}
```

This makes `useLocation` a powerful hook to read and respond to the current URL in React Router apps[1][2][3][4][6][8].

Citations: [1] https://api.reactrouter.com/v7/functions/react_router.useLocation.html [2]
https://reactrouter.com/web/api/Hooks [3] https://how.dev/answers/how-to-use-the-uselocation-hook-in-react [4]
https://reactrouter.com/6.30.0/hooks/use-location [5]
https://www.dhiwise.com/post/guide-to-implementing-the-uselocation-hook-in-your-react-app [6]
https://thekumaraswamy.hashnode.dev/understanding-uselocation-hook-in-react-router-dom [7]
https://tanstack.com/router/latest/docs/framework/react/api/router/useLocationHook [8]
https://stackoverflow.com/questions/72079923/how-to-use-uselocation-hook-of-react-router-dom-v6

---

Answer from Perplexity:
https://www.perplexity.ai/search/how-to-use-webrtc-in-react-nod-sdrrzAQqTNWGPHQTMgSYbQ?utm_source=copy_output

React Router DOM provides several useful hooks to work with routing inside React components:

- **useParams()**: Access URL route parameters (e.g., `/user/:id`) as an object
- **useLocation()**: Get the current location object with `pathname`, `search`, `hash`, etc.
- **useNavigate()**: Programmatically navigate to another route (replace history or push new entry)
- **useMatch()**: Check if the current URL matches a given path pattern and get match details
- **useRoutes()**: Define routes using JavaScript objects instead of JSX `` elements
- **useLoaderData()**: Access data loaded for the current route (React Router data APIs)
- **useActionData()**: Access data returned from a route action (e.g., after form submission)

These hooks let you read route info, navigate, and handle route-based data declaratively inside components without props
drilling or higher-order components[1][3][4][5][6][7].

Example imports:

```js
import { useParams, useLocation, useNavigate, useMatch, useRoutes, useLoaderData, useActionData } from "react-router-dom";
```

They cover most routing needs like reading params, query, navigation, matching routes, and data loading/mutation.

Citations: [1] https://reactrouter.com/web/api/Hooks [2] https://reactrouter.com [3]
https://dev.to/boywithsilverwings/the-hooks-of-react-router-4k4b [4] https://reactrouter.com/6.30.0/hooks/use-routes [5]
https://remix.run/blog/react-router-v6 [6] https://refine.dev/blog/usenavigate-react-router-redirect/ [7]
https://blog.logrocket.com/using-hooks-react-router/ [8] https://reactrouter.com/6.30.0

---

Answer from Perplexity:
https://www.perplexity.ai/search/how-to-use-webrtc-in-react-nod-sdrrzAQqTNWGPHQTMgSYbQ?utm_source=copy_output
