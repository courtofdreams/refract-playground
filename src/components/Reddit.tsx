import redditMockData from '../reddit.json';
import { RedditPost, type RedditListingChild } from './RedditPost';

const Reddit = () => {
    const data = redditMockData.data.children as Array<RedditListingChild>;


    return <div className="flex flex-col items-center">
        <h2 className="w-full">Reddit Result</h2>
        <p>
            Showing results for "hudson williams"
        </p>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 text-center">
            total {redditMockData.data.children.length} posts
        </p>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            ** total result can be up to 250 posts/request, showing first 25 posts (still waiting to be approved by reddit)
        </p>
        <a className="mb-4 text-sm text-blue-500 hover:underline " href="https://www.reddit.com/dev/api/#listings" target="_blank" rel="noopener noreferrer"> More details read Reddit API Spec</a>
        {data.map((post: RedditListingChild) => (
            <RedditPost key={post.data.id} post={post} />
        ))}
    </div>;
}

export default Reddit;