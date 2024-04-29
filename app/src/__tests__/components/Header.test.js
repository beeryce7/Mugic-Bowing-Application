import { render, screen } from '@testing-library/react';
import Header from '../../components/home/Header';

describe('Header', () => {
    test('renders the header with logo, navigation items, and professor name', () => {
        render(<Header />);

        const logoElement = screen.getByText('μ');
        expect(logoElement).toBeInTheDocument();

        const recordItem = screen.getByText('Record');
        const filesItem = screen.getByText('Files');
        const settingsItem = screen.getByText('Settings');
        expect(recordItem).toBeInTheDocument();
        expect(filesItem).toBeInTheDocument();
        expect(settingsItem).toBeInTheDocument();

        const professorName = screen.getByText('Professsor Kimura');
        expect(professorName).toBeInTheDocument();
    });
});