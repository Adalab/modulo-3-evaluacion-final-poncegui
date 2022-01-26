import FilterCharacter from "./FilterCharacter";
import FilterHouse from "./FilterHouse";
import FilterGender from "./FilterGender";

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
        <FilterGender
          handleFilter={props.handleFilter}
          selectGender={props.dataGender}
        />
      </form>
    </section>
  );
};
export default Filter;
