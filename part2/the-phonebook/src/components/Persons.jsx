const Persons = ({ persons, searchInput }) => {
  const l = searchInput.length;
  const personsToShow = persons.filter(
    (person) =>
      person.name.substring(0, l).toLowerCase() === searchInput.toLowerCase()
  );
  return (
    <>
      {personsToShow.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};

export default Persons;
