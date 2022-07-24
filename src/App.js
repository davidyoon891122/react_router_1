import logo from './logo.svg';
import './App.css';

import Profile from "./Profile"
import Board from "./Board"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="profile">프로필</a>
          </li>
          <li>
            <a href="board">게시판</a>
          </li>
        </ul>
      </nav>
      <Profile />
      <Board />
    </div>
  );
}

export default App;
