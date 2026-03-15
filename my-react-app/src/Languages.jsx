/*
    dropdown menu for languages
    -English
    -Indonesian
    -Japanese
    use userState to manage the state of the dropdown menu
*/
import { useState } from 'react';

const languages = [
  { value: 'English', label: 'English' },
  { value: 'Indonesian', label: 'Bahasa Indonesia' },
  { value: 'Japanese', label: '日本語' },
];

function Languages() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelectedLanguage(value);
    setIsOpen(false);
  };

  const selectedLabel = languages.find(l => l.value === selectedLanguage)?.label;

  return (
    <div className="languages">
      <div className="custom-select" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedLabel}</span>
        <span className="arrow">▾</span>
      </div>
      {isOpen && (
        <ul className="select-options">
          {languages.map((lang) => (
            <li
              key={lang.value}
              className={lang.value === selectedLanguage ? 'selected' : ''}
              onClick={() => handleSelect(lang.value)}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Languages;