import "./App.css";
import Navigation from "./Components/Navigation";
import Profile from "./Components/Profile";
function App() {
  const users = [
    {
      name: "Amine",
      imageUrl:
        "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png",
    },
    {
      name: "Ali",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CRKPij6o2waFROp-89BCE8lEf96jLsndRQ&usqp=CAU",
    },
    {
      name: "Mohamed",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtlNqBJlNFlfBL8V4OzEUcvDTnfQ0chffGg&usqp=CAU",
    },
  ];

  return (
    <div className="App">
      <Navigation />
      <p>Hello </p>
      {users.map((user) => {
        return <Profile userInfo={user} />;
      })}
    </div>
  );
}

export default App;
