
import TextInput from './TextInput';
import TextArea from './TextArea';
import Select from './Select';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';
import Switch from './Switch';
import DateInput from './DateInput';
import ValidationMessage from './ValidationMessage';

const FormField = ({ config, value, error, onChange, onBlur }) => {
  const handleChange = (e) => {
    onChange(config.name, e.target.value);
  };

  const handleBlur = (e) => {
    onBlur(config.name, e.target.value, config.validation);
  };

  let fieldComponent = null;

  switch (config.type) {
    case 'text':
      fieldComponent = <TextInput {...config} value={value} onChange={handleChange} onBlur={handleBlur} />;
      break;
    case 'textarea':
      fieldComponent = <TextArea {...config} value={value} onChange={handleChange} onBlur={handleBlur} />;
      break;
    case 'select':
      fieldComponent = <Select {...config} value={value} onChange={handleChange} onBlur={handleBlur} />;
      break;
    case 'checkbox':
      fieldComponent = <CheckboxGroup {...config} value={value} onChange={handleChange} onBlur={handleBlur} />;
      break;
    case 'radio':
      fieldComponent = <RadioGroup {...config} value={value} onChange={handleChange} onBlur={handleBlur} />;
      break;
    case 'switch':
      fieldComponent = <Switch {...config} value={value} onChange={handleChange} onBlur={handleBlur} />;
      break;
    case 'date':
      fieldComponent = <DateInput {...config} value={value} onChange={handleChange} onBlur={handleBlur} />;
      break;
    default:
      break;
  }

  return (
    <div>
      <label>{config.label}</label>
      {fieldComponent}
      {error && <ValidationMessage message={error} />}
    </div>
  );
};

export default FormField;
