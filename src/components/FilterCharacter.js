const filterCharacter = (props) => {
  const handleInput = (ev) => {
    props.handleChangeFilter({
      value: ev.target.value,
      id: "name",
    });
  };

  return (
    <>
      <label className="form" htmlFor="name">
        Buscar personaje:
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        key="name"
        placeholder="Ej. Scorpius"
        value={props.searchName}
        onChange={handleInput}
      />
    </>
  );
};

export default filterCharacter;
