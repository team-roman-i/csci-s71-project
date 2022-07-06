import CreateEvent from "./_components/createEvent";

export default function NewEvent() {
    return (
        <div data-testid='page_newEvent'>
            <section>
                <h2>Create a new Event</h2>
                <p data-testid='description_paragraph1'>You may use the form below to submit a new event.</p>
            </section>

            <section style={{marginTop: '30px'}}>
                <CreateEvent />
            </section>
        </div>
    );
}
