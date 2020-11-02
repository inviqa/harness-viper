/** @jsx jsx */
import { FunctionComponent, useEffect, useCallback } from 'react';
import { CgClose as CloseIcon } from 'react-icons/cg';
import { jsx, Box, IconButton } from 'theme-ui';
import cx from 'classnames';
import { FocusOn } from 'react-focus-on';

export type Props = React.HTMLAttributes<HTMLElement> & {
  isVisible?: boolean;
  alignment?: 'left' | 'right';
  dismissHandler: () => void;
  dismissLabel: string;
  dismissInline?: boolean;
};

const SideSheet: FunctionComponent<Props> = ({
  alignment = 'right',
  isVisible = false,
  dismissHandler,
  dismissLabel,
  className,
  children,
  ...props
}) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        dismissHandler();
      }
    },
    [dismissHandler]
  );

  useEffect(() => {
    if (isVisible) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return (): void => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, handleKeyDown]);

  return (
    <FocusOn enabled={isVisible} autoFocus={false}>
      <Box
        role="presentation"
        aria-hidden={!isVisible}
        className="sidesheet-overlay"
        onClick={isVisible ? dismissHandler : undefined}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 12,
          background: 'rgba(0, 0, 0, 0.75)',
          transitionProperty: 'opacity, visibility',
          transitionDuration: '0.25s',
          transitionTimingFunction: 'linear',
          opacity: 1,
          '&[aria-hidden="true"]': {
            opacity: 0,
            visibility: 'hidden'
          },
          '@media screen and (prefers-reduced-motion: reduce)': {
            transition: 'none'
          }
        }}
      />

      <section
        className={cx('sidesheet', className)}
        aria-hidden={!isVisible}
        sx={{
          position: 'fixed',
          top: 0,
          ...(alignment === 'left' ? { left: 0 } : { right: 0 }),
          zIndex: 20,
          width: 'calc(100% - 55px)',
          height: '100%',
          pb: 4,
          maxWidth: [null, '30rem'],
          bg: 'background',
          transitionProperty: 'transform, visibility',
          transitionDuration: '0.25s',
          transitionTimingFunction: 'linear',
          transform: 'translateX(0)',
          visibility: 'visible',
          '&[aria-hidden="true"]': {
            visibility: 'hidden',
            transform: alignment === 'left' ? 'translateX(-100%)' : 'translateX(100%)'
          },
          '@media screen and (prefers-reduced-motion: reduce)': {
            transition: 'none'
          }
        }}
        {...props}
      >
        <Box sx={{ height: '100%', overflowY: 'scroll' }}>{children}</Box>

        <IconButton
          aria-label={dismissLabel}
          disabled={!isVisible}
          onClick={dismissHandler}
          className="sidesheet__close"
          sx={{
            position: 'absolute',
            top: 2,
            ...(alignment === 'left'
              ? { right: '-0.5rem', transform: 'translateX(100%)' }
              : { left: '-0.5rem', transform: 'translateX(-100%)' }),
            zIndex: 15,
            width: '2.5rem',
            height: '2.5rem',
            color: 'background',
            bg: 'transparent',
            '& svg': {
              width: 30,
              height: 30
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </section>
    </FocusOn>
  );
};

export default SideSheet;
