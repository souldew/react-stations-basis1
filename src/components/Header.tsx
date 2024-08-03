import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="header-title"><Link to="/">掲示板</Link></div>
      <div className="header-new-thread"><Link to="/NewThread">スレッドをたてる</Link></div>  
    </header>
  );
}