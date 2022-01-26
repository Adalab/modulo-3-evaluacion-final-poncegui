import FilterCharacter from "./FilterCharacter";
import FilterHouse from "./FilterHouse";

const Filter = (props) => {
  return (
    <section>
      <form className="form" onSubmit={(ev) => ev.preventDefault()}>
        <FilterCharacter
          handleFilter={props.handleFilter}
          inputSearch={props.inputSearch}
        />
        <FilterHouse
          handleFilter={props.handleFilter}
          selectHouse={props.dataHouse}
        />
      </form>
    </section>
  );
};
export default Filter;
