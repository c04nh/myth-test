package com.myth.mythserver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // 리액트에서의 접근 허용 (CORS 설정)
public class HelloController {

    @GetMapping("/api/test")
    public String hello() {
        return "신화 성격 테스트 서버에 오신 것을 환영합니다!";
    }
}