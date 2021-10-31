import React, { useEffect, useState } from 'react';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import Button from 'components/Button/index';
import { Link } from 'react-router-dom';
import { getListDonorRequest } from 'api/index';
import { CircularProgress } from '@material-ui/core/index';

const Home = () => {
  const [listDonorRequest, setListDonor] = useState([]);
  const [loading, setLoading] = useState({
    donorRequest: false
  })

  const setLoadingDR = val => setLoading({...loading, donorRequest: val}); 

  useEffect(()=> {
    setLoadingDR(true);
    getListDonorRequest().then(res=>{
      console.log(res)
      setListDonor(res.data.data)
    }).catch(err=>{
      console.error(err);
    }).finally(()=>setLoadingDR(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="p-8">
      <div>
        <h1 className="text-3xl md:text-6xl font-semibold mb-4">Ayo donorkan plasma darah-mu bantu lawan covid-19!</h1>
        <h2 className="mt-24 text-2xl lg:mr-80 mb-4">Cari tahu apakah kamu bisa mendonorkan plasma darah kamu melalui pre-assesment kami</h2>
        <Link to="/assesment"><Button size="large">Cari Tahu</Button></Link>
        <h2 className="mt-36 text-4xl lg:mr-80 mb-4 font-bold">Orang-orang ini butuh bantuan-mu</h2>
        <h2 className="text-2xl lg:mr-80 mb-4">Bantu donorkan plasma darah-mu ke mereka yang membutuhkan</h2>
          {loading.donorRequest && <CircularProgress size={40} color="secondary" />}
        <div className="flex">
          {listDonorRequest.map(dr=>(
            <div className="cursor-pointer p-4 rounded-lg bg-gray-100">
              <p className="text-lg font-bold">Golongan darah {dr.bloodtype}</p>
              <p>{dr.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
};

export default Home;                                                                                                                                                                                
