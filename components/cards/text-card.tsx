import React from "react";

interface Props {
  author?: string;
  title?: string;
  date?: string;
  url?: string;
  sideCol?: boolean;
  withContent?: boolean;
  content?: string;
}

const TextCard = (props: Props) => {
  function formatTimeAgo(dateStr: string) {
    const now = new Date();
    const date = new Date(dateStr);
    const diff = now.getTime() - date.getTime();

    if (diff < 3600000) {
      return `${Math.floor(diff / 60000)}m ago`;
    } else if (diff < 86400000) {
      return `${Math.floor(diff / 3600000)}h ago`;
    } else {
      return `${Math.floor(diff / 86400000)} day ago`;
    }
  }

  return (
    <div
      className={`flex flex-col w-full h-[90px] md:mb-2 ${
        props.withContent ? "md:h-fit" : "md:h-[110px]"
      } ${props.sideCol ? "md:w-[250px]" : "md:w-[200px]"}`}
    >
      <a href="#">
        <span
          className={`font-bold ${
            props.sideCol ? "line-clamp-2" : "line-clamp-3"
          }`}
        >
          {props.title}
        </span>
      </a>
      {props.withContent && (
        <span className="line-clamp-3">{props.content}</span>
      )}
      <div className="flex items-center mt-auto">
        {props.date && (
          <span className="font-gray-700 max-w-[80px] text-ellipsis overflow-hidden">
            {formatTimeAgo(props.date)}
          </span>
        )}
        <span className="mx-4">|</span>
        <span className="max-w-[80px] text-ellipsis overflow-hidden text-nowrap">
          {props.author}
        </span>
      </div>
    </div>
  );
};

export default TextCard;
