let CNN =0;
let REP =0;
let NDTV =0;

function addCNN() {
    CNN++;
    console.log("CNN:"+CNN);
   
}

function addREP() {
    REP++;
    console.log("REP:"+REP);
    
  }

function addNDTV() {
    NDTV++;
    console.log("NDTV:"+NDTV);  
    
  }

  function result() {
      if (CNN>NDTV && CNN>REP){
          document.getElementById("result-cnn").style.visibility = "visible";
          document.getElementById("result-cnn").classList.toggle('card-img-top');
      }
      else if (NDTV>CNN && NDTV>REP){
        document.getElementById("result-ndtv").style.visibility = "visible";
        document.getElementById("result-ndtv").classList.toggle('card-img-top');
    }else if (REP>CNN && NDTV<REP){
        document.getElementById("result-rep").style.visibility = "visible";
        document.getElementById("result-rep").classList.toggle('card-img-top');
    }
  }

  function disable(n,m){
    document.getElementById(m).classList.replace('btn-outline-primary', 'btn-primary');
    var nodes = document.getElementById(n).getElementsByTagName("button");
    for(var i=0; i<nodes.length; i++) {nodes[i].setAttribute("disabled","true");}
  }