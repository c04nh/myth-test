import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
    const navigate = useNavigate();

    // 1. 질문 목록을 저장할 그릇
    const [questions, setQuestions] = useState([]);

    // 2. 현재 몇 번째 질문을 보고 있는지 (0번부터 시작)
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

    // 답변을 선택했을 때 실행되는 함수
    const handleAnswer = (selectedType) => {
        // 1. 점수 올리기 (최신 점수를 반영하기 위해 임시 변수 newScores 사용)
        const newScores = {
            ...scores,
            [selectedType]: scores[selectedType] + 1
        };
        setScores(newScores);

        // 2. 다음 질문으로 넘어가기
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // 3. 마지막 질문이면? -> 결과 페이지로 이동! (점수 들고 가기)
            // state: { scores: newScores } 부분이 핵심입니다!
            navigate('/result', { state: { scores: newScores } });
        }
    };

    // 질문 데이터가 아직 안 왔으면 로딩 중 표시
    if (questions.length === 0) {
        return <div style={styles.loading}>신화 속으로 들어가는 중...</div>;
    }

    // 현재 보여줄 질문
    const q = questions[currentStep];

    // (중요) 질문 카테고리에 따라 버튼이 어떤 점수를 줄지 결정
    // 백엔드 DataLoader 순서: EI, NS, TF(A가 F, B가 T), PJ(A가 J, B가 P)
    let typeA, typeB;
    if (q.category === 'EI') { typeA = 'E'; typeB = 'I'; }
    else if (q.category === 'NS') { typeA = 'N'; typeB = 'S'; }
    else if (q.category === 'TF') { typeA = 'F'; typeB = 'T'; } // DataLoader 순서 맞춤
    else if (q.category === 'PJ') { typeA = 'J'; typeB = 'P'; }

    return (
        <div style={styles.container}>
            {/* 진행바 (Progress Bar) */}
            <div style={styles.progressBar}>
                <div style={{...styles.progressFill, width: `${((currentStep + 1) / questions.length) * 100}%`}}></div>
            </div>

            <p style={styles.count}>
                {currentStep + 1} / {questions.length}
            </p>

            <h2 style={styles.question}>{q.content}</h2>

            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={() => handleAnswer(typeA)}>
                    {q.optionA}
                </button>
                <button style={styles.button} onClick={() => handleAnswer(typeB)}>
                    {q.optionB}
                </button>
            </div>
        </div>
    );
};

// 스타일 (꾸미기)
const styles = {
    container: { padding: '20px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' },
    loading: { fontSize: '1.5rem', marginTop: '50px', textAlign: 'center' },
    progressBar: { width: '100%', height: '10px', backgroundColor: '#e0e0e0', borderRadius: '5px', marginBottom: '20px' },
    progressFill: { height: '100%', backgroundColor: '#6200ea', borderRadius: '5px', transition: 'width 0.3s' },
    count: { color: '#888', marginBottom: '10px' },
    question: { fontSize: '1.5rem', marginBottom: '40px', wordKeepAll: 'break-all' }, // wordKeepAll: 한글 줄바꿈 예쁘게
    buttonContainer: { display: 'flex', flexDirection: 'column', gap: '15px' },
    button: {
        padding: '20px',
        fontSize: '1.1rem',
        cursor: 'pointer',
        backgroundColor: '#fff',
        border: '2px solid #6200ea',
        borderRadius: '10px',
        color: '#333',
        transition: '0.2s'
    }
};

export default TestPage;