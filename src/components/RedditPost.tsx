
export type RedditListingChild = {
  kind: string;
  data: {
    id: string;
    title: string;
    author: string;
    subreddit_name_prefixed: string;
    permalink: string;
    url: string;
    selftext: string;

    ups?: number;
    num_comments?: number;
    created_utc?: number;

    is_gallery?: boolean;
    gallery_data?: { items: Array<{ media_id: string; id: number }> };
    media_metadata?: Record<
      string,
      {
        status: "valid" | string;
        e: "Image" | string;
        s?: { u: string; x: number; y: number };
        p?: Array<{ u: string; x: number; y: number }>;
        id: string;
      }
    >;
  };
};

const decodeRedditUrl = (url: string) => {
  return url.replaceAll("&amp;", "&");
}

const formatTimeAgo = (createdUtc?: number) => {
  if (!createdUtc) return "";
  const diffMs = Date.now() - createdUtc * 1000;
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

const getGalleryImages = (post: RedditListingChild["data"]) => {
  const items = post.gallery_data?.items ?? [];
  const meta = post.media_metadata ?? {};

  return items
    .map((it) => {
      const m = meta[it.media_id];
      if (!m || m.status !== "valid" || m.e !== "Image" || !m.s?.u) return null;

      return {
        mediaId: it.media_id,
        src: decodeRedditUrl(m.s.u),
        width: m.s.x,
        height: m.s.y,
        preview: m.p?.[0]?.u ? decodeRedditUrl(m.p[0].u) : undefined,
      };
    })
    .filter(Boolean) as Array<{
    mediaId: string;
    src: string;
    width: number;
    height: number;
    preview?: string;
  }>;
}

export const RedditPost = ({ post }: { post: RedditListingChild }) => {
  const d = post.data;

  const isGallery =
    !!d.is_gallery && !!d.gallery_data?.items?.length && !!d.media_metadata;

  const images = isGallery ? getGalleryImages(d) : [];

  const postUrl = `https://www.reddit.com${d.permalink}`;

  return (
    <article className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm mb-4">
      <header className="space-y-2">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500">
          <span className="font-semibold text-zinc-900">
            {d.subreddit_name_prefixed}
          </span>
          <span>•</span>
          <span>u/{d.author}</span>
          {d.created_utc ? (
            <>
              <span>•</span>
              <span>{formatTimeAgo(d.created_utc)}</span>
            </>
          ) : null}
        </div>

        <h2 className="text-lg font-semibold leading-snug text-zinc-900">
          {d.title}
        </h2>

        {(d.ups != null || d.num_comments != null) && (
          <div className="flex items-center gap-4 text-sm text-zinc-600">
            {d.ups != null && <span>⬆️ {d.ups.toLocaleString()}</span>}
            {d.num_comments != null && (
              <span>💬 {d.num_comments.toLocaleString()}</span>
            )}
          </div>
        )}
      </header>

      {d.selftext?.trim() ? (
        <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-zinc-800">
          {d.selftext}
        </p>
      ) : null}

      {isGallery && images.length > 0 ? (
        <section className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {images.map((img) => (
            <a
              key={img.mediaId}
              href={postUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50"
              title="Open on Reddit"
            >
              <img
                src={img.src}
                alt={d.title}
                loading="lazy"
                className="h-40 w-full object-cover transition-transform duration-200 group-hover:scale-[1.02] sm:h-48"
              />
            </a>
          ))}
        </section>
      ) : null}

      <footer className="mt-4 flex flex-wrap gap-3 text-sm">
        <a
          href={postUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg px-3 py-1.5 text-zinc-700 hover:bg-zinc-100"
        >
          View comments
        </a>
        <a
          href={d.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg px-3 py-1.5 text-zinc-700 hover:bg-zinc-100"
        >
          Open post
        </a>
      </footer>
    </article>
  );
}