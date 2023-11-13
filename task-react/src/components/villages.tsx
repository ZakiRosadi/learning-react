import { useEffect, useState } from "react";

interface IDataVillages {
    id: number;
    name: string;
  }

interface IDataVillageProps {
    PickedDistricts : number | null;  // for ID
    onSelectDataVillage : (thisVillage : number) => void;
}

const IVillages: React.FC<IDataVillageProps> = ({PickedDistricts, onSelectDataVillage}) => {
    const [DataVillages, setDataVillages] = useState<IDataVillages[]> ([])

    useEffect(() => {
        fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${PickedDistricts}.json`)
          .then((res) => res.json())
          .then((res) => {
           setDataVillages(res);
          });
      }, [PickedDistricts]);
    
      console.log(DataVillages);

    return (
    <>
    <select onChange={(e) => onSelectDataVillage(+e.target.value)}className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        {DataVillages.map((item: IDataVillages,) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>
    </>

    )
}

export default IVillages