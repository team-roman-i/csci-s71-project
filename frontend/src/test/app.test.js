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
import useAxios from 'axios-hooks'

jest.mock('axios-hooks')

import Homepage from '../pages'
import NewEventPage from '../pages/newEvent'
import DefaultLayout from '../layouts/index'

describe('app tests', () => {
    afterEach(() => {
    })

    beforeEach(() => {
        useAxios.mockReturnValue([
            {
                data: []
            }
        ]);
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

    it('renders the description paragraphs', async () => {
        const { container } = render(<Homepage />);

        await waitFor(() => {
            const p1Dom = screen.getByTestId('description_paragraph1');
            expect(p1Dom).toBeInTheDocument();

            const p2Dom = screen.getByTestId('description_paragraph2');
            expect(p2Dom).toBeInTheDocument();
        })
    });

    it('renders the homepage embedded events', async () => {
        const { container } = render(<Homepage />);

        await waitFor(() => {
            const eventsDom = screen.getByTestId('embedded_events_wrapper');
            expect(eventsDom).toBeInTheDocument();
        })
    });

    it('renders a sample event in its entirety', async () => {
        useAxios.mockReturnValue([
            {
                data: [
                    {
                        id: 1,
                        title: 'Worship band for Sunday night service',
                        date: 'Sunday, July 3rd 5pm.',
                        description: 'List of people called to serve on the band.'
                    },
                    {
                        id: 2,
                        title: 'Bible study at Jonh\'s house',
                        date: 'Tuesday, July 5th 7pm.',
                        description: 'We are going to meet at Jonh\'s house this Tuesday to have a Bible study led by our pastor Roberto. After the study we will have our traditional tea time! Let us know you are coming so we can plan accordingly.'
                    },
                    {
                        id: 3,
                        title: 'Summer camp',
                        date: 'Friday, July 8th.',
                        description: 'We are going to have out annual summer camp starting this Friday. Please, confirm you are coming with us!'
                    }
                ]
            }
        ]);

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

    it('The Create New Event form contains a title field', async () => {
        const { container } = render(<NewEventPage />);

        await waitFor(() => {
            expect(screen.queryByTestId('title')).toBeInTheDocument()
        })
    });

    it('The Create New Event form contains a title field', async () => {
        const { container } = render(<NewEventPage />);

        await waitFor(() => {
            expect(screen.queryByTestId('title')).toBeInTheDocument()
        })
    });

    it('The Create New Event form contains a description textarea', async () => {
        const { container } = render(<NewEventPage />);

        await waitFor(() => {
            expect(screen.queryByTestId('description')).toBeInTheDocument()
        })
    });

    it('The Create New Event form contains a date picker', async () => {
        const { container } = render(<NewEventPage />);

        await waitFor(() => {
            expect(screen.queryByTestId('datePicker')).toBeInTheDocument()
        })
    });

    it('The Create New Event form contains a submission button', async () => {
        const { container } = render(<NewEventPage />);

        await waitFor(() => {
            expect(screen.queryByTestId('button')).toBeInTheDocument()
        })
    });

})
