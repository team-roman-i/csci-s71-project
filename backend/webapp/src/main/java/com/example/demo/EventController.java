package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
@RestController
public class EventController {
        private static final String template = "Hello, %s!";
        private final AtomicLong counter = new AtomicLong();

        @Autowired
        private EventRepository eventRepository;

        public EventController(EventRepository eventRepository) {
                this.eventRepository = eventRepository;
        }

        @GetMapping("/hello")
        public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
            return new Greeting(counter.incrementAndGet(), String.format(template, name));
        }
        @GetMapping("/api/events")
        public List<Event> listEvents() {
                return eventRepository.findAll();
        }
        @PostMapping("/api/events")
        public void addEvent(@RequestBody Event newEvent) {
                eventRepository.save(newEvent);
        }
}
