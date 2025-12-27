import { DifficultyLevel } from './types'; // Corrected import path

export const TIMED_CHALLENGE_DURATION_SECONDS = 120; // 2 minutes (default)
export const MIN_TIMED_DURATION_SECONDS = 60; // 1 minute
export const MAX_TIMED_DURATION_SECONDS = 600; // 10 minutes

export const MAX_SCORE = 100;
// Target for 100 points in a standard 2-minute timed game. This will be scaled for custom durations.
export const TARGET_CORRECT_ANSWERS_FOR_MAX_SCORE = 30; 
export const PRACTICE_FEEDBACK_DELAY_MS = 1500; // Delay before showing next question in practice after feedback

export const DIFFICULTY_LEVELS: DifficultyLevel[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Extended to 10 levels
export const DEFAULT_DIFFICULTY_LEVEL: DifficultyLevel = 3;

// Constants for History and Personalization
export const MAX_HISTORY_ITEMS = 100; // Max number of problems to store in history
export const HISTORY_ITEMS_TO_ANALYZE = 50; // Number of recent items to analyze for personalization
export const HISTORY_CORRECTNESS_THRESHOLD_WEAK = 0.6; // Below this % is considered a weak area (60%)
export const HISTORY_WEAKNESS_FOCUS_PROBABILITY = 0.4; // 40% chance to focus on a weak area if one exists

// Constants for Sound Settings
export const SOUND_STORAGE_KEY = 'jeeIntelligenceSoundEnabled';
export const DEFAULT_SOUND_ENABLED = true;
export const VOLUME_STORAGE_KEY = 'jeeIntelligenceVolume';
export const DEFAULT_VOLUME = 0.5; // Default volume (0.0 to 1.0)
export const MIN_VOLUME = 0.0;
export const MAX_VOLUME = 1.0;

// Constant for Exam Target Date storage
export const EXAM_TARGET_DATE_STORAGE_KEY = 'jeeIntelligenceExamTargetDate';