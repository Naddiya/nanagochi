import initButtons from './buttons';
import game, { handleUserAction } from "./gameState";
import { TICK_RATE } from './constants';

async function init() {
  initButtons(handleUserAction);

  let nexTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nexTimeToTick <= now) {
      game.tick();
      nexTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();

}

init();
