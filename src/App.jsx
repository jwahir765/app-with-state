import { useState } from 'react';
import './App.css'
import ProfilesList from './components/ProfilesList';

function App() {

  const [profiles, setProfiles] = useState([]);

  function addNewUser() {
    const newUser = {
      name: `User ${profiles.length + 1}`,
      imgLink: "https://picsum.photos/200/200"
    };

    setProfiles([...profiles, newUser]);
  }

  function deleteUserByIndex(index) {
    // setProfiles([
    //   ...profiles.slice(0, index),
    //   ...profiles.slice(index + 1, profiles.length)
    // ]);

    /**
     *    ["a", "b", "c"]
     *    const x = 1;
     *    to delete -> index x
     * 
     *    ["a", "b", "c"].filter((item, index) => index !== x)
     * 
     *    newArr = []

     *    iteration 0:
     *      item = "a", index = 0, x = 1 
     *      index !== x -> true
     *      newArr = ["a"]
     *    
     *    iteration 1:
     *      item ="b", index = 1, x = 1
     *      index !== x -> false
     *      newArr = ["a"]
     * 
     *    iteration 2:
     *      item = "c", index = 2, x = 1
     *      index !== x -> true
     *      newArr = ["a", "c"]
     * 
     * 
     *    ["a", "b", "c"].filter((item, index) => index !== x) -> returns ["a", "c"]
     *
     */
    setProfiles(profiles.filter((_, i) => i !== index))
  }

  return (
    <>
      <button onClick={addNewUser}>Add User</button>
      <ProfilesList
        profiles={profiles}
        onDelete={deleteUserByIndex}
      />
    </>
  )
}

export default App
