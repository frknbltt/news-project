import React, { Component } from "react";
import CarouselContainer from "../Carousel/CarouselContainer";
import NewsCard from "../NewsCard/NewsCard";
import "../../global.css";
import { Link } from "react-router-dom";
import Senarist from "../Yazarlar/Senarist";
import UserConsumer from "../Context/Context";

class Content extends Component {
  render() {
    return (
      <div className="content-head">
        <div className="content-slider">
          <CarouselContainer />
          <Senarist />
        </div>
        <UserConsumer>
          {(value) => {
            const { data } = value;
            return (
              <div className="content-card">
                {data &&
                  data.length > 0 &&
                  data.map((item) => {
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
      </div>
    );
  }
}
export default Content;
