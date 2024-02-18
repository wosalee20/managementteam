import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    dispatch(updateName(username));

    // Get the current path from window.location.pathname
    const currentPath = window.location.pathname;

    // Extract the prefix from the current path
    const prefix = currentPath.split("/")[1];

    // Navigate to the dynamic prefix/menu based on the current path
    navigate(`/${prefix}/menu`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        Are you a fan? if yes, Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Login</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
