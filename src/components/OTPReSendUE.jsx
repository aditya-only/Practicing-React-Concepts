import React, { useState, useEffect } from "react";

const OTPReSendUE = () => {
  const [timer, setTimer] = useState(10);
  const [canResend, setCanResend] = useState(false);
  const [verification, setVerification] = useState(false);
  const [otp, setOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");

  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);

      const generatedOtp = Math.floor(
        100000 + Math.random() * 900000
      ).toString();

      setOtp(generatedOtp);
      alert(`Your OTP is ${generatedOtp}`);

      return;
    }

    const timeout = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer]);

  const handleResend = () => {
    setTimer(10);
    setCanResend(false);
    setVerification(false);
    setUserOtp("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userOtp === otp) {
      setVerification(true);
    } else {
      setVerification(false);
      alert("Invalid OTP");
    }
  };

  return (
    <section>
      <div style={{ padding: "20px" }}>
        <h2>Enter OTP</h2>
        <p>OTP sent to your phone 📱</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            maxLength={6}
            value={userOtp}
            onChange={(e) => setUserOtp(e.target.value)}
            style={{ padding: "8px", fontSize: "20px" }}
          />

          <button type="submit">Submit</button>
        </form>

        <div style={{ marginTop: "20px" }}>
          {canResend ? (
            <button onClick={handleResend}>Resend OTP</button>
          ) : (
            <p style={{ color: "grey" }}>
              Resend OTP in {timer} seconds
            </p>
          )}
        </div>

        <div style={{ marginTop: "20px" }}>
          {verification ? (
            <p style={{ color: "green" }}>OTP Verified ✅</p>
          ) : (
            <p>Enter OTP</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OTPReSendUE;