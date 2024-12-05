

const DateInput = ({ label, name, value, onChange, onBlur }) => {
  return (
    <div>
      <input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default DateInput;
