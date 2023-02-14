import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Card from "./Card/Card";
import "./style/index.css";

function NewsPortal() {
    const [query, setQuery] = useState("");
    const [news, setNews] = useState(null);

    useEffect(() => {
        if (!query) {
            const fetchData = fetch(
                "https://newsapi.org/v2/top-headlines?country=id&pageSize=20&apiKey=a63cac178c6b4ee094b6d5988a9f0e51"
            );

            fetchData
                .then(response => response.json())
                .then(data => setNews(data))
                .catch(error => console.error(error));
        } else {
            const fetchSearchedData = fetch(
                `https://newsapi.org/v2/everything?q=${query}&pageSize=20&apiKey=a63cac178c6b4ee094b6d5988a9f0e51`
            );

            fetchSearchedData
                .then(response => response.json())
                .then(data => setNews(data))
                .catch(error => console.error(error));
        }
    }, [query]);

    const handleSearchQuery = searchQuery => {
        setQuery(searchQuery);
        console.log(searchQuery);
    };

    return (
        <div>
            <h1 className="header">News Portal</h1>
            <SearchBar onQueryChange={handleSearchQuery} />
            <main>
                {news
                    ? news.articles.map((article, index) => (
                          <Card
                              key={index}
                              thumbnail={article.urlToImage}
                              title={article.title}
                              date={article.publishedAt}
                              description={article.description}
                              url={article.url}
                          />
                      ))
                    : null}
            </main>
        </div>
    );
}

export default NewsPortal;
