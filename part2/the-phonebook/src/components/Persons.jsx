const Persons = ({ persons, searchInput, handleDeletion }) => {
  const l = searchInput.length;
  const personsToShow = persons.filter(
    (person) =>
      person.name.substring(0, l).toLowerCase() === searchInput.toLowerCase()
  );
  return (
    <>
      {personsToShow.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
          <button onClick={() => handleDeletion(person)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Persons;
