import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import bg from "../assets/image/background.png";
import charAphrodite from "../assets/image/Aphrodite.png";
import charApollo from '../assets/image/Apollo.png';
import charAres from '../assets/image/Ares.png';
import charArtemis from '../assets/image/Artemis.png';
import charAthena from '../assets/image/Athena.png';
import charDemeter from '../assets/image/Demeter.png';
import charDionysus from '../assets/image/Dionysus.png';
import charEunomia from '../assets/image/Eunomia.png';
import charHades from '../assets/image/Hades.png';
import charHephaestus from '../assets/image/Hephaestus.png';
import charHermes from '../assets/image/Hermes.png';
import charHestia from '../assets/image/Hestia.png';
import charPersephone from '../assets/image/Persephone.png';
import charPoseidon from '../assets/image/Poseidon.png';
import charSelene from '../assets/image/Selene.png';
import charZeus from '../assets/image/Zeus.png';

const ResultPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // 토글 상태 관리
    const [isModalOpen, setIsModalOpen] = useState(true);

    const scores = location.state?.scores || { E:0, I:0, N:0, S:0, T:0, F:0, J:0, P:0 };

    // 카카오 SDK 초기화 (화면 켜질 때 한 번 실행)
    useEffect(() => {
        // ⚠️ 중요: 여기에 나중에 발급받은 'JavaScript 키'를 넣어야 합니다!
        // 예: window.Kakao.init('a1b2c3d4e5...');
        if (window.Kakao && !window.Kakao.isInitialized()) {
            window.Kakao.init('177b68d07c73306a5a450b36b9b348e3');
        }
    }, []);

    const getMBTI = (scores) => {
        let mbti = "";
        mbti += scores.E >= scores.I ? "E" : "I";
        mbti += scores.N >= scores.S ? "N" : "S";
        mbti += scores.F >= scores.T ? "F" : "T";
        mbti += scores.P >= scores.J ? "P" : "J";
        return mbti;
    };

    const myType = getMBTI(scores);

    const resultData = {
        "ISFJ": {
            name: "헤스티아 (Hestia)",
            desc: "따뜻한 불꽃으로 가정을 지키는 수호신",
            story: "헤스티아는 올림포스 12신 중 가장 온화한 성격을 가졌습니다. 그녀는 디오니소스가 올림포스에 합류했을 때, 분란을 막기 위해 스스로 12신의 자리를 양보하고 화로를 지키는 역할을 선택했습니다. 그녀의 따뜻한 희생 덕분에 신들의 세계는 평화를 유지할 수 있었습니다.",
            charImg: charHestia
        },
        "ISTJ": {
            name: "에우노미아 (Eunomia)",
            desc: "세상의 질서와 법을 수호하는 여신",
            story: "에우노미아는 제우스와 테미스 사이에서 태어난 '계절의 여신' 중 하나로, '질서'를 상징합니다. 그녀는 인간 사회가 법과 규칙 안에서 올바르게 돌아가도록 묵묵히 감시하며, 혼란스러운 세상에 규율을 가져오는 중요한 역할을 합니다.",
            charImg: charEunomia
        },
        "ESFJ": {
            name: "데메테르 (Demeter)",
            desc: "대지의 풍요와 사랑을 베푸는 어머니",
            story: "데메테르는 딸 페르세포네가 지하 세계로 납치되자, 슬픔에 잠겨 대지의 모든 곡식을 시들게 했습니다. 결국 딸을 되찾기 위해 제우스와 담판을 지었고, 딸과 함께 있는 동안에는 세상에 봄과 여름이, 떨어져 있는 동안에는 겨울이 오게 되었습니다.",
            charImg: charDemeter
        },
        "ESTJ": {
            name: "포세이돈 (Poseidon)",
            desc: "거친 파도를 지배하는 바다의 제왕",
            story: "포세이돈은 제비뽑기를 통해 바다의 지배자가 되었습니다. 그는 자신의 영토인 바다에서는 제우스조차 함부로 할 수 없을 만큼 강력한 권력을 휘두릅니다. 아테네 도시의 수호신 자리를 두고 아테나와 경쟁했을 만큼 지배욕과 승부욕이 강한 신입니다.",
            charImg: charPoseidon
        },
        "ISTP": {
            name: "헤파이스토스 (Hephaestus)",
            desc: "묵묵히 걸작을 만들어내는 대장장이 신",
            story: "그는 태어날 때부터 절름발이였고 못생겼다고 버림받았지만, 최고의 손재주를 가졌습니다. 그는 복수 대신 실력으로 승부하여 신들의 위한 황금 의자와 번개, 무기를 만들어주며 올림포스에서 없어서는 안 될 최고의 기술자로 인정받았습니다.",
            charImg: charHephaestus
        },
        "ISFP": {
            name: "아르테미스 (Artemis)",
            desc: "숲속을 자유롭게 누비는 달의 여신",
            story: "아르테미스는 제우스에게 '평생 결혼하지 않고 숲속에서 자유롭게 사냥하며 살게 해달라'고 부탁했습니다. 그녀는 누구에게도 구속받지 않고 님프들과 함께 숲을 누비며, 자신의 영역을 침범하는 자에게는 가차 없는 화살을 날리는 독립적인 신입니다.",
            charImg: charArtemis
        },
        "ESTP": {
            name: "아레스 (Ares)",
            desc: "본능에 충실한 파괴와 전쟁의 신",
            story: "아레스는 전략보다는 무력과 파괴를 즐기는 전쟁의 신입니다. 그는 전쟁터의 굉음과 공포를 사랑하며, 앞뒤 재지 않고 전장에 뛰어듭니다. 비록 다른 신들에게는 난폭하다고 미움을 받기도 했지만, 사랑의 여신 아프로디테의 마음을 훔친 열정적인 남성이기도 했습니다.",
            charImg: charAres
        },
        "ESFP": {
            name: "디오니소스 (Dionysus)",
            desc: "광기와 축제를 즐기는 포도주의 신",
            story: "디오니소스는 인간 세상 곳곳을 떠돌며 사람들에게 포도주 만드는 법과 축제를 즐기는 법을 가르쳤습니다. 그는 자신을 따르는 이들에게는 환희와 즐거움을 주었지만, 자신을 무시하는 자들은 광기에 빠지게 하여 춤추다 죽게 만들기도 했습니다.",
            charImg: charDionysus
        },
        "INTJ": {
            name: "아테나 (Athena)",
            desc: "냉철한 전략으로 승리하는 지혜의 여신",
            story: "아테나는 제우스의 머리에서 완전무장한 상태로 태어났습니다. 그녀는 전쟁의 신이지만 무작정 싸우는 아레스와 달리, 지략과 전술로 승리합니다. 트로이 전쟁에서 오디세우스에게 목마 작전을 제안하여 그리스 군을 승리로 이끈 것도 바로 그녀입니다.",
            charImg: charAthena
        },
        "INTP": {
            name: "하데스 (Hades)",
            desc: "깊은 어둠 속에서 고독을 즐기는 저승의 왕",
            story: "하데스는 제비뽑기에서 지하 세계를 맡게 되었습니다. 그는 올림포스의 화려한 연회에 거의 참석하지 않고, 어두운 지하 궁전에서 묵묵히 죽은 자들을 관리했습니다. 냉정해 보이지만 아내 페르세포네를 위해 지하 세계에 석류나무를 심어줄 만큼 로맨틱한 면도 있습니다.",
            charImg: charHades
        },
        "ENTP": {
            name: "헤르메스 (Hermes)",
            desc: "신출귀몰한 장난꾸러기 전령의 신",
            story: "헤르메스는 태어난 지 하루 만에 요람에서 빠져나와 아폴론의 소 떼를 훔쳤을 만큼 영리하고 장난기가 넘칩니다. 그는 신들의 심부름꾼이자 죽은 자를 저승으로 인도하는 안내자이며, 특유의 말솜씨와 기지로 수많은 위기 상황을 모면하곤 했습니다.",
            charImg: charHermes
        },
        "ENTJ": {
            name: "제우스 (Zeus)",
            desc: "세상을 호령하는 카리스마, 신들의 왕",
            story: "제우스는 형제들을 규합하여 아버지 크로노스와의 전쟁(티타노마키아)을 승리로 이끌고 신들의 왕이 되었습니다. 그는 번개를 무기로 사용하여 질서를 유지하며, 때로는 무자비하게, 때로는 관대하게 세상을 통치하는 절대적인 권력자입니다.",
            charImg: charZeus
        },
        "INFP": {
            name: "페르세포네 (Persephone)",
            desc: "어둠과 빛을 오가는 신비로운 봄의 여신",
            story: "순수했던 소녀 페르세포네는 하데스에게 납치되어 지하 세계의 여왕이 되었습니다. 처음에는 슬퍼했으나 점차 자신의 운명을 받아들여, 죽은 자들을 위로하는 자비로운 여왕이자 생명을 싹틔우는 봄의 여신이라는 이중적인 정체성을 가지게 되었습니다.",
            charImg: charPersephone
        },
        "INFJ": {
            name: "셀레네 (Selene)",
            desc: "고요한 밤하늘을 비추는 달의 여신",
            story: "셀레네는 매일 밤 달 마차를 타고 하늘을 가로지릅니다. 그녀는 인간 목동 엔디미온을 깊이 사랑하여, 제우스에게 그가 영원히 늙지 않고 잠들게 해달라고 부탁했습니다. 그녀는 매일 밤 잠든 연인을 찾아가 조용히 지켜보는 신비롭고 헌신적인 사랑을 했습니다.",
            charImg: charSelene
        },
        "ENFJ": {
            name: "아폴로 (Apollo)",
            desc: "예술과 예언으로 사람을 이끄는 태양신",
            story: "아폴로는 음악, 의술, 예언 등 다재다능한 신입니다. 그는 델포이 신탁을 통해 인간들에게 미래의 길을 알려주었고, 리라 연주로 신들의 마음을 달래주었습니다. 언제나 중심에서 빛나는 태양처럼 사람들에게 영감을 주는 존재입니다.",
            charImg: charApollo
        },
        "ENFP": {
            name: "아프로디테 (Aphrodite)",
            desc: "사랑과 아름다움을 전파하는 미의 여신",
            story: "바다의 거품에서 태어난 아프로디테는 그 아름다움으로 모든 신들의 마음을 사로잡았습니다. 그녀가 가는 곳마다 꽃이 피어나고 사랑이 샘솟습니다. 그녀는 사랑을 위해서라면 규칙이나 도덕도 무시할 만큼 자유롭고 열정적인 영혼을 가졌습니다.",
            charImg: charAphrodite
        },
    };

    // 데이터가 없으면 기본값
    const result = resultData[myType] || { name: "신화 속 주인공", desc: "당신은 특별한 신입니다." };

    // 1. 카카오톡 공유하기
    const shareKakao = () => {
        if (!window.Kakao || !window.Kakao.isInitialized()) {
            alert("카카오 키를 설정해주세요!");
            return;
        }

        const currentUrl = window.location.origin;

        window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: `나의 신화 속 자아는? ${result.name}`,
                description: result.desc,
                imageUrl: currentUrl + '/icon.png',
                link: {
                    mobileWebUrl: window.location.href,
                    webUrl: window.location.href,
                },
            },
            buttons: [
                {
                    title: '테스트 하러 가기',
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
            ],
        });
    };

    // 2. X (트위터) 공유하기
    const shareTwitter = () => {
        const text = `신화 성격 테스트 결과! 나의 자아는 [${result.name}] 입니다. #신화테스트 #MBTI`;
        const url = window.location.href;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
    };

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("링크가 복사되었습니다!");
    };

    return (
        <div className="home-background">
            <div className="game-container result-page-container">
                {/* 1층: 배경 이미지 */}
                <img src={bg} alt="배경" className="bg-image" />
                {result && result.charImg && (
                    <img
                        src={result.charImg}
                        alt={result.name}
                        className="result-character-img"
                    />
                )}
                {/* 3. 결과 내용 */}
                <div className="result-parchment-box">
                    <p className="result-description">{result.desc}</p>
                    <h2 className="result-name">{result.name}</h2>
                    <p className="result-story">{result.story}</p>
                </div>

                <div className="result-btns-area">
                    <button className="retry-btn" onClick={() => navigate('/')}>
                        다시하기
                    </button>
                    <button className="share-btn" onClick={() => setIsModalOpen(true)}>
                        공유하기
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    {/* 모달 내용 박스 (클릭해도 닫히지 않게 stopPropagation 사용) */}
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>

                        <div className="modal-container">
                            <h3 className="modal-title">결과 공유하기</h3>

                            <div className="modal-buttons">
                                {/* 카카오톡 */}
                                <button className="share-icon-btn kakao" onClick={shareKakao}>
                                </button>

                                {/* 트위터(X) */}
                                <button className="share-icon-btn twitter" onClick={shareTwitter}>
                                </button>

                                {/* 주소 복사 */}
                                <button className="share-icon-btn link" onClick={copyLink}>
                                </button>
                            </div>

                            {/* 닫기 버튼 */}
                            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
                                닫기
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default ResultPage;