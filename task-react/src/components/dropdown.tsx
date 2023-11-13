interface DataWilayah {
    id : number;
    name : string;
}



const Dropdown = (props : DataWilayah) => {
    return (
        <>
        <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value={props.id}></option>
            <option value="2">{props.name}</option>
            <option value="3">Three</option>
        </select>
        </>
    )
}

export default Dropdown