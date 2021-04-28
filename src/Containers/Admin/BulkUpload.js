import React, { useRef, useState } from "react";
import * as XLSX from "xlsx";
import "firebase/firestore";
import firebase from "../../Firebase/FirebaseConfig";
import { Button, message, Tooltip } from "antd";
import { databaseVariableValidation, getDatabaseVariables } from "./functions";

var db = firebase.firestore();

export default function BulkUpload({ database }) {
  const [cols, setCols] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileInput = useRef();

  const fileHandler = (e) => {
    const fileobj = e.target.files[0];
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, { header: 0 });
      const inputCols = XLSX.utils.sheet_to_json(ws, { header: 1 })[0];
      if (databaseVariableValidation(database, inputCols)) {
        /* Update state */
        setData(data);
        setCols(make_cols(ws["!ref"]));
      } else {
        message.error("Excel fields no matched with Database fields.");
        fileInput.current.value = "";
      }
    };
    if (rABS) reader.readAsBinaryString(fileobj);
    else reader.readAsArrayBuffer(fileobj);
  };

  const uploadData = (Data) => {
    setLoading(true);

    var dataLength = Data.length;
    var count = 0;

    Data.forEach((doc) => {
      console.log(doc);
      var toString = {};
      if (database === "Doctors") {
        toString = {
          MCINumber: doc.MCINumber ? doc.MCINumber.toString() : "",
          whatsappNo: doc.whatsappNo ? doc.whatsappNo.toString() : "",
        };
      }
      db.collection(database)
        .add({
          ...doc,
          ...toString,
          phone: doc.phone ? doc.phone.toString() : "",
          timestamp: new Date(),
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          count++;
          if (count === dataLength) {
            console.log("data uploaded after last doc");
            setLoading(false);
            setData(null);
            fileInput.current.value = "";
          }
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    });
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding:"20px",
      }}>
        <div style={{display:"flex" , justifyContent:"space-between"}}>
          <h1>Bulk Upload</h1>
          <Tooltip title={"Excel Column must be :" +  getDatabaseVariables(database).join(',')}>
              <ion-icon style={{fontSize:"24px" ,color:"grey"}} name="alert-circle-outline"></ion-icon>
          </Tooltip>
        </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <input ref={fileInput} type='file' onChange={fileHandler} />
      {data && (
        <Button onClick={() => uploadData(data)} loading={loading}>
          {" "}
          Upload
        </Button>
      )}
       <br/><br/><br/><br/>
      </div>
     
      
    </div>
  );
}
/* generate an array of column objects */
const make_cols = (refstr) => {
  let o = [],
    C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
  return o;
};
