

const CheckboxGroup = ({ label, name, value, options, onChange, onBlur }) => {
  const handleChange = (e) => {
    const selectedOptions = [...value];
    if (e.target.checked) {
      selectedOptions.push(e.target.value);
    } else {
      const index = selectedOptions.indexOf(e.target.value);
      if (index !== -1) {
        selectedOptions.splice(index, 1);
      }
    }
    onChange(name, selectedOptions);
  };

  return (
    <div>
      <label>{label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            name={name}
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
