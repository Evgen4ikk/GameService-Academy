import { Select } from 'antd';

const { Option } = Select;

interface SelectProps {
  placeholder: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export const CustomSelect = (props: SelectProps) => {
  const { placeholder, options, onChange } = props;

  return (
    <Select
      style={{ width: '150px'}}
      placeholder={placeholder}
      onChange={onChange}
    >
      {options.map(option => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default CustomSelect;
