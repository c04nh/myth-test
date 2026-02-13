import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <button className="start-btn" onClick={() => navigate('/test')}>
                테스트 시작하기
            </button>
        </div>
    );
};

// 간단한 스타일 (꾸미기)
const styles = {
    container: {
        textAlign: 'center',
    },
};

export default Home;