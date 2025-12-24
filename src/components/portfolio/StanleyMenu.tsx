import { type JSX, useState } from 'react';
import { useSimulationStore } from '@/lib/state/simulationStore';
import { cn, TRANSITION_FAST } from '@/constants/styles';
import SettingsModal from './settings/SettingsModal';

/**
 * Menu item component with Stanley Parable styling
 */
function MenuItem({
  label,
  onClick,
  disabled = false,
}: {
  label: string | JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const baseStyles = cn(
    'text-left font-oswald text-4xl font-semibold leading-[1.05]',
    TRANSITION_FAST,
    'transform scale-y-110 scale-x-92' // Stanley Parable text distortion
  );

  if (disabled) {
    return (
      <span className={cn(baseStyles, 'text-[var(--color-text-muted)] cursor-default')}>
        {label}
      </span>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        baseStyles,
        'text-[var(--color-text)] hover:brightness-125',
        'focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]',
        'focus-visible:outline-offset-2'
      )}
      aria-label={typeof label === 'string' ? label : 'Menu option'}
    >
      {label}
    </button>
  );
}

export interface StanleyMenuProps {
  terminalStarted: boolean;
  setTerminalStarted: (val: boolean) => void;
}

/**
 * Main menu component for the Stanley Parable portfolio experience
 * Handles portfolio exploration state and user interactions
 */
export default function StanleyMenu({ terminalStarted, setTerminalStarted }: StanleyMenuProps) {
  const [showOptions, setShowOptions] = useState(false);
  const { phase, startSimulation, openSettings } = useSimulationStore();

  /**
   * Handles starting the portfolio experience
   */
  const handleBeginSimulation = () => {
    if (phase === 'idle') {
      startSimulation();
      // Maintain backward compatibility with terminal state
      if (!terminalStarted) {
        setTerminalStarted(true);
      }
    }
  };

  /**
   * Handles opening settings modal or in-experience settings
   */
  const handleOpenSettings = () => {
    if (phase === 'monitor-active') {
      // In-experience settings (part of the narrative)
      openSettings();
    } else {
      // Pre-experience options modal
      setShowOptions(true);
    }
  };

  /**
   * Returns appropriate button label based on current phase
   */
  const getButtonLabel = (): string => {
    switch (phase) {
      case 'idle':
        return 'Begin the Game';
      case 'phone-active':
        return 'Answer the phone...';
      case 'monitor-active':
        return 'In Progress…';
      case 'settings-active':
        return 'Exploring settings...';
      case 'assessment':
        return 'Exploration in progress...';
      case 'complete':
        return 'Complete';
      default:
        return terminalStarted ? 'In progress...' : 'Begin the Game';
    }
  };

  /**
   * Determines if main button should be disabled
   */
  const isButtonDisabled = (): boolean => {
    return phase !== 'idle' && phase !== 'complete';
  };

  return (
    <>
      <nav
        className="flex flex-col gap-6 text-[var(--color-text)]"
        aria-label="Stanley Parable portfolio menu"
        role="navigation"
      >
        <MenuItem
          label={getButtonLabel()}
          onClick={handleBeginSimulation}
          disabled={isButtonDisabled()}
        />
        <MenuItem label="Options" onClick={handleOpenSettings} />
        <MenuItem label="Projects" disabled />
      </nav>

      {/* Options Modal */}
      {showOptions && <SettingsModal onClose={() => setShowOptions(false)} />}
    </>
  );
}
