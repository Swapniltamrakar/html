var validName = ()=>{
    var flag=true;
    var name = document.getElementById("nm").value;
    var mobNo=""
    mobNo=document.getElementById("mno").value;
    var lastName = document.getElementById("lnm").value;
    var email = ""
    email=document.getElementById("email").value;
    var a=[];
    a = document.getElementsByName("rdo");
    alert(a[0].value);
    if(isNaN(name) && name!=""){
        document.getElementById("td1").innerHTML="";
        document.getElementById("td1").style.display="none";
    }else{
        document.getElementById("td1").innerHTML="invalid";
        document.getElementById("td1").style.color="red";
    }
    if(isNaN(lastName) && lastName!=""){
        document.getElementById("td2").innerHTML="";
        document.getElementById("td2").style.display="none";
    }else{
        document.getElementById("td2").innerHTML="invalid";
    }
    if(email!="" && email.includes(".com") && email.includes("@")){
        document.getElementById("td3").innerHTML="";
        document.getElementById("td3").style.display="none";
    }
    else{
        document.getElementById("td3").innerHTML="invalid email";
    }
    if(mobNo!="" && isFinite(mobNo) &&mobNo.length==10){
        document.getElementById("td4").innerHTML="";
    }else{
     
        document.getElementById("td4").innerHTML="invalid Mobile Number";
    }
    var checkbx = []
    checkbx=document.getElementsByName("skill");
    alert(checkbx[0].value)
    
}