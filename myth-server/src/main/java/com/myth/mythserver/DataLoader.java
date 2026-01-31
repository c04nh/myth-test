package com.myth.mythserver;

import com.myth.mythserver.entity.Question;
import com.myth.mythserver.repository.QuestionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    private final QuestionRepository questionRepository;

    public DataLoader(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (questionRepository.count() > 0) {
            System.out.println("이미 신화 데이터가 존재합니다. 초기화 과정을 건너뜁니다.");
            return;
        }

        System.out.println("신화 속 질문 데이터를 DB에 기록하는 중...");

        // 규칙: OptionA는 E, N, F, J / OptionB는 I, S, T, P 성향입니다.
        List<Question> questions = Arrays.asList(
                // --- 1. 에너지 방향 (E vs I) ---
                new Question("EI", "전쟁에서 승리한 후, 올림포스에서 성대한 연회가 열렸다.",
                        "주인공은 나지! 술잔을 들고 신들 사이를 누비며 무용담을 떠든다.",
                        "시끄러운 건 딱 질색. 구석진 기둥 뒤에서 조용히 포도주를 마신다."),

                new Question("EI", "새로운 모험을 떠나기 위해 동료를 모아야 한다.",
                        "광장에 나가 큰 소리로 외치며 지원자를 모집한다.",
                        "신뢰할 수 있는 소수의 정예 멤버에게만 은밀히 서신을 보낸다."),

                new Question("EI", "당신은 인간 세상에 내려가 며칠을 보내야 한다.",
                        "사람들이 북적이는 시장통이나 축제 현장 근처에 머문다.",
                        "인적 드문 깊은 숲속 오두막이나 조용한 신전에서 지낸다."),

                new Question("EI", "고민이 생겨 잠을 이룰 수 없는 밤, 당신은?",
                        "친구를 불러 다른 신들의 소식을 듣거나 대화를 나눈다.",
                        "밤하늘의 별자리를 바라보며 혼자만의 사색에 잠긴다."),

                new Question("EI", "전투 중, 적의 대장이 일기토(1:1 대결)를 신청했다.",
                        "\"나를 주목해라!\" 병사들의 환호를 유도하며 화려하게 나선다.",
                        "말없이 검을 뽑아 들고, 차분하게 상대의 호흡을 읽는다."),

                // --- 2. 인식 기능 (N vs S) ---
                new Question("NS", "운명의 세 여신이 알 수 없는 예언을 남겼다.",
                        "\"이 문장에 숨겨진 거대한 비유와 미래의 암시는 뭘까?\" 상상력을 펼친다.",
                        "\"그래서 당장 동쪽으로 가라는 거야, 서쪽으로 가라는 거야?\" 사실관계부터 따진다."),

                new Question("NS", "전설의 무기를 고를 기회가 주어졌다.",
                        "모양은 투박해도, 깃들인 고대의 마법과 잠재력이 느껴지는 지팡이.",
                        "날카롭고 가벼워서 당장 적을 베기에 최적화된 강철 검."),

                new Question("NS", "미지의 섬에 도착했다. 가장 먼저 하는 일은?",
                        "\"이 섬에는 어떤 고대 문명이 잠들어 있을까?\" 신비로운 분위기에 취한다.",
                        "\"식량은 충분한가? 야생동물은 없나?\" 생존에 필요한 자원을 확인한다."),

                new Question("NS", "신전을 짓는다면 어떤 스타일로?",
                        "기존에 없던 혁신적인 구조와 몽환적인 디자인으로 짓는다.",
                        "튼튼한 대리석을 사용하여 수천 년이 지나도 무너지지 않게 짓는다."),

                new Question("NS", "괴물 메두사를 처치하러 가는 길, 작전은?",
                        "\"분명 놈에게도 약점이 있을 거야.\" 번뜩이는 영감과 임기응변을 믿는다.",
                        "\"방패의 반사각을 이용해야 해.\" 검증된 공략법과 철저한 준비를 믿는다."),

                // --- 3. 판단 기능 (F vs T) ---
                new Question("TF", "동료가 치명적인 실수를 저질러 임무를 망쳤다.",
                        "\"많이 당황했지? 다친 데는 없어?\" 일단 동료의 마음부터 달래준다.",
                        "\"도대체 왜 그랬어? 피해 규모가 얼마야?\" 실수의 원인과 결과를 분석한다."),

                new Question("TF", "재판의 신이 되어 죄인을 심판해야 한다.",
                        "그가 범죄를 저지를 수밖에 없었던 안타까운 사정을 참작한다.",
                        "법전(Rule)에 적힌 대로, 감정을 배제하고 공정하게 형량을 내린다."),

                new Question("TF", "인간들이 신에게 가뭄을 해결해달라고 기도한다.",
                        "그들의 눈물과 고통이 가엾어서 당장 비를 내려준다.",
                        "생태계의 균형을 위해 지금 비를 내리는 게 맞는지 계산해 본다."),

                new Question("TF", "전쟁 중, 적군 스파이를 잡았다. 그는 살려달라고 빈다.",
                        "그의 가족 이야기를 듣고 마음이 흔들려 몰래 풀어준다.",
                        "스파이를 풀어주면 우리 군이 위험해진다. 원칙대로 처단한다."),

                new Question("TF", "당신을 칭송하는 노래가 만들어졌다. 마음에 드는 가사는?",
                        "\"모두를 사랑으로 감싸 안은 따뜻한 수호자여.\"",
                        "\"한 치의 오차도 없이 적을 꿰뚫는 냉철한 전략가여.\""),

                // --- 4. 생활 양식 (J vs P) ---
                new Question("PJ", "대원정을 떠나기 전날, 당신의 가방은?",
                        "비상약, 지도, 여벌 옷까지 완벽하게 리스트를 체크하며 쌌다.",
                        "일단 중요한 무기만 챙기고, 나머지는 가면서 구하기로 한다."),

                new Question("PJ", "항해 도중 갑작스러운 폭풍우를 만났다.",
                        "항로가 빗나간 것에 스트레스를 받으며, 최대한 빨리 원래 계획대로 복귀하려 애쓴다.",
                        "\"오히려 좋아, 미지의 섬을 발견할 기회다!\" 바람이 이끄는 대로 키를 돌린다."),

                new Question("PJ", "신들의 회의 시간, 당신은?",
                        "정해진 시간 10분 전에 도착해서 안건을 미리 읽고 있다.",
                        "회의 시작 직전에 헐레벌떡 도착하거나, 아예 까먹고 늦잠을 잔다."),

                new Question("PJ", "당신에게 주어진 임무(퀘스트)를 처리하는 방식은?",
                        "우선순위를 정해서 하루에 하나씩 차근차근 해결한다.",
                        "기분이 내키는 날에 몰아서 해치우거나, 발등에 불이 떨어지면 처리한다."),

                new Question("PJ", "나만의 신전을 정리정돈하는 스타일은?",
                        "모든 성물은 제자리에, 먼지 하나 없이 칼각으로 정리되어야 한다.",
                        "어디에 뭐가 있는지만 알면 된다. 적당히 어질러진 게 인간미 있고 좋다.")
        );

        questionRepository.saveAll(questions);
        System.out.println("신화 데이터 저장 완료! 총 " + questions.size() + "개의 질문이 등록되었습니다.");
    }
}