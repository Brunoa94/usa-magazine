import { Article } from "@/core/models/article";
import React from "react";
import TextCard from "../cards/text-card";

interface Props {
  articles: Article[];
  title: string;
  mBottom?: boolean;
}

const CardsRow = (props: Props) => {
  return (
    <div className={`flex flex-col md:w-full`}>
      {props.title && <span className="mb-4 font-bold">{props.title}</span>}
      <div className="flex flex-col w-full md:grid md:grid-cols-3 lg:flex lg:flex-row lg:items-center lg:flex-wrap lg:justify-start lg:gap-3">
        {props.articles.slice(0, 5).map((item, index) => (
          <TextCard
            author={item.author}
            title={item.title}
            date={item.publishedAt}
            sideCol={false}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsRow;
