import React from "react";
import VerticalBigCard from "../cards/vertical-big-card";
import { Article } from "@/core/models/article";

interface Props {
  articles: Article[];
  title?: string;
  full?: boolean;
}

const DoubleColumn = (props: Props) => {
  return (
    <div className={`flex flex-col w-full`}>
      {props.title && <span className="font-bold mb-4">{props.title}</span>}
      <div className="flex items-start flex-wrap space-y-4 md:space-y-0 md:grid-cols-2 md:flex-nowrap md:gap-4">
        <VerticalBigCard
          author={props.articles[0].author}
          mainText={props.articles[0].title}
          secondaryText={props.articles[0].description}
          url={props.articles[0].url}
          imgUrl={props.articles[0].urlToImage}
        />
        <VerticalBigCard
          mainText={props.articles[1].title}
          secondaryText={props.articles[1].description}
          url={props.articles[1].url}
          imgUrl={props.articles[1].urlToImage}
          author={props.articles[1].author}
        />
      </div>
    </div>
  );
};

export default DoubleColumn;
