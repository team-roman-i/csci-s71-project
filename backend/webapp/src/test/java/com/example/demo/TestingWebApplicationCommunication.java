package com.example.demo;

import elemental.json.Json;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class TestingWebApplicationCommunication {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void greetingShouldReturnDefaultMessage() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/" + "hello",
                String.class)).contains("Hello, World!");
    }

    @Test
    public void greetingWithNameShouldReturnMessageWithName() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/" + "hello" + "?name=" + "Andreas",
                String.class)).contains("Hello, Andreas!");
    }

    @Test
    public void greetingShouldReturnId() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/" + "hello" + "?name=" + "Andreas",
                String.class)).contains("5");
    }

    @Test
    public void greetingShouldReturnCorrectId() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/" + "hello" + "?name=" + "Andreas",
                String.class)).contains("1");
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/" + "hello" + "?name=" + "Michael",
                String.class)).contains("2");
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/" + "hello" + "?name=" + "Richard",
                String.class)).contains("3");
    }
}



