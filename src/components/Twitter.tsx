import Tweet from "./Tweet"

import { mockTwitterData, type TweetData } from "../mock"
import { useState } from "react"

const Twitter = () => {

    const [sortBy, setSortBy] = useState<'relevancy' | 'recency'>("recency");

    const onClickSortBy = () => {
        setSortBy(sortBy === "recency" ? "relevancy" : "recency");
    }

    return (
        <div className="flex flex-col items-center">

            <h2 className="w-full">Twitter Result</h2>
            <p>
                Showing results for "{mockTwitterData.query}"
            </p>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                total {mockTwitterData.tweets.length} tweets, currently sort by {sortBy}
            </p>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                **Max result can be up to 100 tweets/request, now retrieving 10 cause I'm broke af
            </p>
            <a className="mb-4 text-sm text-blue-500 hover:underline" href="https://docs.x.com/x-api/posts/search-recent-posts" target="_blank" rel="noopener noreferrer"> More details read twitter API Spec</a>
            <button className="mb-5 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClickSortBy}>
                Switch to sort by {sortBy === "recency" ? "relevancy" : "recency"} (not implemented)
            </button>
            {mockTwitterData.tweets.map((tweet: TweetData) => (
                <Tweet key={tweet.tweet_id} {...tweet} />
            ))}
            <button className="mb-5 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClickSortBy}>
                Load more tweets (not implemented)
            </button>
        </div>
    )
}

export default Twitter