import React, { useState } from 'react';

import DocumentSelection from './components/DocumentSelection';
import DocumentCapture from './components/DocumentCapture';
import DocumentReview from './components/DocumentReview';

import './App.css';

const STEP = {
  SELECT: 'select',
  CAPTURE: 'capture',
  REVIEW: 'review',
};

function App() {
  const [step, setStep] = useState(STEP.SELECT);
  const [docType, setDocType] = useState(null);
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const handleDocumentSelect = (type) => {
    setDocType(type);
    setStep(STEP.CAPTURE);
  };

  const handleCaptureComplete = (front, back) => {
    setFrontImage(front);
    setBackImage(back);
    setStep(STEP.REVIEW);
  };

  const handleSubmit = () => {
    // In a real application this would POST the data to a server.
    // Here we just show an alert and reset the flow.
    alert('本人確認書類を送信しました！');
    setDocType(null);
    setFrontImage(null);
    setBackImage(null);
    setStep(STEP.SELECT);
  };

  return (
    <div className="iv-container">
      {step === STEP.SELECT && (
        <DocumentSelection onSelect={handleDocumentSelect} />
      )}

      {step === STEP.CAPTURE && (
        <DocumentCapture
          docType={docType}
          onComplete={handleCaptureComplete}
          onBack={() => setStep(STEP.SELECT)}
        />
      )}

      {step === STEP.REVIEW && (
        <DocumentReview
          docType={docType}
          frontImage={frontImage}
          backImage={backImage}
          onRetake={() => setStep(STEP.CAPTURE)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
