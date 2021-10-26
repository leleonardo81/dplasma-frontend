import React, { useState } from "react";
import { FormControlLabel, Radio, RadioGroup, CircularProgress } from "@material-ui/core";
import TextField from "components/TextField";
import Button from "components/Button/index";
import { submitAssesmentTest } from "api/index";

const Assesment = () => {
  const [is_covid_survivor, setIsCovidSurvivor] = useState();
  const [negative_covid, setNegativeCovid] = useState();
  const [age, setAge] = useState();
  const [have_pregnant, setHavePregnant] = useState();
  const [cronic_disease, setCronicDisease] = useState();
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState();
  const [covid_healed_date, setCovidHealedDate] = useState();
  const [transfused_record, setTransfusedRecord] = useState();
  const [last_transfused_date, setLastTransfusedDate] = useState();

  const [loading, setLoading] = useState(false)

  const submit = () => {
    const data = {
      negative_covid,
      is_covid_survivor,
      covid_healed_date,
      age,
      weight,
      gender,
      have_pregnant,
      cronic_disease,
      transfused_record,
      last_transfused_date,
    };
    console.log(data);
    setLoading(true);
    submitAssesmentTest(data).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.error(err);
    }).finally(()=>{setLoading(false)});
  }

  return (
    <div className="py-4">
      <h1 className="text-red-500 text-4xl font-bold">Assesment Pendonor</h1>
      <h2 className="mt-2 mb-8">Cari tahu apakah kamu berpotensi untuk mendonorkan plasma darahmu untuk pasien covid-19</h2>
      <div className="py-4 lg:grid lg:grid-cols-2">
        <div className="mb-8 px-20 md:px-32 lg:px-20">
          <p className="font-bold mb-2">Apakah kamu pernah positif covid-19? </p>
          <RadioGroup value={is_covid_survivor} onChange={e=>setIsCovidSurvivor(Boolean(e.target.value))}>
            <FormControlLabel value="true" control={<Radio />} label={<span className="font-tema">Ya</span>} />
            <FormControlLabel value="false" control={<Radio />} label={<span className="font-tema">Tidak</span>} />
          </RadioGroup>
        </div>

        
        <div className="mb-8 px-20 md:px-32 lg:px-20">
          <p className="font-bold mb-2">Bagaimana hasil tes covid-mu saat ini? </p>
          <RadioGroup value={negative_covid} onChange={e=>setNegativeCovid(Boolean(e.target.value))}>
            <FormControlLabel value="false" control={<Radio />} label={<span className="font-tema">Positif</span>} />
            <FormControlLabel value="true" control={<Radio />} label={<span className="font-tema">Negatif</span>} />
          </RadioGroup>
        </div>
        
        {(is_covid_survivor && negative_covid) &&
        <div className="mb-8 px-20 md:px-32 lg:px-20">
          <p className="font-bold mb-2">Kapan kamu dinyatakan sembuh dari covid? </p>
          <TextField 
            variant="filled"
            value={covid_healed_date}
            onChange={e=>setCovidHealedDate(e.target.value)}
            type="date"
          />
        </div>
        }   

        <div className="mb-8 px-20 md:px-32 lg:px-20">
          <p className="font-bold mb-2">Berapa usia kamu? </p>
          <div className="flex items-center">
            <TextField
              variant="filled"
              value={age}
              onChange={e=>setAge(e.target.value)}
              type="number"
            /><span>Tahun</span>
          </div>
        </div>

        <div className="mb-8 px-20 md:px-32 lg:px-20">
          <p className="font-bold mb-2">Berapa berat badan kamu? </p>
          <div className="flex items-center">
            <TextField
              variant="filled"
              value={weight}
              onChange={e=>setWeight(e.target.value)}
              type="number"
            /><span>Kg</span>
          </div>
        </div>

        <div className="mb-8 px-20 md:px-32 lg:px-20">
          <p className="font-bold mb-2">Jenis Kelamin </p>
          <RadioGroup value={gender} onChange={e=>setGender(e.target.value)}>
            <FormControlLabel value="male" control={<Radio />} label={<span className="font-tema">Laki-laki</span>} />
            <FormControlLabel value="female" control={<Radio />} label={<span className="font-tema">Perempuan</span>} />
          </RadioGroup>
        </div>

        {gender==='female' &&
        <div className="mb-8 px-20 md:px-32 lg:px-20">
          <p className="font-bold mb-2">Apakah kamu pernah hamil? </p>
          <RadioGroup value={have_pregnant} onChange={e=>setHavePregnant(Boolean(e.target.value))}>
            <FormControlLabel value="true" control={<Radio />} label={<span className="font-tema">Ya, pernah</span>} />
            <FormControlLabel value="false" control={<Radio />} label={<span className="font-tema">Tidak</span>} />
          </RadioGroup>
        </div>
        }

        <div className="mb-8 px-20 md:px-32 lg:px-20">
          <p className="font-bold mb-2">Apakah kamu memiliki riwayat penyakit kronis? </p>
          <RadioGroup value={cronic_disease} onChange={e=>setCronicDisease(Boolean(e.target.value))}>
            <FormControlLabel value="true" control={<Radio />} label={<span className="font-tema">Ya</span>} />
            <FormControlLabel value="false" control={<Radio />} label={<span className="font-tema">Tidak</span>} />
          </RadioGroup>
        </div>

        <div className="mb-8 px-20 md:px-32 lg:px-20">
          <p className="font-bold mb-2">Apakah kamu pernah menerima transfusi darah? </p>
          <RadioGroup value={transfused_record} onChange={e=>setTransfusedRecord(Boolean(e.target.value))}>
            <FormControlLabel value="true" control={<Radio />} label={<span className="font-tema">Ya</span>} />
            <FormControlLabel value="false" control={<Radio />} label={<span className="font-tema">Tidak</span>} />
          </RadioGroup>
        </div>

        {transfused_record &&
        <div className="mb-8 px-20 md:px-32 lg:px-20">
          <p className="font-bold mb-2">Kapan kamu terakhir menerima transfusi darah? </p>
          <TextField 
            variant="filled"
            value={last_transfused_date}
            onChange={e=>setLastTransfusedDate(e.target.value)}
            type="date"
          />
        </div>
        }

      </div>
      <div className="flex justify-center mb-20">
        <Button 
          size="large" 
          disabled={loading}
          style={{padding: '0.5rem 6rem', fontSize: '1.5rem', fontWeight: 'bold'}}
          onClick={submit}>
            Check
            {loading && <CircularProgress color="white" size={25} className="ml-4" />}
        </Button>
      </div>
    </div>
  )
}

export default Assesment;