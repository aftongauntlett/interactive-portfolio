import { useSimulationStore } from '@/lib/state/simulationStore';
import { useNarrator } from '@/hooks/useNarrator';
import { useEffect, useState } from 'react';

/**
 * NarratorOverlay displays the Stanley Parable-style narrator text
 * in a bottom-center overlay, matching the game's visual style.
 */
export default function NarratorOverlay() {
  const { phase, currentNarratorText, turnOnMonitor } = useSimulationStore();
  const [narratorStarted, setNarratorStarted] = useState(false);

  // Define narrator sequences for each phase
  const narratorSequences: Record<string, string[]> = {
    'phone-active': [
      'This is the story of a girl named Afton.',
      "Afton worked for a company in a big building where she was employee #428",
      'Employee # 428’s job was simple, she sat at her desk in room 428 and he pushed buttons on a keyboard.',
    ],
    'monitor-active': [
      'Orders came to her through a monitor on her desk, telling her what buttons to push, how long to push them, and in what order.',
      'This is what employee 428 did every day of every month of every year, and although others might have considered it soul rending, Afton relished every moment that the orders came in, as though she had been made exactly for this job.',
    ],
    'terminal-breakout': [
      'TBD: Narrator text for terminal breakout phase.',
      'TBD: Narrator text for terminal breakout phase.',
      "TBD: Narrator text for terminal breakout phase.",
      "TBD: Narrator text for terminal breakout phase.",
    ],
    'terminal-restore': [
      'TBD: Narrator text for terminal restore phase.',
      "TBD: Narrator text for terminal restore phase.",
    ],
    'settings-active': [
      "TBD: Narrator text for settings phase.",
      "TBD: Narrator text for settings phase.",
    ],
  };

  const currentSequence = narratorSequences[phase] || [];

  // Start narrator when specific phases are triggered
  useEffect(() => {
    if (
      currentNarratorText &&
      (phase === 'phone-active' || phase === 'terminal-breakout' || phase === 'terminal-restore') &&
      !narratorStarted
    ) {
      setNarratorStarted(true);
    }
  }, [currentNarratorText, phase, narratorStarted]);

  // Reset when phase changes
  useEffect(() => {
    setNarratorStarted(false);
  }, [phase]);

  const narrator = useNarrator({
    lines: currentSequence,
    isActive: narratorStarted,
    onComplete: () => {
      if (phase === 'phone-active') {
        setTimeout(() => {
          turnOnMonitor();
        }, 500);
      }
    },
  });

  // Only show when narrator has started
  if (!narratorStarted || currentSequence.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-20 flex items-end justify-center pb-32">
      <div
        className="bg-black/80 text-white px-8 py-4 rounded-lg max-w-4xl mx-4 border border-gray-600 pointer-events-auto cursor-pointer"
        style={{
          fontFamily: 'inherit',
          fontSize: '18px',
          lineHeight: '1.4',
          textAlign: 'center',
          backdropFilter: 'blur(4px)',
        }}
        onClick={narrator.advanceToNext}
      >
        <p className="font-semibold leading-none lg:leading-relaxed">
          {narrator.displayText}
          {narrator.isTyping && <span className="animate-blink">|</span>}
        </p>
        {narrator.showContinuePrompt && !narrator.isTyping && (
          <p className="text-gray-300 text-sm mt-3 opacity-75">Click or press a key to continue</p>
        )}
      </div>
    </div>
  );
}
