import { render, screen } from '@testing-library/react';
import Profile from './Profile';
import { describe, it, expect } from 'vitest';


describe('Profile Component Timeline', () => {
    it('renders all timeline years initially', () => {
        render(<Profile />);
        expect(screen.getByText('2022')).toBeInTheDocument();
        expect(screen.getByText('2023')).toBeInTheDocument();
        expect(screen.getByText('2024')).toBeInTheDocument();
        expect(screen.getByText('2025')).toBeInTheDocument();
    });

    it('renders multiple links for timeline items', () => {
        render(<Profile />);

        // 2022 Item Link
        expect(screen.getByText('View Project')).toBeInTheDocument();
        expect(screen.getByText('View Project').closest('a')).toHaveAttribute('href', 'https://justuhbeginner.github.io/historical-timeline/');

        // 2023 Item Links
        expect(screen.getByText('Project Jollibee')).toBeInTheDocument();
        expect(screen.getByText('Daily Time Record')).toBeInTheDocument();
    });


});
