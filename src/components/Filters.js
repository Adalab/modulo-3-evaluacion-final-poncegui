import filterCharacter from "./FilterCharacter";
import filterHouse from "./FilterHouse";

const filter = (props) => {
  return (
    <section>
      <form>
        <FilterName
          handleFilter={props.handleFilter}
          filterName={props.filterName}
        />
        <FilterGender
          handleFilter={props.handleFilter}
          filterGender={props.filterGender}
        />

        <FilterCity />
      </form>
    </section>
  );
};
export default filter;
