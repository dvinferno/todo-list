/* eslint-disable react/prop-types */
import IconButton from "./IconButton";
function updateStatus(i, e) {
  const row = document.getElementById(i)
  const td = row.querySelector("#listItem")

  const content = td.innerHTML

  if (e.target.checked) {
    td.innerHTML = "<s>" + content + "</s>"
  } else {
    td.innerHTML = td.querySelector("s").innerHTML
  }
  console.log(td)
}

function TableBody(props) {
  const rows = props.todoListItems.map((row, index) => {
    return (
      <tr key={index} id={index}>
        <td id="listItem">{row}</td>
        <td>
          <label className="checkbox-container">
            <input type="checkbox" className="checkbox" onChange={(e) => updateStatus(index, e)} />
          </label>
        </td>
        <td>
          <span className="delete-button">
            <IconButton icon="fa-trash" onClick={() => props.removeItem(index)} />
          </span>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}

function Table(props) {
  return (
    <table>
      <TableBody todoListItems={props.todoListItems} removeItem={props.removeItem} />
    </table>
  );
}

export default Table;
