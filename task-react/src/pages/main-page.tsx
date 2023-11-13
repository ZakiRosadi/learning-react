import IDistricts from "../components/districts"
// import Ikecamatan from "../components/regency"
import IVillages from "../components/villages"
import WilayahApi from "../components/province"
import IRegencies from "../components/regency"
import { useState } from "react";
// import Dropdown from "../components/dropdown";

// interface IDataProvinces {
//     id: number;
//     name: string;
//   }

// interface IDataRegencies {
//     id: number;
//     name: string;
//     regencyId : number;
//   } 

//   interface IDataDistricts {
//     id: number;
//     name: string;
//   }
  
//   interface IDataVillages {
//     id: number;
//     name: string;
//   }

const MainPage = () => {
    const [IDProvinces, setDataProvinces] = useState<number| null>(null);
    const [IDRegency, setDataRegencies] = useState<number| null>(null);
    const [IDDistricts, setDataDisctrics] = useState<number| null>(null);
    const [IDDataVillages, setDataVillages] = useState<number| null> (null)
    return (
        <>
       < WilayahApi handleSetId={setDataProvinces}/>
        <IRegencies PickedProv={IDProvinces} onSelectIDataRegencies={setDataRegencies}  />
       < IDistricts PickedRegencies={IDRegency} onSelectIdataDistricts={setDataDisctrics} />
       < IVillages PickedDistricts={IDDistricts} onSelectDataVillage={setDataVillages}/>
        </>
    )
}

export default MainPage