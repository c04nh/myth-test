package com.myth.mythserver.repository;

import com.myth.mythserver.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository<대상엔티티, ID타입> 만 상속받으면 기본적인 CRUD 기능이 자동 완성됩니다.
public interface QuestionRepository extends JpaRepository<Question, Long> {
}