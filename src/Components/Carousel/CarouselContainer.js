import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../../global.css"
import UserConsumer from "../Context/Context"
import {Link } from "react-router-dom"


const CarouselContainer = () => {
    return (
      <UserConsumer>
          {(value) => {
            const { data } = value;
            return (
              <div>
                
                 <Carousel className="carousel" >  
                {data &&
                  data.length > 0 &&
                  data.map((item) => {
                    return (
                           
                      <Carousel.Item interval={1500}>
                         <Link to={`/news-project/haberdetay/${item.id}`}>
                        <img
                          src={item.urlToImage}
                          alt="First slide"
                          /></Link>
                          <Carousel.Caption>
                          <p>{item.title}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    );
                  })}
                   </Carousel>
              </div>
            );
          }}
        </UserConsumer>
       
    )
}
export default CarouselContainer;