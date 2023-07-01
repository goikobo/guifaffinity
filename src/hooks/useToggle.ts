// Gestiona una variable booleana llamada value
// tiene una funcion toggle que cambia el estado de esta variable a su opuesto
// el hook expone la variable creada y la funcion toggle

import { useState } from "react";

const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = () => setValue(!value);

  return { value, toggle };
};
export default useToggle;
