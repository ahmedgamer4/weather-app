import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./index.css";
import { WeatherContextProvider } from "./contexts/WeatherContext";
import { CityContextProvider } from "./contexts/CityContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WeatherContextProvider>
        <CityContextProvider>
          <App />
        </CityContextProvider>
      </WeatherContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
