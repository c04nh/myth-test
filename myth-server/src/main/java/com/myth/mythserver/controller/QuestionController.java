package com.myth.mythserver.controller;

import com.myth.mythserver.entity.Question;
import com.myth.mythserver.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173") // 리액트(5173)에서 오는 요청 허용
public class QuestionController {

    private final QuestionRepository questionRepository;

    // 리액트가 http://localhost:8080/api/questions 라고 부르면 실행됨
    @GetMapping("/api/questions")
    public List<Question> getAllQuestions() {
        return questionRepository.findAll(); // DB에 있는 모든 질문을 꺼내서 줌
    }
}