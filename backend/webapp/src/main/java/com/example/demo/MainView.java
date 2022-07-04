package com.example.demo;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.binder.ValidationException;
import com.vaadin.flow.router.Route;

@Route("")                                                                  //route to the main path
public class MainView extends VerticalLayout {

    private PersonRepository personRepository;
    private TextField lastName = new TextField("Last name");
    private TextField firstName = new TextField("First name");
    private EmailField email = new EmailField("Email name");
    private PasswordField password = new PasswordField("Password");
    private Grid<Person> grid = new Grid<>(Person.class);
    private Binder<Person> binder = new Binder<>(Person.class);

    public MainView(PersonRepository personRepository) {
        this.personRepository = personRepository;
        add(getForm(), grid);
        refreshGrid();
    }

    private Component getForm() {
        var layout = new HorizontalLayout();
        Button addButton = new Button("Add");
        layout.setAlignItems(Alignment.BASELINE);
        addButton.addThemeVariants(ButtonVariant.LUMO_SUCCESS);
        layout.add(lastName, firstName, email, password, addButton);
        binder.bindInstanceFields(this);                    //binds the textfield and the columns of database

        addButton.addClickListener(click -> {
            try {
                var user = new Person();
                binder.writeBean(user);                                        //fills up the user object with the input
                personRepository.save(user);
                clear();

                refreshGrid();
            } catch (ValidationException e) {
                throw new RuntimeException(e);
            }
        });

        return layout;
    }

    private void clear() {
        lastName.clear();
        firstName.clear();
        email.clear();
        password.clear();
    }

    private void refreshGrid() {
        grid.setItems(personRepository.findAll());
    }
}
