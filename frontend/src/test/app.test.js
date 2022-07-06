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
import { fireEvent, render, screen } from '@testing-library/react';

import Homepage from '../pages'
import DefaultLayout from '../layouts/index'

test('renders the Homepage without crashing', () => {
    const { container } = render(<Homepage />);

    expect(screen.queryByTestId('homepage')).not.toBeEmptyDOMElement()
});

test('renders the Welcome message', () => {
    const { container } = render(<Homepage />);

    const greetDom = screen.getByText('Welcome to the Synaxis Platform');
    expect(greetDom).toBeInTheDocument();
});

test('renders the description paragraphs', () => {
    const { container } = render(<Homepage />);

    const p1Dom = screen.getByTestId('description_paragraph1');
    expect(p1Dom).toBeInTheDocument();

    const p2Dom = screen.getByTestId('description_paragraph2');
    expect(p2Dom).toBeInTheDocument();
});

test('renders the homepage embedded events', () => {
    const { container } = render(<Homepage />);

    const eventsDom = screen.getByTestId('embedded_events_wrapper');
    expect(eventsDom).toBeInTheDocument();
});

test('renders a sample event in its entirety', () => {
    const { container } = render(<Homepage />);

    const titleDom = screen.getByText('Worship band for Sunday night service');
    expect(titleDom).toBeInTheDocument();

    const dateDom = screen.getByText('Sunday, July 3rd 5pm.');
    expect(dateDom).toBeInTheDocument();

    const descriptionDom = screen.getByText('List of people called to serve on the band.');
    expect(descriptionDom).toBeInTheDocument();
});
