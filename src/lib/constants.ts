/**
 * Application constants following clean architecture principles
 * Centralized configuration for consistent behavior across components
 */

// ===========================
// APP CONFIGURATION
// ===========================

export const APP_CONFIG = {
  TYPING_SPEED: 50,
  TERMINAL_DELAYS: {
    BOOT: 2000,
    COMMAND: 1500,
    RESPONSE: 800,
  },
  NARRATOR_IDLE_TIMEOUT: 20000, // 20 seconds
  BREAKPOINTS: {
    SMALL_SCREEN: 768,
    MEDIUM_SCREEN: 1024,
    LARGE_SCREEN: 1280,
  },
} as const;

// ===========================
// THEME COLORS (CSS Custom Properties)
// ===========================

export const THEME_COLORS = {
  // Core colors
  background: 'var(--color-background)',
  surface: 'var(--color-surface)',
  surfaceElevated: 'var(--color-surface-elevated)',
  text: 'var(--color-text)',
  textMuted: 'var(--color-text-muted)',
  textSubtle: 'var(--color-text-subtle)',
  line: 'var(--color-line)',
  border: 'var(--color-border)',

  // Brand colors
  primary: 'var(--color-primary)',
  primaryHover: 'var(--color-primary-hover)',
  secondary: 'var(--color-secondary)',
  accent: 'var(--color-accent)',
  accentHover: 'var(--color-accent-hover)',

  // State colors
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  error: 'var(--color-error)',
  info: 'var(--color-info)',

  // Special colors
  softWhite: 'var(--color-soft-white)',
  terminalBg: 'var(--color-terminal-bg)',
  terminalText: 'var(--color-terminal-text)',
  terminalPrompt: 'var(--color-terminal-prompt)',

  // Character colors
  stanleyYellow: 'var(--color-stanley-yellow)',
} as const;

// ===========================
// TERMINAL COMMANDS
// ===========================

export const TERMINAL_COMMANDS = {
  // Navigation
  HELP: 'help',
  CLEAR: 'clear',
  EXIT: 'exit',

  // Git commands
  STATUS: 'git status',
  LOG: 'git log',
  BRANCH: 'git branch',
  CHECKOUT: 'git checkout',
  COMMIT: 'git commit',
  PUSH: 'git push',
  PULL: 'git pull',
  MERGE: 'git merge',

  // System commands
  LS: 'ls',
  CD: 'cd',
  PWD: 'pwd',
  CAT: 'cat',

  // Special commands
  OPTIONS: 'options',
  SETTINGS: 'settings',
} as const;

// ===========================
// PORTFOLIO IDENTIFIER
// ===========================

export const PORTFOLIO_ID = 'room-427' as const;

// ===========================
// CHARACTER THEME
// ===========================

export const CHARACTER_THEME = 'theme-stanley' as const;

// ===========================
// TERMINAL THEMES
// ===========================

export const TERMINAL_THEMES = {
  CLASSIC: 'terminal-theme-classic',
  AMBER: 'terminal-theme-amber',
  BLUE: 'terminal-theme-blue',
} as const;

// ===========================
// ANIMATION DURATIONS
// ===========================

export const ANIMATION_DURATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  VERY_SLOW: 1000,
} as const;

// ===========================
// RESPONSIVE BREAKPOINTS
// ===========================

export const RESPONSIVE_BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;

// ===========================
// Z-INDEX SCALE
// ===========================

export const Z_INDEX = {
  BASE: 1,
  DROPDOWN: 10,
  OVERLAY: 20,
  MODAL: 30,
  TOOLTIP: 40,
  TOAST: 50,
} as const;

// ===========================
// KEYBOARD SHORTCUTS
// ===========================

export const KEYBOARD_SHORTCUTS = {
  ESCAPE: 'Escape',
  ENTER: 'Enter',
  SPACE: ' ',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
} as const;

// ===========================
// LOCAL STORAGE KEYS
// ===========================

export const STORAGE_KEYS = {
  THEME: 'theme',
  USER_PROGRESS: 'user-progress',
  SETTINGS: 'settings',
  ACHIEVEMENTS: 'achievements',
} as const;
