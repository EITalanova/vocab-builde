import { useAuth } from "../../hooks/useAuth";

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      {isLoggedIn ? <p>OK</p> : <p>NO</p>}
      <div>
        {" "}
        <p></p>
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div>
        <p></p>
      </div>
    </header>
  );
};
