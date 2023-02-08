import { useState } from "react";

import { Select } from "./components/Select";
import { SelectOption } from "./utils/select.utils";

const options = [
  { label: "Primero", value: 1 },
  { label: "Segundo", value: 2 },
  { label: "Tercero", value: 3 },
  { label: "Cuarto", value: 4 },
  { label: "Quinto", value: 5 },
];

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(opt) => setValue1(opt)}
      />
      <br />
      <Select
        options={options}
        value={value2}
        onChange={(opt) => setValue2(opt)}
      />
    </>
  );
}

export default App;
