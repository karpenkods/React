import React, { useEffect, useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardList } from "./shared/CardList";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/reducer";
import thunk from "redux-thunk";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Post } from "./shared/Post";
import { NotFoundPage } from "./shared/NotFoundPage";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function AppComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Header />
            <Content>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/posts" />
                </Route>

                <Route path="/auth">
                  <Redirect to="/posts" />
                </Route>

                <Route exact path="/posts">
                  <CardList />
                </Route>

                <Route path="/posts/:id">
                  <CardList />
                  <Post />
                </Route>

                <Route path="*">
                  <NotFoundPage />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
