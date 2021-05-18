import game from './gameState';

const TICK_RATE = 3000;

async function init() {
  console.log('starting game');

  let nexTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nexTimeToTick <= now) {
      game.tick();
      nexTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);

}

init();
