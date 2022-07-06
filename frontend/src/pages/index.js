import Events from './_components/events'

export default function HomePage() {
    return (
        <div data-testid='homepage'>
            <section>
                <h2>Welcome to the Synaxis Platform</h2>
                <p data-testid='description_paragraph1'>Synaxis helps you organize information, coordinate events, communicate with your team, and connect with
                    your congregation.</p>
                <p data-testid='description_paragraph2'>You can easily browse events and RSVP to them, to let your leaders know you are coming. As a leader, you
                    are in control of the events on your congregation!</p>
            </section>

            <section style={{marginTop: '30px'}}>
                <Events/>
            </section>
        </div>
    );
}
