import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import Icon from '../UI/Icon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  icon?: string;
}

function Input({ icon, type, placeholder }: InputProps) {
  return (
    <div className='input-wrapper'>
      <input type={type} placeholder={placeholder} />
      {icon && <Icon>{icon}</Icon>}
    </div>
  );
}

export default Input;
