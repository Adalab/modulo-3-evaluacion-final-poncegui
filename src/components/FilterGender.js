const FilterGender = (props) => {
  const handleGender = (ev) => {
    props.handleFilter({
      key: "gender",
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <label className="form__label " htmlFor="Gender">
        Selecciona género:
      </label>
      <select
        className="form__input-text"
        name="Gender"
        id="Gender"
        value={props.selectHouse}
        onChange={handleGender}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
    </>
  );
};
export default FilterGender;
