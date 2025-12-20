export type NarratorTheme = {
  // Core terminal colors
  primary: string; // Main accent color (cursor, highlights, prompts)
  secondary: string; // Secondary accent (success messages, links)
  background: string; // Terminal background
  text: string; // Primary text color
  textMuted: string; // Secondary/dim text (comments, timestamps)
  line: string; // Border lines, separators

  // Terminal-specific colors
  cursor: string; // Blinking cursor color
  selection: string; // Text selection background
  prompt: string; // Shell prompt color ($ or >)
  command: string; // User input text color
  output: string; // Command output text
  error: string; // Error messages
  warning: string; // Warning messages
  success: string; // Success messages

  // Visual effects
  glow: string; // Text glow/shadow color
  glowIntensity: string; // CSS text-shadow value
};

export const narratorThemes: Record<string, NarratorTheme> = {
  // Stanley Parable - Windows 95 terminal aesthetic
  narrator: {
    primary: '#c0c0c0', // Windows 95 silver/gray for borders
    secondary: '#808080',
    background: '#000000', // Black terminal background
    text: '#00ff00', // Classic green terminal text
    textMuted: '#008800',
    line: '#c0c0c0', // Gray window borders

    cursor: '#00ff00',
    selection: '#00ff0040',
    prompt: '#00ff00',
    command: '#00ff00',
    output: '#00ff00',
    error: '#ff0000',
    warning: '#ffff00',
    success: '#00ff00',

    glow: 'none',
    glowIntensity: 'none',
  },
};

// Helper function to get current theme
export const getNarratorTheme = (narrator: keyof typeof narratorThemes): NarratorTheme => {
  return narratorThemes[narrator] || narratorThemes.narrator;
};
