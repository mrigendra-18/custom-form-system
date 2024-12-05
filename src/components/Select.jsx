

const Select = ({ label, name, value, options, onChange, onBlur }) => {
  return (
    <div>
      <select name={name} value={value} onChange={onChange} onBlur={onBlur}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
