let vaihe = 1; // Aloitusvaihe

// Aloita-analyysi-napin toiminta
document.getElementById("startButton").addEventListener("click", () => {
  päivitäVaihe();
});

document.getElementById("continueButton").addEventListener("click", () => {
  vaihe++;
  päivitäVaihe();
});

document.getElementById("takaisinButton").addEventListener("click", () => {
  if (vaihe >=1) {
    vaihe
    päivitäVaihe();
  }
});

function päivitäVaihe() {
  // Piilota kaikki vaiheet ensin
  document.querySelectorAll(".vaihe").forEach(el => el.style.display = "none");
  if (vaihe === 1) {

  // Piilota "Aloita analyysi" -nappi
  document.getElementById("startButton").style.display = "none";
     document.getElementById("continueButton").style.display = "inline-block";
    
     document.getElementById("OhjeetBox").style.display = "block";
  document.getElementById("infoBall1").style.display = "block";
 
}
  
    else if (vaihe === 2) {
        
  document.getElementById("OhjeetBox").style.display = "none";        
          // Piilotetaan ensimmäinen infopallo
          document.getElementById("infoBall1").style.display = "none";
          // Liikutetaan näytettä
          document.getElementById("sample").style.left = "380px";
   
    // Kun näyte on saavuttanut kameran, näytetään toinen infopallo
    setTimeout(function () {
      document.getElementById("infoBall2").style.display = "block";
      document.getElementById("camera").style.display = "block";
      document.getElementById("valoviiva").style.display = "block";
      document.getElementById("Spektroskopiainfo").style.display = "block";
      document.getElementById("infoBall3").style.display = "block";
      document.getElementById("infoBall4").style.display = "block";
          }, 2000);
    }
  
  else if (vaihe == 3) {
    // Liikutetaan näytettä
    document.getElementById("sample").style.top="230px";
    document.getElementById("valoviiva").style.top="195px";
      document.getElementById("infoBall2").style.display = "none";
      document.getElementById("camera").style.display = "none";
      document.getElementById("Spektroskopiainfo").style.display = "none";
      document.getElementById("infoBall3").style.display = "none";
      document.getElementById("infoBall4").style.display = "none";
        setTimeout(function () {
              document.getElementById("hsicamera").style.display = "block";
          document.getElementById("kuutio").style.display = "block";
          document.getElementById("viiva").style.display = "block";
          document.getElementById("spektri2").style.display = "block";
          document.getElementById("infoBallhsi").style.display = "block";
          document.getElementById("infoBallkuutio").style.display = "block";
          document.getElementById("infoBallspektri").style.display = "block";
             document.getElementById("Hyperspektrikamerainfo").style.display = "block";
          }, 2000);
  }
  else if (vaihe==4) {
    
    //Liikutetaan kuutiota ja spektriä
    document.getElementById("kuutio").style.top="140px";
    document.getElementById("kuutio").style.left="100px";
    
     document.getElementById("spektri2").style.top="130px";
   document.getElementById("spektri2").style.left="280px";
     
    
     document.getElementById("valoviiva").style.display = "none";
    document.getElementById("hsicamera").style.display = "none";

 document.getElementById("sample").style.display = "none";
          document.getElementById("viiva").style.display = "none";
          document.getElementById("infoBallhsi").style.display = "none";
          document.getElementById("infoBallkuutio").style.display = "none";
          document.getElementById("infoBallspektri").style.display = "none";
             document.getElementById("Hyperspektrikamerainfo").style.display = "none";
    
    setTimeout(function () {
       document.getElementById("kuutio").style.display = "none";
document.getElementById("kuutio2").style.display = "block";
document.getElementById("AnalyysiInfo").style.display = "block";

      document.getElementById("spektri2").style.display = "none";
 document.getElementById("spektri_molemmat").style.display = "block";
      
      }, 2000);
  }
    else if (vaihe==5) {
document.getElementById("infoBoxReferences").style.display = "block";
      document.getElementById("continueButton").style.display = "none";
      document.getElementById("spektri_molemmat").style.display = "none";
 document.getElementById("kuutio2").style.display = "none";
document.getElementById("AnalyysiInfo").style.display = "none";

    }
    };