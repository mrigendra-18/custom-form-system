import  {  useReducer } from 'react';
import FormField from './FormField';
import Button from './Button';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: { value: action.value, error: null },
      };
    case 'SET_ERROR':
      return {
        ...state,
        [action.field]: { ...state[action.field], error: action.error },
      };
    default:
      return state;
  }
};

const FormContainer = ({ config, onSubmit, onReset, formStyles }) => {
  const [formState, dispatch] = useReducer(formReducer, {});

  const handleFieldChange = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleBlur = (field, value, rules) => {
    if (rules.required && !value) {
      dispatch({ type: 'SET_ERROR', field, error: 'This field is required' });
    } else if (rules.pattern && !rules.pattern.test(value)) {
      dispatch({ type: 'SET_ERROR', field, error: 'Invalid format' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      {config.map((fieldConfig) => (
        <FormField
          key={fieldConfig.name}
          config={fieldConfig}
          value={formState[fieldConfig.name]?.value || ''}
          error={formState[fieldConfig.name]?.error}
          onChange={handleFieldChange}
          onBlur={handleBlur}
        />
      ))}
      <Button type="submit" label="Submit" />
      <Button type="button" label="Reset" onClick={onReset} />
    </form>
  );
};

export default FormContainer;
