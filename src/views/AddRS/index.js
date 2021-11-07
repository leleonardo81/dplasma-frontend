import React, { useState } from "react";
import TextField from "components/TextField/index";
import { createRS } from "api/index";
import Button from "components/Button/index";
import { CircularProgress } from "@material-ui/core/index";

const AddRS = () => {
  const [name, setName] = useState("");
  const [detail, setAddressDetail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = () => {
    const data = {
      name,
      address: {
        detail,
        lat: 0,
        lng: 0
      }
    }
    setLoading(true)
    createRS(data).then(res=>{
      setName("");
      setAddressDetail("");
      alert("berhasil menambahkan rumah sakit")
    }).catch(err=> {
      console.error(err)
    }).then(()=>{setLoading(false)});
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Tambah Rumah Sakit ke Sistem</h1>
      <div className="w-1/2">
        <TextField
          label="Nama Rumah Sakit"
          fullWidth
          value={name}
          onChange={e=>setName(e.target.value)}
        />
      </div>
      <div className="w-1/2">
        <TextField
          label="alamat"
          fullWidth
          multiline
          rows={3}
          value={detail}
          onChange={e=>setAddressDetail(e.target.value)}
        />
      </div>
      <div>
        <Button
          onClick={submit}
          disabled={loading || !name || !detail}
        >Submit
        {loading && <CircularProgress color="white" size={25} className="ml-4" />}
        </Button>
      </div>
    </div>
  )
}

export default AddRS;