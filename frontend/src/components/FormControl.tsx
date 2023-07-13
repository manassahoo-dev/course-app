import { FormLabel, Input, FormControl as MuiFormControl } from '@mui/joy';
import { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  value: string;
  name: string;
  type?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const FormControl: React.FC<InputProps> = ({
  label,
  name,
  type,
  value = '',
  onChange,
  placeholder,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <MuiFormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </MuiFormControl>
  );
};

export default FormControl;
