import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SMInput } from "../config/components/sminput";
import { SMSelect } from "../config/components/smselect";
import { CheckUser, sendData,getData } from "../config/firebasemethod";
import loaderImage from '../assets/loader.gif'
function Home() {
  let param=useParams()
  const [model, setModel] = useState({})
  const [userId,setUserId]=useState("")
  const [fullScreenLoader,setFullScreenLoader]=useState(false)
  const navigate=useNavigate()
  let addStudent = () => {
    sendData(model, 'students/')
      .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  let fillModel = (key, val) => {
    model[key] = val
    setModel({ ...model })
    console.log(model)
  }


  useEffect(()=>{
    setFullScreenLoader(true)
    CheckUser()
    .then((res)=>{
    console.log(param)      
      if(param.id == res){
        setFullScreenLoader(false)
        setUserId(res);
        
      }
      else{
      setFullScreenLoader(false)

        navigate("/login")
      }

    })
    .catch((err)=>{
      console.log(err)
    })
  },[])



  return fullScreenLoader ? (
    <>
    <img width="200vw" src={loaderImage} alt="Loader" />
    <h1>Checking User Verification Thank you for your patience ....</h1>
  </>
) : 
(
  <>
    <h1>Registration Form</h1>
    <Box sx={{ padding: 2 }}>
      <Grid spacing={2} container>
        <Grid item md={4}>
          <SMInput
            required={true}
            label="First Name"
            value={model.firstName}
            onChange={(e) => fillModel("firstName", e.target.value)}
          />
        </Grid>
        <Grid item md={4}>
          <SMInput
            label="Last Name"
            value={model.lastName}
            onChange={(e) => fillModel("lastName", e.target.value)}
          />
        </Grid>
        <Grid item md={4}>
          <SMSelect
            required={true}
            label="Course"
            onChange={(e) => fillModel("course", e.target.value)}
            datasource={[
              {
                id: "wm",
                fullName: "Web And Mobile",
              },
            ]}
          />
        </Grid>
        <Grid item md={4}>
          <SMSelect
            required={true}
            label="Sec"
            onChange={(e) => fillModel("sec", e.target.value)}
            datasource={[
              {
                id: "a",
                fullName: "A",
              },
              {
                id: "b",
                fullName: "B",
              },
            ]}
          />
        </Grid>
        <Grid item md={4}>
          <SMInput
            required={true}
            label="Contact"
            value={model.contact}
            onChange={(e) => fillModel("contact", e.target.value)}
          />
        </Grid>
        <Grid item md={4}>
          <SMInput
            required={true}
            label="CNIC"
            value={model.cnic}
            onChange={(e) => fillModel("cnic", e.target.value)}
          />
        </Grid>
        <Grid item md={4}>
          <SMInput
            label="Father Name"
            value={model.fatherName}
            onChange={(e) => fillModel("fatherName", e.target.value)}
          />
        </Grid>
        <Grid item md={4}>
          <SMInput
            label="Father CNIC"
            value={model.fatherCnic}
            onChange={(e) => fillModel("fatherCnic", e.target.value)}
          />
        </Grid>
        <Grid item md={4}>
          <SMInput
            label="Father Contact"
            value={model.fatherContact}
            onChange={(e) => fillModel("fatherContact", e.target.value)}
          />
        </Grid>
        <Grid item md={4}>
          <SMInput
            label="Emergency Contact"
            value={model.emergencyContact}
            onChange={(e) => fillModel("emergencyContact", e.target.value)}
          />
        </Grid>
      </Grid>
    </Box>

    <Button variant="contained" onClick={addStudent}>
      Submit
    </Button>
  </>
  )
}
export default Home;