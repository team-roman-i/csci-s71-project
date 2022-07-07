/**
 * @jest-environment jsdom
 */

// Jest JSDOM workaround
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Homepage from '../pages'
import NewEventPage from '../pages/newEvent'
import DefaultLayout from '../layouts/index'

describe('app tests', () => {
    afterEach(() => {
    })

    beforeEach(() => {
    })

    it('renders the Homepage without crashing', async () => {
        const promise = Promise.resolve() // You can also resolve with a mocked return value if necessary
        const { container } = render(<Homepage />);

        await waitFor(() => {
            expect(screen.queryByTestId('homepage')).not.toBeEmptyDOMElement()
        })
    });

    it('renders the Welcome message', async () => {
        const { container } = render(<Homepage />);

        await waitFor(() => {
            const greetDom = screen.getByText('Welcome to the Synaxis Platform');
            expect(greetDom).toBeInTheDocument();
        })
    });

    it.skip('renders the description paragraphs', async () => {
        const { container } = render(<Homepage />);

        await waitFor(() => {
            const p1Dom = screen.getByTestId('description_paragraph1');
            expect(p1Dom).toBeInTheDocument();

            const p2Dom = screen.getByTestId('description_paragraph2');
            expect(p2Dom).toBeInTheDocument();
        })
    });

    it.skip('renders the homepage embedded events', async () => {
        const { container } = render(<Homepage />);

        await waitFor(() => {
            const eventsDom = screen.getByTestId('embedded_events_wrapper');
            expect(eventsDom).toBeInTheDocument();
        })
    });

    it.skip('renders a sample event in its entirety', async () => {
        const { container } = render(<Homepage />);

        await waitFor(() => {
            const titleDom = screen.getByText('Worship band for Sunday night service');
            expect(titleDom).toBeInTheDocument();

            const dateDom = screen.getByText('Sunday, July 3rd 5pm.');
            expect(dateDom).toBeInTheDocument();

            const descriptionDom = screen.getByText('List of people called to serve on the band.');
            expect(descriptionDom).toBeInTheDocument();
        })
    });

    it('renders the Create New Event page without crashing', async () => {
        const { container } = render(<NewEventPage />);

        await waitFor(() => {
            expect(screen.queryByTestId('page_newEvent')).not.toBeEmptyDOMElement()
        })
    });

})
