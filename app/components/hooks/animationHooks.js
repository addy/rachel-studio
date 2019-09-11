import { useState, useEffect } from 'react';

export default (easingType = 'linear', duration = 500, delay = 0, halt = false) => {
  const [elapsed, setTime] = useState(0);

  const easing = {
    linear: n => n,
    elastic: n => n * (33 * n * n * n * n - 106 * n * n * n + 126 * n * n - 67 * n + 15)
  };

  useEffect(() => {
    let animationFrame;
    let timerStop;
    let start;

    const onFrame = () => {
      setTime(Date.now() - start);

      animationFrame = requestAnimationFrame(onFrame);
    };

    const onStart = () => {
      timerStop = setTimeout(() => {
        cancelAnimationFrame(animationFrame);

        setTime(Date.now() - start);
      }, duration);

      start = Date.now();
      animationFrame = requestAnimationFrame(onFrame);
    };

    const timerDelay = halt ? undefined : setTimeout(onStart, delay);

    return () => {
      clearTimeout(timerStop);
      clearTimeout(timerDelay);
      cancelAnimationFrame(animationFrame);
      setTime(0);
    };
  }, [duration, delay, halt]);

  const n = Math.min(1, elapsed / duration);
  return easing[easingType](n);
};
