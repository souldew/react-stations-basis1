import { useEffect, useState } from 'react'


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
              <div className="cell" key={thread.id}>{thread.title}</div>
            )
          })}
        </div>
      </main>
    </>
  )
}
