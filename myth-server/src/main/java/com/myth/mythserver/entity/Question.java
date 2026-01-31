package com.myth.mythserver.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter
@NoArgsConstructor
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category; // EI, NS, TF, PJ 중 하나
    private String content;  // 질문 내용

    private String optionA;  // 선택지 A (E, N, F, J 점수)
    private String optionB;  // 선택지 B (I, S, T, P 점수)

    // 데이터를 쉽게 넣기 위한 생성자
    public Question(String category, String content, String optionA, String optionB) {
        this.category = category;
        this.content = content;
        this.optionA = optionA;
        this.optionB = optionB;
    }
}