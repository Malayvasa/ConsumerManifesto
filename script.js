let CNN =0;
let REP =0;
let NDTV =0;

function addCNN() {
    CNN++;
    console.log("CNN:"+CNN);
    alert("Selected CNN"); 
}

function addREP() {
    REP++;
    console.log("REP:"+REP);
    alert("Selected Republic");   
  }

function addNDTV() {
    NDTV++;
    console.log("NDTV:"+NDTV);  
    alert("Selected NDTV"); 
  }

  function result() {
      if (CNN>NDTV && CNN>REP){
          document.getElementById("result-cnn").style.visibility = "visible";
      }
      else if (NDTV>CNN && NDTV>REP){
        document.getElementById("result-ndtv").style.visibility = "visible";
    }else if (REP>CNN && NDTV<REP){
        document.getElementById("result-rep").style.visibility = "visible";
    }
  }
