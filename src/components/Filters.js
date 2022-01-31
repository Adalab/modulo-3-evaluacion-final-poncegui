import FilterCharacter from "./FilterCharacter";
import FilterHouse from "./FilterHouse";
import FilterGender from "./FilterGender";
import FilterActor from "./FilterActor";

const Filter = (props) => {
  return (
    <section className="form">
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
        <FilterActor
          handleFilter={props.handleFilter}
          selectActor={props.dataActor}
        />
      </form>
      <button
        className="form__btnReset"
        type="submit"
        onClick={props.handleResetBtn}
      >
        reset
      </button>
    </section>
  );
};
export default Filter;
