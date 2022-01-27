const FilterCharacter = (props) => {
  const handleInput = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.currentTarget.value,
    });
  };

  return (
    <section className="form__input">
      <label className="form__label" htmlFor="name">
        Busca por personaje:
      </label>
      <input
        className="form__input--text"
        type="text"
        id="name"
        name="name"
        value={props.inputSearch}
        onChange={handleInput}
      />
    </section>
  );
};

export default FilterCharacter;
