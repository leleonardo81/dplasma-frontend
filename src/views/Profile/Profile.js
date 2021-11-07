// import { getProfile } from "api/index";
import Button from "components/Button/index";
import TextField from "components/TextField/index";
import React, { useState } from "react";
import { CircularProgress } from "../../../node_modules/@material-ui/core/index";

const Profile = ({user, updateProfile, redirect}) => {
  if (!user) redirect();
  const [name, setname] = useState(user.name);
  const [phoneNumber, setPhoneNum] = useState(user.phoneNumber);
  const [loading, setLoading] = useState(false);
  const submit = () => {
    const data = {
      name, phoneNumber
    }
    setLoading(true);
    updateProfile(data).then(res=>{
      alert("success");
    }).catch(err=>{console.error(err)})
    .finally(()=>{setLoading(false)});
  }

  // const getProfil = () => {
  //   getProfile().then(res=>{
  //     console.log(res)
  //   }).catch(err=> {
  //     console.log(err)
  //   })
  // }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Profile</h1>
      <div className="w-1/3">
        <TextField
          label="Nama"
          fullWidth
          value={name}
          onChange={e=>setname(e.target.value)}
        />
      </div>
      <div className="w-1/3">
        <TextField
          label="Phone Number / Contact"
          fullWidth
          value={phoneNumber}
          type="number"
          onChange={e=>setPhoneNum(e.target.value)}
        />
      </div>
      {user && 
      <div>
        <Button
          onClick={submit}
          disabled={loading || !name || !phoneNumber || (phoneNumber === user.phoneNumber && name === user.name)}
        >Update Profile
        {loading && <CircularProgress color="white" size={25} className="ml-4" />}
        </Button>
      </div>
      }
      {/* <div>
        <Button
          onClick={getProfil}
        >Get Profile
        </Button>
      </div> */}
    </div>
  )
}

export default Profile