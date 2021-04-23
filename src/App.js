import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicLayout from "./Components/Layout/PublicLayout";
import "./App.css";
import Content from "./Components/Content/Content";
import HaberDetay from "./Components/HaberDetay/HaberDetay";
import Message from "./Components/Yorum/Message";
import NewsCard from "./Components/NewsCard/NewsCard";
import { Link } from "react-router-dom";
import UserConsumer from "./Components/Context/Context";

const PublicRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest} render={() => <PublicLayout>{children}</PublicLayout>} />
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PublicRoute path="/news-project" exact>
            <Content />
          </PublicRoute>
          <PublicRoute path="/news-project" exact>
            <Content />
          </PublicRoute>
          <PublicRoute path="/news-project/sondakika" exact>
            <Content />
          </PublicRoute>
          <PublicRoute path="/news-project/magazin" exact>
            <Content />
          </PublicRoute>
          <PublicRoute path="/news-project/spor" exact>
            <Content />
          </PublicRoute>
          <PublicRoute path="/news-project/ekonomi" exact>
            <Content />
          </PublicRoute>
          <PublicRoute path="/news-project/haberdetay/:id" exact>
            <div className="pl-content-content">
              <HaberDetay />

              <br />
            </div>
            
              <UserConsumer>
                {(value) => {
                  const { data } = value;
                  const haber = data?.slice(15, 19);
                  return (
                    <div className="pl-content-card">
                      {haber &&
                        haber.length > 0 &&
                        haber.map((item) => {
                          
                          return (
                            <>
                              {item.id && (
                                <Link to={`/news-project/haberdetay/${item.id}`}>
                                  <NewsCard
                                    title={item.title}
                                    img={item.urlToImage}
                                    date={item.publishedAt}
                                  />
                                </Link>
                              )}
                            </>
                          );
                        })}
                    </div>
                  );
                }}
              </UserConsumer>
              <br />
            
          </PublicRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
