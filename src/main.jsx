
import React from "react";
import ReactDOM from "react-dom/client";

import {
  HashRouter,
} from "react-router-dom";

import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { ProfileProvider } from "./context/ProfileContext";
import { MyListProvider } from "./context/MyListContext";
import { PlayerProvider } from "./context/PlayerContext";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <ProfileProvider>
          <MyListProvider>
            <PlayerProvider>
              <App />
            </PlayerProvider>
          </MyListProvider>
        </ProfileProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
