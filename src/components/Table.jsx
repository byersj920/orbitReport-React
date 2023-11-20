import "./styling.css"

const Table = ({ sat }) => {
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
      {sat.map((id, data) => (
      <tr key={id.id}>
         <td>{id.name}</td>
         <td>{id.type}</td>
         <td>{id.launchDate}</td>
         <td>{id.operational === true? "Active" : "Inactive"}</td>
      </tr>
   ))}
     </tbody>
   </table>
  );
};

export default Table;