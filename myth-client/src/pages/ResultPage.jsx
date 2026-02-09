import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // TestPage에서 넘겨준 점수 받아오기 (없으면 빈 객체)
    const scores = location.state?.scores || { E:0, I:0, N:0, S:0, T:0, F:0, J:0, P:0 };

    // 점수 -> MBTI 유형 계산 함수
    const getMBTI = (scores) => {
        let mbti = "";
        mbti += scores.E >= scores.I ? "E" : "I";
        mbti += scores.N >= scores.S ? "N" : "S";
        mbti += scores.F >= scores.T ? "F" : "T";
        mbti += scores.P >= scores.J ? "P" : "J";
        return mbti;
    };

    const myType = getMBTI(scores);

    // 결과 데이터 (신화 매칭)
    const resultData = {
        "ESTJ": { name: "제우스 (Zeus)", title: "천상의 지배자", desc: "철저한 규칙과 질서를 중요시하며, 조직을 이끄는 카리스마 넘치는 리더입니다." },
        "ESFJ": { name: "헤라 (Hera)", title: "가정의 수호신", desc: "주변 사람들을 세심하게 챙기며, 조화와 안정을 최우선으로 생각합니다." },
        "ENTJ": { name: "아테나 (Athena)", title: "지혜와 전쟁의 여신", desc: "냉철한 판단력과 전략으로 목표를 반드시 성취해내는 승부사입니다." },
        "ENTP": { name: "헤르메스 (Hermes)", title: "신들의 전령", desc: "호기심이 넘치고 임기응변에 능하며, 새로운 아이디어가 끊이지 않습니다." },
        "ESTP": { name: "아레스 (Ares)", title: "전쟁의 신", desc: "활동적이고 직설적이며, 복잡한 생각보다는 빠른 행동으로 문제를 해결합니다." },
        "ESFP": { name: "디오니소스 (Dionysus)", title: "축제의 신", desc: "순간을 즐길 줄 알며, 어디서나 분위기 메이커 역할을 합니다." },
        "ENFJ": { name: "아폴론 (Apollo)", title: "태양의 신", desc: "열정적이고 이상적이며, 사람들에게 영감을 주는 타고난 지도자입니다." },
        "ENFP": { name: "에로스 (Eros)", title: "사랑의 신", desc: "자유로운 영혼의 소유자로, 타인과의 깊은 정서적 교감을 중요시합니다." },
        "ISTJ": { name: "헤스티아 (Hestia)", title: "화로의 여신", desc: "조용하고 차분하며, 맡은 바 책임을 묵묵히 다하는 성실함의 아이콘입니다." },
        "ISFJ": { name: "데메테르 (Demeter)", title: "대지의 여신", desc: "따뜻하고 헌신적이며, 내 사람들을 위해 아낌없이 베푸는 수호자입니다." },
        "INTJ": { name: "하데스 (Hades)", title: "지하 세계의 왕", desc: "고독을 즐기며, 남들은 보지 못하는 깊은 통찰력으로 큰 그림을 그립니다." },
        "INTP": { name: "프로메테우스 (Prometheus)", title: "지식의 선구자", desc: "논리적이고 분석적이며, 기존의 틀을 깨는 혁신적인 사고를 합니다." },
        "ISTP": { name: "헤파이스토스 (Hephaestus)", title: "대장장이의 신", desc: "손재주가 뛰어나고 효율성을 추구하며, 말이 아닌 행동으로 보여줍니다." },
        "ISFP": { name: "아르테미스 (Artemis)", title: "달과 사냥의 여신", desc: "자유롭고 독립적이며, 자신만의 확고한 가치관과 예술적 감각을 지녔습니다." },
        "INFJ": { name: "페르세포네 (Persephone)", title: "봄과 명계의 여왕", desc: "신비롭고 직관력이 뛰어나며, 부드러운 겉모습 속에 강인한 내면이 있습니다." },
        "INFP": { name: "셀레네 (Selene)", title: "달의 여신", desc: "몽상가적 기질이 있으며, 자신만의 내면 세계와 이상을 소중히 여깁니다." },
    };

    const result = resultData[myType] || { name: "미지의 신", desc: "결과를 찾을 수 없습니다." };

    return (
        <div style={styles.container}>
            <h2 style={styles.subtitle}>당신의 신화 속 자아는...</h2>
            <h1 style={styles.title}>{result.title}</h1>
            <h1 style={styles.godName}>{result.name}</h1>

            <div style={styles.box}>
                <p style={styles.desc}>{result.desc}</p>
            </div>

            <p style={styles.mbti}>(MBTI 유형: {myType})</p>

            <button style={styles.button} onClick={() => navigate('/')}>
                테스트 다시 하기
            </button>
        </div>
    );
};

const styles = {
    container: { textAlign: 'center', marginTop: '50px', padding: '20px', fontFamily: 'sans-serif' },
    subtitle: { fontSize: '1.2rem', color: '#666', marginBottom: '10px' },
    title: { fontSize: '2rem', color: '#6200ea', marginBottom: '10px' },
    godName: { fontSize: '3rem', fontWeight: 'bold', color: '#333', marginBottom: '30px' },
    box: { backgroundColor: '#f3e5f5', padding: '30px', borderRadius: '15px', display: 'inline-block', maxWidth: '500px', marginBottom: '30px' },
    desc: { fontSize: '1.3rem', lineHeight: '1.6', color: '#444' },
    mbti: { color: '#999', marginBottom: '40px' },
    button: { padding: '15px 30px', fontSize: '1.2rem', cursor: 'pointer', backgroundColor: '#6200ea', color: 'white', border: 'none', borderRadius: '8px' }
};

export default ResultPage;