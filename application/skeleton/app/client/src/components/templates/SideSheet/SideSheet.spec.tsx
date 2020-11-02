import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SideSheet from './SideSheet';

describe(SideSheet, () => {
  const setup = (props = {}) =>
    render(
      <SideSheet dismissHandler={jest.fn()} dismissLabel="Dismiss sidesheet" {...props}>
        <div>
          Some content would be here
          <button type="button" data-focusable>
            Focusable button
          </button>
        </div>
      </SideSheet>
    );

  describe('When: sidesheet is rendered', () => {
    it('Then: it marks overlay as a presentation-only element', () => {
      const { getByRole } = setup();
      expect(getByRole('presentation', { hidden: true })).toBeInTheDocument();
    });

    it('And: it renders a close button', () => {
      const { getByLabelText } = setup();
      expect(getByLabelText('Dismiss sidesheet')).toBeInTheDocument();
    });
  });

  describe('When: sidesheet is not visible', () => {
    it('Then: it marks sidesheet as hidden', () => {
      const { getByText } = setup();
      const element = getByText('Some content would be here');
      expect(element.closest('.sidesheet')).toHaveAttribute('aria-hidden', 'true');
    });

    it('And: it marks overlay as hidden', () => {
      const { getByRole } = setup();
      expect(getByRole('presentation', { hidden: true })).toHaveAttribute('aria-hidden', 'true');
    });

    it('And: it disables the close button', () => {
      const { getByLabelText } = setup();
      expect(getByLabelText('Dismiss sidesheet')).toBeDisabled();
    });

    it("And: it doesn't call dismiss handler when overlay is clicked", () => {
      const dismissHandler = jest.fn();
      const { getByRole } = setup({ dismissHandler });
      userEvent.click(getByRole('presentation', { hidden: true }));
      expect(dismissHandler).not.toHaveBeenCalled();
    });

    it("And: it doesn't call dismiss handler when close button is clicked", () => {
      const dismissHandler = jest.fn();
      const { getByLabelText } = setup({ dismissHandler });
      userEvent.click(getByLabelText('Dismiss sidesheet'));
      expect(dismissHandler).not.toHaveBeenCalled();
    });
  });

  describe('When: sidesheet is visible', () => {
    it('Then: it marks sidesheet as not hidden', () => {
      const { getByText } = setup({ isVisible: true, alignment: 'left' });
      const element = getByText('Some content would be here');
      expect(element.closest('.sidesheet')).toHaveAttribute('aria-hidden', 'false');
    });

    it("And: it doesn't override focusable behaviour of focusable elements inside sidesheet", () => {
      const { container } = setup({ isVisible: true });
      expect(container.querySelector('button')).not.toHaveAttribute('tabindex');
    });

    it('And: it renders an overlay', () => {
      const { getByRole } = setup({ isVisible: true });
      expect(getByRole('presentation')).toHaveAttribute('aria-hidden', 'false');
    });

    it('And: it calls dismiss handler when overlay is clicked', () => {
      const dismissHandler = jest.fn();
      const { getByRole } = setup({ isVisible: true, dismissHandler });
      userEvent.click(getByRole('presentation'));
      expect(dismissHandler).toHaveBeenCalledTimes(1);
    });

    it('And: it calls dismiss handler when close button is clicked', () => {
      const dismissHandler = jest.fn();
      const { getByLabelText } = setup({ isVisible: true, dismissHandler });
      userEvent.click(getByLabelText('Dismiss sidesheet'));
      expect(dismissHandler).toHaveBeenCalledTimes(1);
    });
  });
});
