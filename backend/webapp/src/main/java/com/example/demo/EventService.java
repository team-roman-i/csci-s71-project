package com.example.demo;

import java.util.ArrayList;
import java.util.List;

public class EventService {

    private EventRepository eventRepository;

    EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public void addEvent(Event event) {
        eventRepository.save(event);
    }

    public List<Event> listEvents() {
        return eventRepository.findAll();
    }
}
