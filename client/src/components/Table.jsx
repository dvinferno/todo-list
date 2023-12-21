/* eslint-disable react/prop-types */
import IconButton from "./IconButton";
function TableBody(props) {
  const rows = props.todoListItems.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row}</td>
        <td>
          <span className="edit-button">
            <IconButton icon="fa-pen-to-square" onClick={() => {}} />
          </span>
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
