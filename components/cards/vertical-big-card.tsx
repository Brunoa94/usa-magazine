import React from "react";

interface Props {
  author?: string;
  mainText: string;
  secondaryText: string;
  url: string;
  imgUrl: string;
}

const VerticalBigCard = (props: Props) => {
  return (
    <div className="flex flex-col max-w-full min-w-[350px] h-auto md:pb-0 md:w-full">
      <figure className="mb-3 md:h-[300px] lg:h-[350px]">
        <img className="w-full h-full" src={props.imgUrl} />
      </figure>
      <a className="text-lg mb-1">
        <span className="font-bold line-clamp-1">{props.mainText}</span>
      </a>
      <span className="">{props.secondaryText}</span>
      <span className="font-bold">{props.author}</span>
    </div>
  );
};

export default VerticalBigCard;
