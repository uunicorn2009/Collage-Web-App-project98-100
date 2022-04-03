var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();
function Start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content ==" selfie" ){
        speak();
    } 
}
function speak(){
    var synth= window.speechSynthesis;
    speak_data="Taking your selfie in 10 seconds " ;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
     setTimeout(function(){
        take_snapshot();
        save();
     },5000);
 
}
function take_snapshot(){
    Webcam.snap(function(data_uri){
        if(img_id =="selfie1"){
        document.getElementById("result1").innerHTML='<img id="selife1""src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
        document.getElementById("result2").innerHTML='<img id="selifie2"src="'+data_uri+'"/>' ;}
        if(img_id=="selfie3"){
         document.getElementById("result3").innerHTML='<img id="selife3"src="'+data_uri+'"/>'  ;}
         });
}
Webcam.set({
    width:360,
    height:250,
    image_formate:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function save(){
    link=document.getElementById("link");
    image=document.getElementById("captured_image").src;
    link.href=image;
    link.click();
}