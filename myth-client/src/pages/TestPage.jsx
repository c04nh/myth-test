import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/image/background.png'; // 배경 이미지

const TestPage = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);

    // 3. MBTI 점수표 (초기값은 모두 0점)
    const [scores, setScores] = useState({
        E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0
    });

    // 화면이 켜지자마자 스프링 부트(서버)에서 질문 가져오기
    useEffect(() => {
        axios.get('http://localhost:8080/api/questions')
            .then(response => {
                setQuestions(response.data); // 가져온 데이터를 questions에 저장
            })
            .catch(error => {
                console.error("질문을 가져오는데 실패했습니다!", error);
            });
    }, []);

    const handleAnswer = (selectedType) => {
        // (점수 계산 로직 기존과 동일)
        const newScores = { ...scores, [selectedType]: scores[selectedType] + 1 };
        setScores(newScores);
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            navigate('/result', { state: { scores: newScores } });
        }
    };

    if (questions.length === 0) return <div>로딩중...</div>;

    const q = questions[currentStep];

    // MBTI 타입 매핑 로직 (기존 유지)
    let typeA = 'E', typeB = 'I';
    if (q.category === 'NS') { typeA = 'N'; typeB = 'S'; }
    else if (q.category === 'TF') { typeA = 'F'; typeB = 'T'; }
    else if (q.category === 'PJ') { typeA = 'J'; typeB = 'P'; }

    return (
        <div className="home-background">
            <div className="game-container">
                {/* 1. 배경 이미지 */}
                <img src={bg} alt="배경" className="bg-image" />

                {/* 2. 상단 진행바 (Progress Bar) */}
                <div className="progress-container">
                    {/* 👇 배경 이미지 역할을 할 div */}
                    <div className="progress-bar-bg">
                        <span className="progress-text">
                          {currentStep + 1} / {questions.length}
                        </span>
                    </div>
                </div>

                {/* 3. 질문 상자 (Question Box) */}
                <div className="question-box">
                    <p className="question-text">{q.content}</p>
                </div>

                {/* 4. 답변 버튼들 (Answer Buttons) */}
                <div className="answers-area">
                    <button className="answer-btn btn-a" onClick={() => handleAnswer(typeA)}>
                        {q.optionA}
                    </button>
                    <button className="answer-btn btn-b" onClick={() => handleAnswer(typeB)}>
                        {q.optionB}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestPage;