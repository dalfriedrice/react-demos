import { useState } from "react";
import { useGetEmployees } from "../hooks/use_get_employees";
import { useDebounce } from "../hooks/use_debounce";

export const TypeHead = () => {
  const [inputVal, setInputVal] = useState("");
  console.log("input", inputVal);
  const debounceVal = useDebounce(inputVal, 300);
  console.log("debounceVal", debounceVal);
  const { data: users } = useGetEmployees(debounceVal);
  const dropdownUsers = users?.users || [];

  return (
    <>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <div>
        {dropdownUsers.map((user) => (
          <p>{user.firstName}</p>
        ))}
      </div>
    </>
  );
};
