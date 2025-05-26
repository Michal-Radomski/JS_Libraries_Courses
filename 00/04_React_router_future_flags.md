Here is a list of known React Router "future" flags with explanations, based on the latest available information from
official docs, changelogs, and community sources:

| Future Flag                        | Explanation                                                                                                                                                            |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **v7_startTransition**             | Enables React 18's `startTransition` API for route transitions, making navigation updates non-blocking and smoother by deferring rendering until suspense is resolved. |
| **v7_relativeSplatPath**           | Changes relative path resolution inside splat (`*`) routes to be relative to the splat route's path instead of the root, improving nested route linking.               |
| **v7_fetcherPersist**              | Retains fetcher state during navigation, preventing fetcher data from resetting unnecessarily when navigating between routes.                                          |
| **v7_normalizeFormMethod**         | Normalizes form submission methods (e.g., converts lowercase `"post"` or `"get"` to uppercase) to align with v7 conventions.                                           |
| **v7_partialHydration**            | Enables partial hydration support for server-side rendering, improving performance by hydrating only parts of the UI as needed.                                        |
| **v7_skipActionErrorRevalidation** | Prevents automatic revalidation of loaders when an action returns an error status (4xx/5xx), avoiding unnecessary data refetches after failed form submissions.        |

### Additional notes:

- These flags are designed to allow gradual adoption of React Router v7 behaviors while still on v6, easing migration.
- Most flags can be enabled independently, but some require code adjustments (e.g., splitting multi-segment splat routes when
  using `v7_relativeSplatPath`).
- React Router v7 itself currently has no new future flags as it is the target version these flags prepare for.
- The flags are passed via the `future` prop in router creation or router provider components, for example:

```js
const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});
```

or

```jsx

```

### Summary of purpose:

These future flags enable improved routing behaviors, better integration with React 18 features, enhanced data fetching and
form handling, and smoother migration to React Router v7.

---

This list is based on React Router documentation and community discussions as of late 2024 and early 2025[2][4][5][6][7][9].

Citations: [1] https://reactrouter.com/changelog [2] https://reactrouter.com/upgrading/future [3]
https://github.com/remix-run/react-router/issues/12245 [4]
https://stackoverflow.com/questions/79201371/react-router-future-flag-warning-in-remix-vite-app [5]
https://reactrouter.com/6.30.0/upgrading/future [6] https://reactrouter.com/6.29.0/upgrading/future [7]
https://reactrouter.com/6.28.0/upgrading/future [8]
https://dev.to/utkvishwas/react-router-v7-a-comprehensive-guide-migration-from-v6-7d1 [9]
https://codemod.com/registry/react-router-7-migration-recipe [10] https://www.youtube.com/watch?v=A96Xkc9GiGY

---

Answer from Perplexity:
https://www.perplexity.ai/search/what-means-those-settings-from-85xFBtDxSvqJoCnZZ5U_.Q?utm_source=copy_output
