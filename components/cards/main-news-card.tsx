import React from "react";

interface Props {
  imgLeft?: boolean;
  mainText: string;
  secondaryText: string;
  url: string;
  imgUrl: string;
  title?: string;
  fullDesktop?: boolean;
}

const MainNewsCard = (props: Props) => {
  return (
    <div
      className={`w-full flex flex-col px-4 lg:px-0 ${
        props.fullDesktop ? "lg:w-full" : "lg:w-5/6"
      }`}
    >
      {props.title && <span className="font-bold mb-3">{props.title}</span>}
      <div
        className={`w-full flex flex-col gap-4 lg:max-h-[450px] ${
          props.imgLeft ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <figure className="lg:w-3/5 shrink-0 lg:h-full">
          <img
            className="w-full max-h-[400px] lg:max-w-[720px] lg:h-full"
            src={props.imgUrl}
          />
        </figure>
        <div className="flex flex-col mt-3 lg:h-full">
          <h2 className="text-2xl">{props.mainText}</h2>
          <span className="text-base line-clamp-3 mt-2">
            {props.secondaryText}
          </span>
          <a
            href={props.url}
            className="btn btn-outline w-[100px] h-7 rounded-none mt-4 lg:mt-11"
          >
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainNewsCard;
