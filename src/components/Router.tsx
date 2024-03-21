/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import {
  FunctionComponent,
  Suspense,
  createContext,
  createElement,
  useContext,
  useMemo,
  useState,
} from "react";
import { ErrorBoundary } from "react-error-boundary";

const RouterContext = createContext<{
  push(route: string, params?: any): void;
  pop(): void;
} | null>(null);

export const useRouter = () => {
  const router = useContext(RouterContext);
  if (!router) throw new Error("No router found");
  return router;
};

export const Router = <
  TRoutes extends Record<string, FunctionComponent<any>>
>(props: {
  routes: TRoutes;
  default?: keyof TRoutes;
  hide?: (keyof TRoutes)[];
}) => {
  type Route = { name: keyof TRoutes; params?: any };
  const routeNames = Object.keys(props.routes);
  const [routes, setRoutes] = useState<Route[]>(() => [
    {
      name: props.default ?? routeNames[0],
    },
  ]);

  const router = useMemo(() => {
    return {
      push(name: string, params?: any) {
        setRoutes((prev) => [...prev, { name, params }]);
      },
      pop() {
        setRoutes((prev) => prev.slice(0, prev.length - 1));
      },
    };
  }, [setRoutes]);

  const last = routes[routes.length - 1];

  return (
    <div style={{ width: "100%" }}>
      <p>
        {routes.length > 1 && <button onClick={router.pop}>Back</button>}{" "}
        {routeNames
          .filter((x) => !props.hide?.includes(x))
          .map((routeName) => (
            <button key={routeName} onClick={() => router.push(routeName)}>
              {routeName}{" "}
            </button>
          ))}
      </p>
      <hr />
      <RouterContext.Provider value={router}>
        <ErrorBoundary
          fallbackRender={(props) => (
            <div>
              Something went wrong {String(props.error)}
              <button onClick={props.resetErrorBoundary}>Retry</button>
            </div>
          )}
        >
          <Suspense fallback={<div>Loading...</div>}>
            {props.routes[routes[0]?.name] ? (
              createElement(props.routes[last.name], {
                ...last.params,
              })
            ) : (
              <div>No component `{String(last.name)}` found</div>
            )}
          </Suspense>
        </ErrorBoundary>
      </RouterContext.Provider>
    </div>
  );
};
