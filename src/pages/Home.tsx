import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"


// 推しについて語るスレ

type Item = {
  id: string;
  title: string;
};


export function Home() {
  const [bbsThread, setBbsThread] = useState<undefined | Item[]>(undefined);

  useEffect(() => {
    const fetchBbsThread = async () => {
      const response = await fetch("https://railway.bulletinboard.techtrain.dev/threads");
      setBbsThread(await response.json());
    };
    fetchBbsThread();
  }, []);
  return (
    <>
      <main>
        <h1>新着スレッド</h1>
        <div className='thread-titles'>
          {bbsThread?.map((thread) => {
            return (
              <Link 
                className="cell" 
                key={thread.id} 
                to={"/Thread"}
                state={{title: thread.title, threadId: thread.id}}
              >
                {thread.title}
              </Link>
            )
          })}
        </div>
      </main>
    </>
  )
}
