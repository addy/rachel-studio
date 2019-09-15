import React, { useState, useEffect } from 'react';
import { useStateValue } from '../hooks/State';

const Alert = () => {
  const [{ alert, alertTitle, alertMessage }, dispatch] = useStateValue();
  const [color, setColor] = useState(undefined);

  useEffect(() => {
    if (alert) {
      setColor(alert === 'success' ? 'green' : 'red');
    }
  }, [alert]);

  return alert ? (
    // tailwindcss: bg-green-100 bg-red-100 border border-green-400 border-red-400 text-green-700 text-red-700 text-green-500 text-red-500 px-4 py-3 mb-5
    <div
      className={`container mx-auto rounded relative top-0 close flex items-center justify-between w-full px-4 py-3 shadow bg-${color}-100 border border-${color}-400 text-${color}-700`}
      role="alert"
    >
      <span className="block sm:inline">
        <strong className="font-bold">{alertTitle}</strong>
        {` ${alertMessage}`}
      </span>
      <button
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
        onClick={() => dispatch({ type: 'hideAlert' })}
        type="button"
      >
        <svg
          className={`fill-current h-6 w-6 text-${color}-500`}
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </button>
    </div>
  ) : (
    <div />
  );
};

export default Alert;
