

const TextArea = ({ label, name, value, placeholder, onChange, onBlur }) => {
  return (
    <div>
      <textarea
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

export default TextArea;
