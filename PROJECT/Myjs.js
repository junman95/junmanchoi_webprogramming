/////////////////주점 메뉴 주문/////////////////////////////////
  function cancel(){
    window.location.reload(true);
  }
  function order(){
    var AMSG=tblno.value+"번 테이블\n";
    var TSUM=0;
    
    for(i=1;i<=6;i++){
      var did="d"+i;
      var dcnt=parseInt(document.getElementById(did).value);
      var dval=parseInt(document.getElementById(did).alt);
      var dtit=document.getElementById(did).title;
      if(dcnt!==0){
        TSUM+=dval*dcnt;
        AMSG+=dtit+"("+dval+")*"+dcnt+"="+(dval*dcnt)+"\n";
      }//if
    }//for
    AMSG=AMSG+"주문합계"+TSUM.toLocaleString();
    
    alert(AMSG);
    
  }//func
  function init(){
    var tn=location.href.split("tableno=")[1];
    tblno.value=(tn!==""||tn!=="0"||tn!=="NaN")?tn:0;
  }
  function calc(n, v){
    var tot=n.value*n.alt;
   // alert(tot);
    v.innerHTML=tot.toLocaleString();
  }

  /////////////////////////////////////////////////////////
  function ytsong(yt){
    var path="https://www.youtube.com/embed?autoplay=1&listType=search&list=MV+";
    musicVideo.src=path+yt;
  }