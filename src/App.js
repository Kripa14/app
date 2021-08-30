import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const { pocList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const distinctGenders = [...new Set(pocList.map((i) => i.gender))];
  return (
    <div className="App">
      <input
        className="input-box"
        placeholder="Search by Name"
        onChange={(e) =>
          dispatch({ type: "SEARCH_DATA", data: e.target.value })
        }
      />
      <div>
        <label> Filter By Gender:</label>
        {distinctGenders.map((i) => (
          <span key={i} className="filter-name">
            <input
              type="checkbox"
              id={i}
              name={i}
              value={i}
              onChange={(e) =>
                dispatch({
                  type: "FILTER_DATA",
                  data: e.target.checked ? i : "",
                })
              }
            />
            <label>{i}</label>
          </span>
        ))}
      </div>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {pocList.length
            ? pocList.map((i) => (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>{i.gender}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      {!pocList.length ? <div>No Records Found!!</div> : null}
    </div>
  );
}

export default App;

