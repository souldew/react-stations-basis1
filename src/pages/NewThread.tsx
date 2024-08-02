import { useState } from "react";
import "./NewThread.css"
import { useNavigate } from "react-router-dom";

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
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}
          placeholder="新規スレッド名">
        </input>
        <button className="new-thread-btn">投稿</button>
      </form>
    </>
  )
}
