import data from "../../static.json";

export default function UserPicker () {
    const { users } = data;
  return (
    <select>
      {users.map(u => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
}