

const Switch = ({ label, name, value, onChange, onBlur }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="checkbox"
        name={name}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Switch;
