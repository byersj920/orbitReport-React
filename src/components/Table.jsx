import "./styling.css"

const Table = ({ sat }) => {

  /* When creating this map function, I was told to use the callbacks of id and data.
  The example said that {data.name} would return each satellite's name. But it did nothing.
  Instead, whenever I used {id.name} it works perfectly fine. So, I'm not really sure where
  the data part of this mapping is supposed to be used but....? It does work with this. */
const rowData = sat.map((id, data) => (
      <tr key={id}>
         <td>{id.name}</td>
         <td>{id.type}</td>
         <td>{id.launchDate}</td>
         <td>{id.operational === true? "Active" : "Inactive"}</td>
      </tr>
   ));

  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {rowData}
     </tbody>
   </table>
  );
};

export default Table;