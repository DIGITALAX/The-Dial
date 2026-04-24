import Link from "next/link";
import { FunctionComponent } from "react";
import useI18n from "../../../hooks/useI18n";
import { PostSummary } from "../../../types/post.types";

type PostsProps = {
  posts: PostSummary[];
};

const Posts: FunctionComponent<PostsProps> = ({ posts }): JSX.Element => {
  const { messages } = useI18n();

  return (
    <div className="relative w-full h-fit bg-offBlack p-4 md:p-6">
      <div
        id="border"
        className="relative w-full h-fit rounded-lg p-0.5 grid grid-flow-row auto-rows-[auto auto]"
      >
        <div className="relative w-full h-full row-start-1 rounded-lg bg-midWhite p-4 md:p-6">
          <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-fit gap-3">
            <div className="relative w-fit h-fit font-oda text-deep text-2xl md:text-3xl">
              {messages.posts.sectionTitle}
            </div>
            <div className="relative w-fit h-fit justify-self-end self-center font-lib text-offBlack text-[2.7vw] sm:text-sm">
              {messages.posts.sectionMeta}
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {posts.length === 0 ? (
              <div className="font-fira text-sm text-offBlack">
                {messages.posts.empty}
              </div>
            ) : (
              posts.map((post, index) => (
                <Link key={post.slug} href={`/posts/${post.slug}`}>
                  <div
                    id="border"
                    className="relative w-full h-fit rounded-lg p-0.5 hover:scale-[0.998] active:scale-[0.995]"
                  >
                    <div className="relative w-full h-full rounded-lg bg-flight px-4 py-3 grid grid-flow-col auto-cols-[auto auto] gap-3">
                      <div className="relative w-fit h-fit font-lib text-xs md:text-sm text-offBlack">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="relative w-full h-fit grid grid-flow-row auto-rows-[auto auto]">
                        <div className="relative w-full h-fit row-start-1 font-coc text-offBlack text-sm text-left md:text-base leading-relaxed">
                          {post.title}
                        </div>
                        <div className="relative w-fit h-fit row-start-2 mt-2 font-fira text-xs text-deep">
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
        <div id="border" className="relative w-full h-2 row-start-2"></div>
      </div>
    </div>
  );
};

export default Posts;
