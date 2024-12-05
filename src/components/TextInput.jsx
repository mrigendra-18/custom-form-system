

const TextInput = ({ label, name, value, placeholder, onChange, onBlur }) => {
  return (
    <div>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        aria-label={label}
      />
    </div>
  );
};

export default TextInput;
