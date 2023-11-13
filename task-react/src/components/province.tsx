import { useEffect, useState } from "react";
// import Dropdown from "./dropdown";

interface IDataProvinces {
  id: number;
  name: string;
}

interface IProvinceProps{
  handleSetId:(id:number)=> void
}
const WilayahApi:React.FC <IProvinceProps> = ({handleSetId}) => {
  const [dataProvinces, setDataProvinces] = useState<IDataProvinces[]>([]);

  useEffect(() => {
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
      .then((res) => res.json())
      .then((res) => {
        setDataProvinces(res);
      });
  }, []);

  console.log(dataProvinces);

  return (
    <>
      <h1>This is API</h1>
      <select onChange={(e:React.ChangeEvent <HTMLSelectElement>)=> handleSetId(+e.target.value)}className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        {dataProvinces.map((item: IDataProvinces, ) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>
      {/* <Dropdown /> */}
    </>
  );
};

export default WilayahApi;
