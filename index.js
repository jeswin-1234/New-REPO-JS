import { registerRootComponent } from "expo";

import App from "./App";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (error.request) {
        // handle network error here
      }
    },
  }),
});

const Main = () => {

  return (
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
  );
};

registerRootComponent(Main);
