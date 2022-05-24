// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import contactsJson from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJson.slice(0, 5));

  const handleAddRandomContact = () => {
    const randomNumber = Math.floor(Math.random() * contactsJson.length); // 0 - 200
    const randomContact = contactsJson[randomNumber];
    setContacts([randomContact, ...contacts]);
  };

  const handleSortByPopularity = () => {
    const sortList = [...contacts].sort(
      (elem1, elem2) => elem2.popularity - elem1.popularity
    );
    setContacts(sortList);
  };

  const handleByName = () => {
    const sortList = [...contacts].sort((elem1, elem2) =>
      elem1.name > elem2.name ? 1 : -1
    );
    setContacts(sortList);
  };

  const handleDelete = (idDelete) => {
    const filterArr = [...contacts].filter(
      (contact) => contact.id !== idDelete
    );
    setContacts(filterArr);
  };

  return (
    <div className="App">
      <h1 class="titulo">IronContacts</h1>
      <div class = "botones">
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <button onClick={handleByName}>Sort by name</button>
      <button onClick={handleSortByPopularity}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody className="table-body">
          {contacts.map((contact, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    className="picture-profile"
                    src={contact.pictureUrl}
                    alt="fotoPerf"
                  />
                </td>

                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  {contact.wonOscar === true ? (
                    <span>🎥🏆</span>
                  ) : (
                    <span></span>
                  )}
                </td>
                <td>
                  {contact.wonEmmy === true ? <span>🎥⭐</span> : <span></span>}
                </td>
                <td>
                  <button onClick={() => handleDelete(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
