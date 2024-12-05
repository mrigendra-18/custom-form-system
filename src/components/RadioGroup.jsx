

const RadioGroup = ({ label, name, value, options, onChange, onBlur }) => {
  return (
    <div>
      <label>{label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
            onBlur={onBlur}
          />
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
