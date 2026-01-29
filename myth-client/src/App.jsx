import { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // 스프링 부트 서버(8080)로 요청 보내기
        fetch('http://localhost:8080/api/test')
            .then(response => response.text())
            .then(data => setMessage(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>🏛️ 신화 성격 테스트</h1>
            <p>서버 응답 메시지: {message}</p>
        </div>
    );
}

export default App;