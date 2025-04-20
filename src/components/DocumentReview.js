import React, { useState, useEffect } from 'react';

import './DocumentReview.css';

function DocumentReview({ docType, frontImage, backImage, onRetake, onSubmit }) {
  const [valid, setValid] = useState(false);
  const [clear, setClear] = useState(false);

  const canSubmit = valid && clear;

  useEffect(() => {
    // reset if component re‑mounts
    setValid(false);
    setClear(false);
  }, [frontImage, backImage]);

  return (
    <div className="doc-rev">
      <h2 className="doc-rev__title">本人確認書類の提出</h2>
      <p className="doc-rev__hint">
        顔写真が写っている面、文字が鮮明に取れるように書類全体を撮影してください。
      </p>

      <div className="doc-rev__block">
        <img src={frontImage.url} alt="front" className="doc-rev__img" />
        <button className="doc-rev__retake" onClick={onRetake}>
          オモテ面を撮り直す
        </button>
      </div>

      <div className="doc-rev__block">
        <img src={backImage.url} alt="back" className="doc-rev__img" />
        <button className="doc-rev__retake" onClick={onRetake}>
          ウラ面を撮り直す
        </button>
      </div>

      <ul className="doc-rev__checklist">
        <li>
          <label>
            <input
              type="checkbox"
              checked={valid}
              onChange={(e) => setValid(e.target.checked)}
            />{' '}
            <span className="required">※必須</span> 有効期限内である
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={clear}
              onChange={(e) => setClear(e.target.checked)}
            />{' '}
            <span className="required">※必須</span> 記載されている文字が鮮明である
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" checked readOnly />{' '}
            <span className="required">※必須</span> 裏面も撮影してある
          </label>
        </li>
      </ul>

      <button
        className="btn-primary doc-rev__submit"
        disabled={!canSubmit}
        onClick={onSubmit}
      >
        提出
      </button>
    </div>
  );
}

export default DocumentReview;
