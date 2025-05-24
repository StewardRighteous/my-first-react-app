export default function Input({ name, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <label htmlFor={name}>
      {name}
      <input type="text" id={name} onChange={handleChange} />
    </label>
  );
}
