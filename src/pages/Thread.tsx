import { useEffect, useState } from "react";
import "./Thread.css"
import { useLocation } from "react-router-dom";

type Thread = {
  threadId: string;
  posts: {
    id: string;
    post: string;
  }[];
};

export function Thread() {
  const [thread, setThread] = useState<Thread | undefined>(undefined);
  const [textarea, setTextarea] = useState<string>("");
  const location = useLocation();
  const threadTitle: string = location.state.title;
  const threadId = location.state.threadId;

  const fetchThread = async () => {
    // 変数一つに
    try {
      const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`);
      setThread(await response.json());
    } catch(e){
      alert("エラーです");
      console.log(e);
    }

  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { post: textarea };
    await fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    setTextarea("");
    fetchThread();
  }

  useEffect(() => {
    fetchThread();
  }, []);

  return (
    <>
      <h1>{threadTitle}</h1>
      <div className="thread-main">
        <div className="post-flex">
          {thread?.posts && [...thread?.posts]?.reverse().map((post) => {
            return (
              <div className="card" key={post.id}>{post.post}</div>
            );
          })}
        </div>
        <form className="new-post-flex" onSubmit={handleSubmit}>
          <textarea 
            placeholder="投稿しよう！"
            onChange={(e) => {setTextarea(e.target.value)}}
            value={textarea}
          ></textarea>
          <button>投稿</button>
        </form>
      </div>
    </>
  )
}
