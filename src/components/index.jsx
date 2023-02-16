import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Card from "./Card/Card";
import "./style/index.css";

function NewsPortal() {
    const [query, setQuery] = useState(false);
    const [news, setNews] = useState({});

    useEffect(() => {
        console.log("efect");
        if (!query) {
            const jsonData = require("../asset/users.json");
            setNews(jsonData);
        } else {
            const filteredArticle = news.articles.filter(article => {
                return (
                    article.title.includes(query) ||
                    article.description.includes(query)
                );
            });
            setNews({ articles: filteredArticle });
        }
    }, [query]);

    const cardRender = () => {
        if (news && news.articles && news.articles.length > 0) {
            console.log(news);
            return news.articles.map((article, index) => (
                <Card
                    key={index}
                    thumbnail={article.urlToImage}
                    title={article.title}
                    date={article.publishedAt}
                    description={article.description}
                    url={article.url}
                />
            ));
        } else {
            return null;
        }
    };

    const handleSearchQuery = searchQuery => {
        setQuery(searchQuery);
        console.log(searchQuery);
    };

    return (
        <div>
            {console.log("render")}
            <h1 className="header">News Portal</h1>
            <SearchBar onQueryChange={handleSearchQuery} />
            <main>{cardRender()}</main>
        </div>
    );
}

export default NewsPortal;
