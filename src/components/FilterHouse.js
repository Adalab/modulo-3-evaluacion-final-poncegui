const FilterHouse = (props) => {
  const handleHouse = (ev) => {
    props.handleFilter({
      key: "house",
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <label className="form__label " htmlFor="House">
        Selecciona la casa:
      </label>
      <select
        className="form__input--text"
        name="House"
        id="House"
        value={props.selectHouse}
        onChange={handleHouse}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </>
  );
};
export default FilterHouse;
