import './App.css';
import { UserCard } from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';


function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchData = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得ハゲタコ</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ): loading? (
        <p>Loading...</p>
      ) : (
        <>
        {userProfiles.map((user) => (
          <UserCard key={user.id} user={user}/>
        ))}
        </>
      )}
    </div>
  );
}

export default App;
