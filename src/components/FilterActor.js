const FilterActor = (props) => {
  const handleInput = (ev) => {
    props.handleFilter({
      key: "actor",
      value: ev.currentTarget.value,
    });
  };

  return (
    <section className="form__input">
      <label className="form__label" htmlFor="name">
        Busca por actor:
      </label>
      <input
        className="form__label--select "
        type="text"
        id="actor"
        name="actor"
        value={props.dataActor}
        onChange={handleInput}
        placeholder="Ej: Severus Snape"
      />
    </section>
  );
};

export default FilterActor;
