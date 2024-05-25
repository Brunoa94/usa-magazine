"use client";

import MainNewsCard from "@/components/cards/main-news-card";
import TextCard from "@/components/cards/text-card";
import VerticalBigCard from "@/components/cards/vertical-big-card";
import VerticalSmallCard from "@/components/cards/vertical-small-card";
import VerticalTextCard from "@/components/cards/vertical-text-card";
import Carousel from "@/components/global/carousel";
import DoubleColumn from "@/components/global/double-column";
import Separator from "@/components/separator";
import { Article } from "@/core/models/article";
import Services from "@/core/services";
import { RootState } from "@/redux/store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Topic() {
  const router = usePathname();
  const [articles, setArticles] = useState<Article[]>([]);
  const country = useSelector((navbar: RootState) => navbar.navbar.country);

  async function getNews(country: string, category?: string) {
    const service = new Services("8b4faeca9c164917b20c26b8d7c68fa9");
    await service.getHeadlines(category, country).then((result) => {
      setArticles(result);
    });
  }

  useEffect(() => {
    getNews(country, router.replace("/", ""));
  }, [country]);

  return (
    <>
      {articles.length > 0 && (
        <div className="w-full flex flex-col gap-4 lg:w-5/6">
          <div className="flex flex-col w-full gap-4 lg:flex-row">
            <div className="hidden flex-col gap-4 w-full lg:flex lg:w-fit">
              {articles.slice(0, 2).map((item) => (
                <VerticalSmallCard
                  imgUrl={item.urlToImage}
                  mainText={item.title}
                  secondaryText={item.description}
                  url={item.url}
                  subcategory={router.replace("/", "")}
                  forDetailed
                  key={`vertical-card-${item.title}`}
                />
              ))}
            </div>
            <div className="w-full px-4 md:px-4">
              <VerticalBigCard
                author={articles[4].author}
                mainText={articles[4].title}
                secondaryText={articles[4].description}
                url={articles[4].url}
                imgUrl={articles[4].urlToImage}
              />
            </div>
            <div className="flex flex-col space-y-4 w-full px-4 md:space-y-0 md:flex-row md:flex-wrap md:gap-4 lg:w-fit lg:max-w-[250px]">
              {articles.slice(5, 9).map((item) => (
                <TextCard
                  title={item.title}
                  url={item.url}
                  date={item.publishedAt}
                  sideCol
                  content={item.content}
                  withContent
                  key={`text-card-${item.title}`}
                />
              ))}
            </div>
          </div>
          <Separator noLine />
          <DoubleColumn articles={articles.slice(10, 12)} full />
          <div className="w-full">
            <Carousel subcategory="News" articles={articles.slice(10, 16)} />
          </div>
          <Separator noLine />
          <div className="w-full px-1">
            <MainNewsCard
              mainText={articles[13].title}
              secondaryText={articles[13].description}
              url={articles[13].url}
              imgUrl={articles[13].urlToImage}
              fullDesktop
            />
          </div>
          <Separator />
          <div className="flex flex-col space-y-4 w-full px-4 md:px-4 md:space-y-0 md:flex-row md:flex-wrap md:gap-4 lg:w-fit">
            {articles.slice(14, 19).map((item) => (
              <TextCard
                title={item.title}
                url={item.url}
                date={item.publishedAt}
                content={item.content}
                withContent
                key={`text-card-${item.title}`}
              />
            ))}
          </div>
          <Separator />
          <div className="w-full px-1">
            <MainNewsCard
              mainText={articles[20].title}
              secondaryText={articles[20].description}
              url={articles[20].url}
              imgUrl={articles[20].urlToImage}
              imgLeft
              fullDesktop
            />
          </div>
        </div>
      )}
    </>
  );
}
