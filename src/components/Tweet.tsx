import type { TweetData } from '../mock';

const Tweet = (data: TweetData) => {

    const clickFullTweet = () => {
        const tweetUrl = `https://twitter.com/${data.username}/status/${data.tweet_id}`;
        window.open(tweetUrl, '_blank');
    };

    return (
    <div
        className="mb-4 bg-white dark:bg-black border border-gray-300 max-w-xl w-full rounded-lg sm:rounded-lg overflow-hidden shadow-sm">
        <article className="p-4 flex space-x-3">

            <div className="flex-1 min-w-0">

                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-baseline space-x-1 text-sm min-w-0">
                        <span className="font-bold text-gray-900 dark:text-gray-100 truncate hover:underline cursor-pointer" onClick={clickFullTweet}>
                            {data.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 truncate">
                            @{data.username}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">·</span>
                        <span className="text-gray-500 dark:text-gray-400 hover:underline cursor-pointer whitespace-nowrap">
                            {data.created_at}
                        </span>
                    </div>
                    <button aria-label="More options" className="text-gray-500 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-500 dark:hover:bg-blue-900 dark:hover:bg-opacity-50 rounded-full p-1.5 -mr-1.5">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                    </button>
                </div>


                <p className="text-left text-gray-800 dark:text-gray-100 text-sm sm:text-base leading-normal mb-2">
                    {data.text}
                </p>

                <div className="flex justify-between items-center mt-4 text-gray-500 dark:text-gray-400 text-xs sm:text-sm -ml-2">
                    <button aria-label="Reply" className="flex items-center space-x-1 group hover:text-blue-500 dark:hover:text-blue-400 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 dark:hover:bg-opacity-50">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14l-3-3m3 3l-3 3"></path></svg>
                        <span>{data.reply_count}</span>
                    </button>
                    <button aria-label="Retweet" className="flex items-center space-x-1 group hover:text-green-500 dark:hover:text-green-400 p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-900 dark:hover:bg-opacity-50">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2A8.001 8.001 0 0019.418 15m0 0H15"></path></svg>
                        <span>{data.retweet_count}</span>
                    </button>
                    <button aria-label="Like" className="flex items-center space-x-1 group hover:text-red-500 dark:hover:text-red-400 p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900 dark:hover:bg-opacity-50">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        <span>{data.like_count}</span>
                    </button>
                    <button aria-label="View tweet analytics" className="flex items-center space-x-1 group hover:text-blue-500 dark:hover:text-blue-400 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 dark:hover:bg-opacity-50">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        <span>{data.impression_count}</span>
                    </button>
                    <button aria-label="Share or Bookmark" className="flex items-center space-x-1 group hover:text-blue-500 dark:hover:text-blue-400 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 dark:hover:bg-opacity-50" onClick={clickFullTweet}>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                    </button>
                </div>
            </div>
        </article>
    </div>);

}

export default Tweet