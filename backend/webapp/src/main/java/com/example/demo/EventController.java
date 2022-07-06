package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
@RestController
public class EventController {
        private static final String template = "Hello, %s!";
        private final AtomicLong counter = new AtomicLong();

        private EventRepository eventRepository;
        private EventService eventService;

        @GetMapping("/hello")
        public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
            return new Greeting(counter.incrementAndGet(), String.format(template, name));
        }
        @GetMapping("/events/list")
        public List<Event> listEvents() {
                return eventService.listEvents();
        }
        @PostMapping("events/add")
        public void addEvent(@RequestBody Event newEvent) {
                eventService.addEvent(newEvent);
        }
}
