let seen = false;
let decided = null;

export const PRELOADER_EASE = ".87,0,.13,1";

export const PRELOADER_BAND_DELAY = 0.1;
export const PRELOADER_BAND_DURATION = 0.4;

export const PRELOADER_COUNT_DELAY = 0.45;
export const PRELOADER_COUNT_DURATION = 0.65;

export const PRELOADER_OPEN_DELAY = 1.1;
export const PRELOADER_OPEN_DURATION = 0.4;
export const PRELOADER_HERO_SCALE_DURATION = 0.5;
export const PRELOADER_PROGRESS_FADE = 0.2;
export const PRELOADER_OVERLAY_HOLD = 0.1;

export const PRELOADER_COPY_BASE_DELAY = 1.25;
export const HOME_COPY_BASE_DELAY = 0.25;

export const HOME_COPY_OFFSETS = {
  header: 0.25,
  title: 0,
  ctas: 0,
};

export function shouldShowPreloader() {
  if (decided === null) decided = !seen;
  return decided;
}

export function markPreloaderSeen() {
  seen = true;
}

export function releasePreloaderVisit() {
  decided = null;
}
