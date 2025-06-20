
import React, { useRef, useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Context/auth-context';
function OtpInputField() {
    const ctx =useContext(AuthContext1)
  const length = 6;
  const [otp, setOTP] = useState(Array(length).fill(''));
  const [timer, setTimer] = useState(32);
  const inputsRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (value, index) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <p className="text-gray-600 text-sm flex items-center gap-1">
        📧 <span>{ctx.email}</span>
      </p>

      <div className="flex gap-3">
        {Array.from({ length }).map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength="1"
            className="w-12 h-12 rounded-lg border border-gray-300 text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={otp[i]}
            ref={el => inputsRef.current[i] = el}
            onChange={e => handleChange(e.target.value, i)}
            onKeyDown={e => handleKeyDown(e, i)}
          />
        ))}
      </div>

      <p className="text-sm text-gray-500">Didn't receive the code?</p>
      <p className="text-sm text-gray-700">Resend in <span className="font-mono">0:{timer.toString().padStart(2, '0')}</span></p>
    </div>
  );
};




export default OtpInputField