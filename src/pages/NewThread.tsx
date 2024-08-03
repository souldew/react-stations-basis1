import { useState } from "react";
import "./NewThread.css"
import { Link, useNavigate } from "react-router-dom";

export function NewThread() {
  const [title, setTitle] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {"title": title};

    const response = await fetch(
      "https://railway.bulletinboard.techtrain.dev/threads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      navigate("/");
    }

  };
  return (
    <>
      <form className="new-thread-form" onSubmit={handleSubmit}>
        <input 
          className="new-thread-input"
          type="text"
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}
          placeholder="スレッドタイトル">
        </input>
        <div className="new-thread-put-grid">
          <div><Link to="/">Topに戻る</Link></div>
          <button>作成</button>
        </div>
      </form>
    </>
  )
}
