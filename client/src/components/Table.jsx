function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Todo</th>
        <th>Edit</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
}

function TableBody() {
    
}

function Table() {
  return (
    <table>
        <TableHeader />
        <TableBody />
    </table>
  );
}

export default Table;
