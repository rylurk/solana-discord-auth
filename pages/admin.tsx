import { useQuery } from 'react-query';
import { fetchConnectedUsers } from '../queries/firebase';

export default function AdminPage() {
  const connectedUsers = useQuery(['connectedUsers'], fetchConnectedUsers);
  let userList;

  if (connectedUsers.isFetched) {
    userList = connectedUsers.data?.map((user) => (
      <div key={user.discordEmail} className="text-white flex flex-col mt-8">
        <div>Solana address: {user.solanaAddress}</div>
        <div>Discord email: {user.discordEmail}</div>
        <div>Discord username: {user.discordUsername}</div>
      </div>
    ));
  }

  return (
    <div className="flex flex-col ml-14">
      <div className="text-xl font-bold text-white mt-12 mb-4">Connected users ({connectedUsers.data?.length})</div>
      {userList}
    </div>
  );
}
