import { getDetailDonorRequest } from "api/index";
import React, { useEffect, useState } from "react";
import { CircularProgress } from '@material-ui/core/index';


const DonorRequest = ({match}) => {
  const { id } = match.params;
  const [donor, setDonor] = useState();
  useEffect(()=>{
    getDetailDonorRequest(id).then(res=>{
      console.log(res.data);
      setDonor(res.data.data)
    }).catch(err=>{
      console.error(err);
    });
  }, [id]);

  return(
    <div className="p-8">
      {donor && 
        <div>
          <h1 className="text-2xl font-bold">Dibutuhkan donor plasma</h1>
          <p>{new Date(donor.updatedAt).toDateString()}</p>
          <p>Golongan Darah: {donor.bloodtype}</p>
          <p>usia pasien: {donor.age}</p>
          <p>{donor.description}</p>

          <h2 className="mt-8 text-xl font-bold">Lokasi</h2>
          <p>{donor.hospital.name}</p>
          <p>{donor.hospital.address.detail}</p>

          <h2 className="mt-8 text-xl font-bold">Contact</h2>
          <p>Hubungi</p>
          <p>{donor.user.phoneNumber} - {donor.user.name}</p>
        </div>
      }
      {!donor && <CircularProgress size={40} color="secondary" />}
    </div>
  );
};

export default DonorRequest;