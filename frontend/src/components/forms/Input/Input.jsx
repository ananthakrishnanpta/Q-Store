
const Input = ({
    name,
    type = "text",
    label,
    value,
    onChange,
    placeholder = "",
    required = false,
    disabled = false,
}) => {
    return (
        <div className="input-group">
            {label && (
                <label htmlFor={name}>
                    {label}
                </label>
            )}

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
            />
        </div>
    );
};

export default Input;
