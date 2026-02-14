import React from 'react';
import { useNavigate } from 'react-router-dom';
// 이미지 파일을 import 하세요 (경로는 본인 프로젝트에 맞게!)
import mainBg from '../assets/image/background-start.png';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-background">
            {/* 비율을 유지하는 게임 화면 컨테이너 */}
            <div className="game-container">
                {/* 1. 배경 이미지 */}
                <img src={mainBg} alt="메인 배경" className="bg-image" />

                {/* 2. 그 위에 얹을 버튼 (위치는 CSS로 잡음) */}
                <button className="start-btn" onClick={() => navigate('/test')}>
                    테스트 시작하기
                </button>
            </div>
        </div>
    );
};

export default Home;