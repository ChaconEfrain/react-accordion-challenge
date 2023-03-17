import { useState } from "react";

const useMultipleExpansion = () => {
  const [allowMultipleExpansion, setAllowMultipleExpansion] = useState(false);
  const toggleMultipleExpansion = () =>
    setAllowMultipleExpansion((prev) => !prev);

  return { allowMultipleExpansion, toggleMultipleExpansion };
};

export default useMultipleExpansion;
