package com.example.demo;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

@SpringBootTest
public class TestingWebApplicationBasics {

	@Test
	public void Context_loads() {
	}

	@Autowired
	private EventController controller;

	@Test
	public void When_application_started_Then_controller_loads() throws Exception {
		assertThat(controller).isNotNull();
	}


}
