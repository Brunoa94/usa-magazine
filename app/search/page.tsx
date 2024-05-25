"use client";
import SearchCard from "@/components/cards/search-card";
import { Article } from "@/core/models/article";
import Services from "@/core/services";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const [searchArticles, setSearchArticles] = useState<Article[]>([]);

  async function getSearch(search: string) {
    const service = new Services("8b4faeca9c164917b20c26b8d7c68fa9");
    const result = await service.getRandom(search);
    setSearchArticles(result);
    return result;
  }

  useEffect(() => {
    if (search !== null) {
      getSearch(search);
    }
  }, [search]);

  return (
    <div className="flex flex-col w-full md:w-4/6">
      <div className="flex items-center gap-1 text-lg my-3">
        <span>{searchArticles.length} results found for: </span>
        <span className="font-bold">{search}</span>
      </div>
      {searchArticles.map((item) => (
        <SearchCard
          url={item.url}
          urlToImage={item.urlToImage}
          title={item.title}
          description={item.description}
          source={item.source.name}
          date={item.publishedAt}
        />
      ))}
    </div>
  );
};

export default Search;
