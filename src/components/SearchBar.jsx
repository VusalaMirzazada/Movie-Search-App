function SearchBar( { value, onChange}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Film axtar..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;