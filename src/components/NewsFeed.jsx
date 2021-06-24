import NewsCard from "./NewsCard"
// import useFetchStatusUpdates from "../hooks/fetchStatusUpdates"
import useFetch from "../hooks/useFetch"

export default function NewsFeed() {
  // const [newsList] = useFetchStatusUpdates()
  const [newsList, setNewsList] = useFetch(STATUS_UPDATES, status_updates)

  return (
    <ul className="newsfeed">
      {newsList.map(newsItem => (
        <li>
          <NewsCard newsItem={newsItem} />
        </li>
      ))}
    </ul>
  )
}
