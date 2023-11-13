import { useEffect, useState } from "react";

interface IDataDistricts {
  id: number;
  name: string;
}

interface IDataDistrictsProps {
    PickedRegencies : number |null;
    onSelectIdataDistricts : (thisDistricts : number) => void;
}

const IDistricts: React.FC<IDataDistrictsProps> = ({PickedRegencies, onSelectIdataDistricts}) => {
  const [Districts, setDataDisctrics] = useState<IDataDistricts[]>([]);

  useEffect(() => {
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${PickedRegencies}.json`)
      .then((res) => res.json())
      .then((res) => {
        setDataDisctrics(res);
      });
  }, [PickedRegencies]);

  console.log(Districts);

  return (
    <>
      <select onChange={(e) => onSelectIdataDistricts(+e.target.value)}className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        {Districts.map((item: IDataDistricts,) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>
    </>
  );
};

export default IDistricts;
