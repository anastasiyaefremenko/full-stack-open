import { useState, useEffect } from "react";
import axios from "axios";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import phonebookService from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    phonebookService.getNumbers().then((numbers) => {
      setPersons(numbers);
    });
  }, []);

  const updateContact = () => {
    const contact = persons.find((p) => p.name === newName);
    const changedContact = { ...contact, number: newNumber };
    phonebookService
      .update(changedContact.id, changedContact)
      .then((updatedContact) => {
        setPersons(
          persons.map((person) =>
            person.id !== changedContact.id ? person : updatedContact
          )
        );
        setNewName("");
        setNewNumber("");
      });
  };

  const addPerson = (event) => {
    event.preventDefault();
    const nameAlreadyAdded = !!persons.find(
      (person) => person["name"] === newName
    );
    if (nameAlreadyAdded) {
      const update = confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (!update) return;
      updateContact();
      return;
    }

    const newContact = { name: newName, number: newNumber };
    phonebookService.addNumber(newContact).then((returnedContact) => {
      setPersons(persons.concat(returnedContact));
      setNewName("");
      setNewNumber("");
    });
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleDeletion = (person) => {
    const result = confirm(`Delete ${person.name} ?`);
    if (result) {
      phonebookService.deleteContact(person.id).then((deletedContact) => {
        setPersons(persons.filter((p) => p.id !== deletedContact.id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchInput={searchInput}
        handleSearchInputChange={handleSearchInputChange}
      />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        searchInput={searchInput}
        handleDeletion={handleDeletion}
      />
    </div>
  );
};

export default App;
