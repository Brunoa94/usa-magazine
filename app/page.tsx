import MainNewsCard from "@/components/cards/main-news-card";
import VerticalBigCard from "@/components/cards/vertical-big-card";
import VerticalSmallCard from "@/components/cards/vertical-small-card";
import CardsRow from "@/components/global/cards-row";
import Carousel from "@/components/global/carousel";
import DoubleColumn from "@/components/global/double-column";
import Separator from "@/components/separator";
import { Article } from "@/core/models/article";
import Services from "@/core/services";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

async function getHeadline(country: string, category?: string) {
  const service = new Services("8b4faeca9c164917b20c26b8d7c68fa9");
  const articles = await service.getHeadlines(category, country);

  return articles[0].author !== null ? articles[0] : articles[1];
}

async function getNews(country: string, category?: string) {
  const service = new Services("8b4faeca9c164917b20c26b8d7c68fa9");
  const result = await service.getHeadlines(category, country);

  return result;
}

export default async function Home() {
  const headline: Article = await getHeadline("us");
  const news: Article[] = await getNews("us", "general");
  const sports: Article[] = await getNews("us", "sports");
  const business: Article[] = await getNews("us", "business");
  const innovation: Article[] = await getNews("us", "technology");
  const health: Article[] = await getNews("us", "health");
  const entertainment: Article = await getHeadline("us", "entertainment");

  return (
    <main className="flex flex-col items-center w-full md:space-y-6">
      <MainNewsCard
        imgLeft
        mainText={headline.title}
        secondaryText={headline.content}
        url={headline.url}
        imgUrl={headline.urlToImage}
      />
      <div className="w-full px-4 md:px-0 md:w-5/6">
        <CardsRow articles={sports} title="Sports" />
      </div>
      <Carousel
        carouselTitle="News"
        subcategory="News"
        articles={news}
        inDarkBg
      />
      <div className="w-full px-4 md:px-0 md:w-5/6">
        <DoubleColumn articles={innovation} title="Innovation" />
        <Separator />
        <CardsRow articles={health} title="Health" mBottom />
        <Separator />
      </div>
      <MainNewsCard
        mainText={entertainment.title}
        secondaryText={entertainment.content}
        url={entertainment.url}
        imgUrl={entertainment.urlToImage}
        title="Entertainment"
      />
      <Carousel
        articles={business}
        carouselTitle="Business"
        inDarkBg
        subcategory="business"
      />
    </main>
  );
}
