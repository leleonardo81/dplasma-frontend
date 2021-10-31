import TextField from "components/TextField/index";
import React, { useEffect, useState } from "react";
import { MenuItem, CircularProgress } from "@material-ui/core";
import { getRS, requestDonor } from "api/index";
import Button from "components/Button/index";

const bloodtypes = ["A", "B", "O", "AB"];

const RequestDonor = ({user}) => {
  const [listRS, setListRS] = useState([]);
  const [loading, setLoading] = useState(false);

  const [rsid, setRSID] = useState("");
  const [bloodtype, setBT] = useState("");
  const [age, setAge] = useState();
  const [description, setDescription] = useState("");

  useEffect(()=>{
    getRS().then(res=>{
      console.log(res);
      setListRS(res.data.data.rows);
    }).catch(err=>{
      console.error(err);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitRequest = () => {
    const data = {
      rsid,
      bloodtype,
      age,
      description,
      status: 'active'
    }
    console.log(data);
    setLoading(true);
    requestDonor(data).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.error(err);
    }).finally(()=>{setLoading(false)})
  }

  return (
    <div className="p-8">
      <div className="w-1/3">
        <TextField
          label="Usia pasien"
          fullWidth
          type="number"
          value={age}
          onChange={e=>setAge(e.target.value)}
        />
      </div>
      <div className="w-1/3">
        <TextField
          label="Golongan darah pasien"
          fullWidth
          select
          value={bloodtype}
          onChange={e=>setBT(e.target.value)}
        >
          {bloodtypes.map(bt=>(
            <MenuItem value={bt} key={bt}>{bt}</MenuItem>
          ))}
        </TextField>
      </div>
      <div className="w-1/3">
        <TextField
          select
          value={rsid}
          onChange={e=>setRSID(e.target.value)}
          label="Pilih Rumah Sakit"
          fullWidth
        >
          {listRS.map(rs=>(
            <MenuItem key={rs.rsid} value={rs.rsid}>{rs.name}</MenuItem>
          ))}
        </TextField>
      </div>
      <div className="w-1/3">
        <TextField
          label="Deskripsi"
          multiline
          rows={4}
          fullWidth
          value={description}
          onChange={e=>setDescription(e.target.value)}
        />
      </div>

      <div>
        <Button
          onClick={submitRequest}
          disabled={loading || !description || !bloodtype || !rsid || !user || !age}
        >Request
        {loading && <CircularProgress color="white" size={25} className="ml-4" />}
        </Button>
      </div>
    </div>
  );
}

export default RequestDonor;