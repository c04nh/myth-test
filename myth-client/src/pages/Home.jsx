import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🏛️ 신화 성격 테스트</h1>
            <p style={styles.desc}>
                고대 그리스 신화 속에서<br />
                나는 어떤 신과 닮았을까요?
            </p>
            {/* 버튼을 누르면 /test 페이지로 이동! */}
            <button style={styles.button} onClick={() => navigate('/test')}>
                테스트 시작하기
            </button>
        </div>
    );
};

// 간단한 스타일 (꾸미기)
const styles = {
    container: {
        textAlign: 'center',
        marginTop: '100px',
        fontFamily: 'sans-serif',
    },
    title: {
        fontSize: '2.5rem',
        color: '#333',
    },
    desc: {
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '30px',
    },
    button: {
        padding: '15px 30px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        backgroundColor: '#6200ea',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
    },
};

export default Home;