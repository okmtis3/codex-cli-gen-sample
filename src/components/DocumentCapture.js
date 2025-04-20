import React, { useState } from 'react';

import './DocumentCapture.css';

function DocumentCapture({ docType, onComplete, onBack }) {
  const [front, setFront] = useState(null);
  const [back, setBack] = useState(null);

  const handleFile = (e, setter) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setter({ file, url });
  };

  const ready = front && back;

  return (
    <div className="doc-cap">
      <h2 className="doc-cap__title">本人確認書類の提出</h2>
      <p className="doc-cap__hint">
        顔写真が写っている面、文字が鮮明に取れるように書類全体を撮影してください。
      </p>

      <div className="doc-cap__block">
        {front ? (
          <img src={front.url} alt="front" className="doc-cap__img" />
        ) : (
          <label className="doc-cap__placeholder">
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={(e) => handleFile(e, setFront)}
              hidden
            />
            オモテ面を撮影する
          </label>
        )}
      </div>

      <div className="doc-cap__block">
        {back ? (
          <img src={back.url} alt="back" className="doc-cap__img" />
        ) : (
          <label className="doc-cap__placeholder">
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={(e) => handleFile(e, setBack)}
              hidden
            />
            ウラ面を撮影する
          </label>
        )}
      </div>

      <div className="doc-cap__buttons">
        <button className="btn-secondary" onClick={onBack}>
          戻る
        </button>
        <button
          className="btn-primary"
          disabled={!ready}
          onClick={() => onComplete(front, back)}
        >
          次へ
        </button>
      </div>
    </div>
  );
}

export default DocumentCapture;
