import React, { useState } from "react";
import "./App.css";

function App() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    age: "",
    gender: "M",
    height: "",
    weight: "",
    goal: "weight_loss",
  });

  const [routine, setRoutine] = useState([]);
  const [meal, setMeal] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 임시 추천 데이터를 설정 (실제 API 요청 코드로 변경 가능)
    setRoutine([
      { day: "월요일", exercise: "팔굽혀펴기", duration: 20, calories: 100 },
      { day: "화요일", exercise: "조깅", duration: 30, calories: 200 },
    ]);

    setMeal([
      { meal_name: "구운 닭가슴살 샐러드", description: "저칼로리 샐러드.", calories: 350 },
      { meal_name: "닭가슴살과 현미밥", description: "고단백 식단.", calories: 600 },
    ]);
  };

  return (
    <div className="App">
      <h1>헬스 루틴 추천</h1>
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>사용자 정보를 입력하세요</h2>
        <label>
          사용자 이름:
          <input type="text" name="username" value={userInfo.username} onChange={handleChange} required />
        </label>
        <label>
          나이:
          <input type="number" name="age" value={userInfo.age} onChange={handleChange} required />
        </label>
        <label>
          성별:
          <select name="gender" value={userInfo.gender} onChange={handleChange}>
            <option value="M">남성</option>
            <option value="F">여성</option>
          </select>
        </label>
        <label>
          키 (cm):
          <input type="number" name="height" value={userInfo.height} onChange={handleChange} required />
        </label>
        <label>
          몸무게 (kg):
          <input type="number" name="weight" value={userInfo.weight} onChange={handleChange} required />
        </label>
        <label>
          목표:
          <select name="goal" value={userInfo.goal} onChange={handleChange}>
            <option value="weight_loss">체중 감량</option>
            <option value="muscle_gain">근육 증가</option>
          </select>
        </label>
        <button type="submit">추천받기</button>
      </form>

      <div className="recommendations">
        <h2>추천 운동 루틴</h2>
        <ul>
          {routine.map((r, index) => (
            <li key={index}>
              <strong>{r.day}:</strong> {r.exercise} - {r.duration}분 ({r.calories} 칼로리)
            </li>
          ))}
        </ul>

        <h2>추천 식단</h2>
        <ul>
          {meal.map((m, index) => (
            <li key={index}>
              <strong>{m.meal_name}:</strong> {m.description} ({m.calories} 칼로리)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
