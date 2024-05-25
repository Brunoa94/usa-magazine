import React from "react";

interface Props {
  inDarkBg?: boolean;
  mainText: string;
  secondaryText: string;
  url: string;
  imgUrl: string;
  subcategory: string;
  forDetailed?: boolean;
}

const VerticalSmallCard = (props: Props) => {
  return (
    <div
      className={`flex flex-col w-[280px] h-[${
        props.forDetailed ? "300px" : "380px"
      }] ${props.inDarkBg ? "text-white" : ""}`}
    >
      <figure className="w-auto max-h-[200px] overflow-hidden">
        <img className="w-auto" src={props.imgUrl} />
      </figure>
      <a className="mt-4 line-clamp-2 font-bold">
        <h3>{props.mainText}</h3>
      </a>
      <span className="text-base line-clamp-3 mt-2">{props.secondaryText}</span>
      <div
        className={`flex items-center pb-1 border-b-2 border-${
          props.inDarkBg ? "white" : "black"
        } mt-auto`}
      >
        <span className="font-bold">2 days ago</span>
        <span className="mx-2">|</span>
        <span>{props.subcategory}</span>
      </div>
    </div>
  );
};

export default VerticalSmallCard;
