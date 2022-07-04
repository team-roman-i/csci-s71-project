package com.example.demo;

public class Event {

    private String eventName;
    private String discription;
    private LocalDate time;

    public Event(String eventName, String discription, LocalDate time) {
        this.eventName = eventName;
        this.discription = discription;
        this.time = time;
    }

    public String getEventName() {
        return eventName;
    }

    public String getDiscription() {
        return discription;
    }

    public LocalDate getTime() {
        return time;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public void setDiscription(String discription) {
        this.discription = discription;
    }

    public void setTime(LocalDate time) {
        this.time = time;
    }
}