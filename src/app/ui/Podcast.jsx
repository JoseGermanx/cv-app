"use client";

import { useEffect, useState } from "react";
import Parser from "rss-parser";

const Podcast = () => {
  const [podcast, setPodcast] = useState([]);

  useEffect(() => {
    const CORS_PROXY = "https://corsproxy.io/?";
    const parser = new Parser();
    (async () => {
      const feed = await parser.parseURL(
        CORS_PROXY + "https://api.substack.com/feed/podcast/1665964.rss"
      );
      console.log(feed);
      setPodcast(feed.items);
    })();
  }, []);
  return (
    <div className="mt-5 mx-auto max-w-xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center mb-5">
        Podcast
      </h2>

      {podcast &&
        podcast.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.title}</h3>
              <audio controls>
                <source src={item.enclosure.url} type={item.enclosure.type} />
              </audio>
              <hr />
            </div>
          );
        })}
    </div>
  );
};
export default Podcast;
