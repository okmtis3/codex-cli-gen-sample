import React from 'react';

import './DocumentSelection.css';

const documents = [
  {
    id: 'my_number',
    title: 'マイナンバーカード',
    description: '表面と裏面が必要',
    emoji: '💳',
  },
  {
    id: 'passport',
    title: 'パスポート',
    description: '顔写真ページと所持人記入欄が必要',
    emoji: '🛂',
  },
];

function DocumentSelection({ onSelect }) {
  return (
    <div className="doc-select">
      <h1 className="doc-select__title">本人確認</h1>
      <ul className="doc-select__list">
        {documents.map((doc) => (
          <li
            key={doc.id}
            className="doc-select__item"
            onClick={() => onSelect(doc.id)}
          >
            <span className="doc-select__emoji" role="img" aria-label={doc.title}>
              {doc.emoji}
            </span>
            <div className="doc-select__info">
              <div className="doc-select__name">{doc.title}</div>
              <div className="doc-select__desc">{doc.description}</div>
            </div>
            <span className="doc-select__arrow">›</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentSelection;
