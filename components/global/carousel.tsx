"use client";

import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import VerticalSmallCard from "../cards/vertical-small-card";
import { Article } from "@/core/models/article";

interface Props {
  inDarkBg?: boolean;
  carouselTitle?: string;
  articles: Article[];
  subcategory: string;
}

const Carousel = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  function scrollCarousel(right?: boolean) {
    if (ref.current) {
      ref.current.scrollTo({
        left: right
          ? ref.current.scrollLeft + 180
          : ref.current.scrollLeft - 180,
        behavior: "smooth",
      });
    }
  }

  return (
    <div
      className={`w-full ${props.inDarkBg ? "py-4" : ""} flex justify-center ${
        props.inDarkBg ? "bg-black pb-8" : ""
      }`}
    >
      <div
        className={`flex flex-col w-full ${
          props.inDarkBg ? "lg:w-5/6" : "lg:w-full"
        } `}
      >
        <div className="flex items-center mb-3 px-4 lg:px-0">
          {props.carouselTitle && (
            <span
              className={`text-lg px-4 md:px-0 font-bold ${
                props.inDarkBg ? "text-white" : ""
              }`}
            >
              {props.carouselTitle}
            </span>
          )}
          <div className="flex items-center space-x-2 ml-auto">
            <FaAngleLeft
              className={`text-lg cursor-pointer ${
                props.inDarkBg ? "text-white" : ""
              }`}
              onClick={() => scrollCarousel(false)}
            />
            <FaAngleRight
              className={`text-lg cursor-pointer ${
                props.inDarkBg ? "text-white" : ""
              }`}
              onClick={() => scrollCarousel(true)}
            />
          </div>
        </div>
        <div
          className="carousel carousel-center space-x-4 overflow-y-hidden"
          ref={ref}
        >
          {props.articles
            .filter((item) => {
              return item.urlToImage !== undefined && item.urlToImage !== null;
            })
            .map((item, index) => (
              <div
                className="carousel-item ml-4 first:ml-4 md:ml-0 lg:first:ml-0"
                key={`carousel-item-${index}`}
              >
                <VerticalSmallCard
                  imgUrl={item.urlToImage}
                  mainText={item.title}
                  secondaryText={item.description}
                  url={item.url}
                  subcategory={props.subcategory}
                  inDarkBg={props.inDarkBg}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
