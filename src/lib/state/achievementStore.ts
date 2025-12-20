type AchievementKey = 'terminal_exit_keyboard' | 'explored_all_settings' | 'found_secret_command';

const achievements: Record<AchievementKey, boolean> = {
  terminal_exit_keyboard: false,
  explored_all_settings: false,
  found_secret_command: false,
};

export function unlockAchievement(key: AchievementKey) {
  achievements[key] = true;
  console.log(`🏆 Achievement unlocked: ${key}`);
}

export function hasAchievement(key: AchievementKey) {
  return achievements[key] === true;
}
