import { useState } from "react";
import "./App.css";

// 과목 리스트 컴포넌트
function SubjectList() {
  const subjects = ["캡스톤 디자인2", "생성형AI", "AI 보안", "백엔드프로그래밍"];
  return (
    <div className="card">
      <h2>📚 이번 학기 수강 과목</h2>
      <ul>
        {subjects.map((sub, i) => (
          <li key={i}>{sub}</li>
        ))}
      </ul>
    </div>
  );
}

// 시험 점수 컴포넌트
function ScoreList() {
  const scores = [
    { id: 1, name: "철수", score: 85 },
    { id: 2, name: "영희", score: 45 },
    { id: 3, name: "민수", score: 70 },
  ];

  return (
    <div className="card">
      <h2>📝 시험 결과</h2>
      <ul>
        {scores.map((s) => (
          <li key={s.id}>
            {s.name} : <b>{s.score}점</b> →{" "}
            {s.score >= 60 ? "✅ 합격 🎉" : "❌ 불합격"}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 메인 앱
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="title">🌟 나의 리액트 앱</h1>
      <SubjectList />
      <ScoreList />
    </div>
  );
}

export default App;
