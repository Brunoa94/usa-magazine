import React from "react";

interface Props {
  url?: string;
  urlToImage?: string;
  title?: string;
  description?: string;
  source?: string;
  date?: string;
}

const SearchCard = (props: Props) => {
  const dateString = "2024-04-18T18:53:14Z";
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-full h-[180px] flex items-center border-b-2 border-black pb-1 pt-4 px-4 md:px-0">
      <div className="flex flex-col h-full max-w-[60%]">
        <span className="font-bold overflow-hidden line-clamp-1">
          {props.title}
        </span>
        <span className="overflow-hidden line-clamp-3">
          {props.description}
        </span>
        <div className="flex items-center mt-auto gap-2">
          <span className="mt-auto font-bold">{props.source}</span>
          <span className="font-lg font-bold">|</span>
          <span className="font-lg">{formattedDate}</span>
        </div>
      </div>
      <img className="h-full pb-2 ml-auto" src={props.urlToImage} />
    </div>
  );
};

export default SearchCard;
