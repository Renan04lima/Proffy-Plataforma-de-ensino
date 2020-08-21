import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  name, label, options, ...rest
}) => (
  <div className="select-block">
    <label htmlFor={name}>{label}</label>
    <select id={name} {...rest}>
      <option value="" disabled selected hidden>
        Selecione uma opção
      </option>
      {options.map((option) => (
        <option key/* Só o primeiro precisa, para o react consigui identifica os elemento na tela */={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
