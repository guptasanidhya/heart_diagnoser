
//#########################################################################################################################
//the checks start

var counter = 0;
$('.images img').each(function(i) {
   if (i == 0) {
       counter = 0;
   } else {
       counter++;
   }
   if (counter < 18) {
       $(this).addClass('show');
   } else {
     $(this).addClass('hide');
   }
});


function shuffleRandomLogos(remove, add) {
  const logo = $("."+remove).toArray();
  //const logo = $('.images'+remove).toArray();
  //const logo = $(".images img").toArray();
  const logoLength = logo.length;
  const randomNum = Math.floor(Math.random()*logoLength);
  const randomLogo = logo[randomNum];
  $(randomLogo).removeClass(remove);
  $(randomLogo).addClass(add);
}

window.setInterval(function(){
  // remove a cat
  shuffleRandomLogos("show", "hide");
  // display a cat
  shuffleRandomLogos("hide", "show");
}, 600);

//#####################################################################################################################
//checks end


//result pool
//#####################################################################################################################
//#####################################################################################################################
var curl = window.location.href;
if(curl=='http://127.0.0.1:5000/predict'){
    window.onload = function () {
        console.log("loading map");
        loadmap();
        console.log("generating map")
        generate();
        }}
function loadmap(){ 
var iframe = document.createElement('iframe');
iframe.width = "750px";
iframe.height = "550px";
iframe.id = "iframe";
iframe.allowfullscreen="";
iframe.loading="lazy";
iframe.referrerpolicy="no-referrer-when-downgrade"
document.getElementById("headIntro").innerHTML = "Heart Specialization Centers Nearby";
document.getElementById("small").innerHTML="Its always best to consult a physician or doctor nearby you";
document.getElementById("p1").innerHTML="";
document.getElementById("p2").innerHTML="";
document.getElementById("p3").innerHTML="";
document.getElementById("p1").appendChild(iframe);
iframe.src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58886.754717682656!2d75.83873847826149!3d22.712544770653118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sheart%20hospital%20in%20indore!5e0!3m2!1sen!2sin!4v1665138593821!5m2!1sen!2sin";
// var btndiv = document.getElementById("button2");
// document.getElementById("introSection").removeChild(btndiv);
$("#introSection button").remove();
}

 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function age() {

    document.getElementById("btn2").setAttribute("href", "https://www.google.com/search?q=how+age+affects+heart&oq=how+age+affects+heart+&aqs=chrome..69i57j0i512j0i22i30l2j0i10i22i30j0i22i30j0i390l3.7623j0j7&sourceid=chrome&ie=UTF-8");
    document.getElementById("headIntro").innerHTML = "Age";
    document.getElementById("small").innerHTML="Effects of Age on Heart";
    document.getElementById("p1").innerHTML="Age is the most important risk factor in developing cardiovascular or heart diseases, with approximately a tripling of risk with each decade of life.";
    document.getElementById("p2").innerHTML="Coronary fatty streaks can begin to form in adolescence. It is estimated that 82 percent of people who die of coronary heart disease are 65 and older.";
    document.getElementById("p3").innerHTML="Simultaneously, the risk of stroke doubles every decade after age 55.";

}
function sex() {
    document.getElementById("btn2").setAttribute("href","https://www.google.com/search?q=how+gender+affects+heart&sxsrf=ALiCzsZaA-mHAoFN6jhFmt5-DLqGqrJ3Jg%3A1665138916664&ei=5ABAY8qdKNON4-EP_-a4kA8&ved=0ahUKEwjKn4Tt9c36AhXTxjgGHX8zDvIQ4dUDCA4&uact=5&oq=how+gender+affects+heart&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyCAgAEB4QDxAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyCAgAEB4QDxAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWOgoIABBHENYEELADOgQIIxAnOgoIABCABBCHAhAUSgQIQRgASgQIRhgAUO8EWIQSYIcTaANwAXgAgAHeAogBpwuSAQcwLjEuNC4xmAEAoAEByAEIwAEB&sclient=gws-wiz-serp")
    document.getElementById("headIntro").innerHTML = "Sex or Gender";
    document.getElementById("small").innerHTML="Effects of Gender on Heart Disease";
    document.getElementById("p1").innerHTML="Men are at greater risk of heart disease than pre-menopausal women."
    document.getElementById("p2").innerHTML="Once past menopause, it has been argued that a woman’s risk is similar to a man’s although more recent data from the WHO and UN disputes this."
    document.getElementById("p3").innerHTML="If a female has diabetes, she is more likely to develop heart disease than a male with diabetes."
}
function cp() {
    document.getElementById("btn2").setAttribute("href","https://www.google.com/search?q=effects+of+chest+pain+on+heart&oq=effects+of+chest+pain+on+heart&aqs=chrome..69i57j33i160l4j33i15i22i29i30j33i22i29i30l4.10196j0j7&sourceid=chrome&ie=UTF-8")
    document.getElementById("headIntro").innerHTML = "Chest Pain";
    document.getElementById("small").innerHTML="Effects of Chest Pain on Heart";
    document.getElementById("p1").innerHTML="Angina is chest pain or discomfort caused when your heart muscle doesn’t get enough oxygen-rich blood."
    document.getElementById("p2").innerHTML=" It may feel like pressure or squeezing in your chest. The discomfort also can occur in your shoulders, arms, neck, jaw, or back. Angina pain may even feel like indigestion."
    document.getElementById("p3").innerHTML="Chest-pain type: displays the type of chest-pain experienced by the individual using the following format :  0= typical angina, 1 = atypical angina, 2 = non — anginal pain, 3 = asymptotic"
}
function trestbps() {
    document.getElementById("btn2").setAttribute("href","https://www.google.com/search?q=how+blood+pressure+affect+heart&sxsrf=ALiCzsb2L0_0roI8HD9I5RoVC_FU4yO6Aw%3A1665169726032&ei=PnlAY__SAdHy4-EPoYyUuA0&ved=0ahUKEwj_6YrQ6M76AhVR-TgGHSEGBdcQ4dUDCA4&oq=how+blood+preesure+affects+heart&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQDDIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQR0oECEEYAEoECEYYAFAAWABgqg1oAHACeACAAQCIAQCSAQCYAQDIAQjAAQE&sclient=gws-wiz-serp")
    document.getElementById("headIntro").innerHTML = "Resting Blood Pressure";
    document.getElementById("small").innerHTML="Effects of Resting Blood Pressure on Heart";
    document.getElementById("p1").innerHTML="Over time, high blood pressure can damage arteries that feed your heart."
    document.getElementById("p2").innerHTML="High blood pressure that occurs with other conditions, such as obesity, high cholesterol or diabetes, increases your risk even more."
    document.getElementById("p3").innerHTML="Resting Blood Pressure: displays the resting blood pressure value of an individual in mmHg (unit)"
}
function chol() {
    document.getElementById("btn2").setAttribute("href","https://www.google.com/search?q=how+cholesterol+affect+heart&sxsrf=ALiCzsae-G2b3YweTASJsuceWnLEvMvMXQ%3A1665169735884&ei=R3lAY-zRNZGM4-EP4MyBmA4&ved=0ahUKEwiskeTU6M76AhURxjgGHWBmAOMQ4dUDCA4&uact=5&oq=how+cholesterol+affect+heart&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECAAQHjIGCAAQHhAIMgYIABAeEAgyBggAEB4QCDIGCAAQHhAIMgYIABAeEAgyCAgAEB4QDxAIMgYIABAeEAgyBggAEB4QCDIFCAAQhgM6CggAEEcQ1gQQsAM6BwgjELACECc6BggAEB4QBzoICAAQHhAIEAc6CAgAEB4QDxAHOgoIABAeEA8QCBAHOgoIABAeEAgQBxAKOgYIABAeEA06CAgAEB4QCBANSgQIQRgASgQIRhgAUIcyWJZjYLpmaANwAXgDgAG9BIgB2TGSAQswLjIuNy44LjEuMpgBAKABAcgBCMABAQ&sclient=gws-wiz-serp")
    document.getElementById("headIntro").innerHTML = "Serum Cholesterol";
    document.getElementById("small").innerHTML="Effects of Serum Cholesterol on Heart";
    document.getElementById("p1").innerHTML=" A high level of low-density lipoprotein (LDL) cholesterol (the “bad” cholesterol) is most likely to narrow arteries."
    document.getElementById("p2").innerHTML="A high level of triglycerides, a type of blood fat related to your diet, also ups your risk of a heart attack. However, a high level of high-density lipoprotein (HDL) cholesterol (the “good” cholesterol) lowers your risk of a heart attack."
    document.getElementById("p3").innerHTML="Serum Cholestrol: displays the serum cholesterol in mg/dl (unit)"
}
function fbs() {
    document.getElementById("btn2").setAttribute("href","https://www.google.com/search?q=how+blood+sugar+affects+heart&oq=how+blood+sugar+affects+heart&aqs=chrome..69i57j0i10i22i30j0i22i30l6j0i390l2.15571j0j7&sourceid=chrome&ie=UTF-8")
    document.getElementById("headIntro").innerHTML = "Fasting Blood Sugar";
    document.getElementById("small").innerHTML="Effects of Fasting Blood Sugar on Heart";
    document.getElementById("p1").innerHTML="Not producing enough of a hormone secreted by your pancreas (insulin) or not responding to insulin properly causes your body’s blood sugar levels to rise, increasing your risk of a heart attack.";
    document.getElementById("p2").innerHTML="Fasting Blood Sugar: compares the fasting blood sugar value of an individual with 120mg/dl.";
    document.getElementById("p3").innerHTML="If fasting blood sugar > 120mg/dl then : 1 (true) else : 0 (false)";
}
function restecg() {
    document.getElementById("btn2").setAttribute("href","https://www.google.com/search?q=how+ecg+affects+heart&sxsrf=ALiCzsaNYz81iVJRer7S9slGjvwvR8kUGA%3A1665170401553&ei=4XtAY663IeiG4-EPycGBwA8&ved=0ahUKEwjuq5mS6876AhVowzgGHclgAPgQ4dUDCA4&uact=5&oq=how+ecg+affects+heart&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIKCCEQwwQQChCgAToKCAAQRxDWBBCwA0oECEEYAEoECEYYAFCnB1ieDGDBHmgBcAF4AIAB2AOIAYkMkgEJMC4yLjAuMi4xmAEAoAEByAEIwAEB&sclient=gws-wiz-serp")
    document.getElementById("headIntro").innerHTML = "Resting ECG";
    document.getElementById("small").innerHTML="Effects of Resting ECG on Heart";
    document.getElementById("p1").innerHTML="Resting 12-lead electrocardiography (ECG) is a non-invasive test that can detect abnormalities including arrhythmias, evidence of coronary heart disease, left ventricular hypertrophy and bundle branch blocks."
    document.getElementById("p2").innerHTML="For people at low risk of cardiovascular disease, the USPSTF concludes with moderate certainty that the potential harms of screening with resting or exercise ECG equal or exceed the potential benefits. For people at intermediate to high risk, current evidence is insufficient to assess the balance of benefits and harms of screening."
    document.getElementById("p3").innerHTML="Resting ECG : displays resting electrocardiographic results 0 = normal, 1 = having ST-T wave abnormality, 2 = left ventricular hyperthrophy"
}
function thalach() {
    document.getElementById("btn2").setAttribute("href","https://www.google.com/search?q=how+heart+rate+affects+heart&oq=how+heart+rate+affects+heart&aqs=chrome..69i57j33i160l2j33i22i29i30.6990j0j7&sourceid=chrome&ie=UTF-8")
    document.getElementById("headIntro").innerHTML = "Max Heart Rate";
    document.getElementById("small").innerHTML="Effects of Max Heart Rate";
    document.getElementById("p1").innerHTML="The increase in cardiovascular risk, associated with the acceleration of heart rate, was comparable to the increase in risk observed with high blood pressure."
    document.getElementById("p2").innerHTML="It has been shown that an increase in heart rate by 10 beats per minute was associated with an increase in the risk of cardiac death by at least 20%, and this increase in the risk is similar to the one observed with an increase in systolic blood pressure by 10 mm Hg."
    document.getElementById("p3").innerHTML="thalach: The person's maximum heart rate achieved."
}
function exang() {
    document.getElementById("btn2").setAttribute("href","https://www.google.com/search?q=how+Exercise+induced+angina+affect+heart&oq=how+Exercise+induced+angina+affect+heart&aqs=chrome..69i57j33i160l2.11304j0j7&sourceid=chrome&ie=UTF-8")
    document.getElementById("headIntro").innerHTML = "Exercise Induced Angina";
    document.getElementById("small").innerHTML="Effects of Exercise Induced Angina ";
    document.getElementById("p1").innerHTML="Exercise-induced angina (AP) is a common complaint of cardiac patients, particularly when exercising in the cold."
    document.getElementById("p2").innerHTML=" The pain or discomfort associated with angina usually feels tight, gripping or squeezing, and can vary from mild to severe. Angina is usually felt in the center of your chest but may spread to either or both of your shoulders, or your back, neck, jaw or arm."
    document.getElementById("p3").innerHTML=" It can even be felt in your hands. o Types of Angina a. Stable Angina / Angina Pectoris b. Unstable Angina c. Variant (Prinzmetal) Angina d. Microvascular Angina.Exercise induced angina :1 = yes, 0 = no"
}
function oldpeak() {
    document.getElementById("btn2").setAttribute("href","https://www.google.com/search?q=ST+depression+induced+by+exercise+relative+to+rest&oq=ST+depression+induced+by+exercise+relative+to+rest&aqs=chrome..69i57j0i512j0i67j0i390l2.1368j0j7&sourceid=chrome&ie=UTF-8")
    document.getElementById("headIntro").innerHTML = "Old Peak";
    document.getElementById("small").innerHTML="Effects of ST depression induced by exercise relative to rest";
    document.getElementById("p1").innerHTML="ST depression is a term that refers to the position of the ST segment in a person’s ECG results.the ST segment represents the period in the cardiac cycle when the muscular layer of the heart maintains contraction to expel blood from the ventricles.The ST segment is the flat, isoelectric section of the ECG between the end of the S wave (the J point) and the beginning of the T wave.Exercise induced ST segment depression is considered a reliable ECG finding for the diagnosis of obstructive coronary atherosclerosis.1,2 It has also been associated with a worse prognosis for patients with a documented coronary artery disease (CAD)."
    document.getElementById("p2").innerHTML="The ST segment represents the period in the cardiac cycle when the muscular layer of the heart maintains contraction to expel blood from the ventricles.An ST depression is a specific outcome that may appear in a person’s electrocardiogram (ECG) results. It is associated with health conditions such as hypokalemia and myocardial ischemia. Certain medications may also cause an ST depression, such as digitalis."
    document.getElementById("p3").innerHTML="ST depression induced by exercise relative to rest: displays the value which is an integer or float.(0-6.5) approximate values"
}
function slope() {
    document.getElementById("btn2").setAttribute("href","https://www.google.com/search?q=how+slope+of+the+peak+exercise+st+segment+affect+heart&sxsrf=ALiCzsb_aDsLyrU8UXlHbZvrbBpr2tQ8Gw%3A1665173014625&ei=FoZAY4bqJaDhseMPtMiL-AY&ved=0ahUKEwiGzZrw9M76AhWgcGwGHTTkAm8Q4dUDCA4&uact=5&oq=how+slope+of+the+peak+exercise+st+segment+affect+heart&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCEQoAEQCjIHCCEQoAEQCjIHCCEQoAEQCjIHCCEQoAEQCjIECCEQFToKCAAQRxDWBBCwAzoHCCMQsAIQJzoFCAAQogQ6BQghEKABSgQIQRgASgQIRhgAUJEWWMtTYM1UaAFwAXgAgAGSA4gBsyGSAQkwLjMuOS4zLjGYAQCgAQHIAQjAAQE&sclient=gws-wiz-serp")
    document.getElementById("headIntro").innerHTML = "Slope";
    document.getElementById("small").innerHTML="Effects of slope of the peak exercise ST segment";
    document.getElementById("p1").innerHTML="AA treadmill ECG stress test is considered abnormal when there is a horizontal or down-sloping ST-segment depression ≥ 1 mm at 60–80 ms after the J point. Exercise ECGs with up-sloping ST-segment depressions are typically reported as an ‘equivocal’ test. In general, the occurrence of horizontal or down-sloping ST-segment depression at a lower workload (calculated in METs) or heart rate indicates a worse prognosis and higher likelihood of multi-vessel disease."
    document.getElementById("p2").innerHTML="The duration of ST-segment depression is also important, as prolonged recovery after peak stress is consistent with a positive treadmill ECG stress test. Another finding that is highly indicative of significant CAD is the occurrence of ST-segment elevation > 1 mm (often suggesting transmural ischemia); these patients are frequently referred urgently for coronary angiography."
    document.getElementById("p3").innerHTML="Peak exercise ST segment : 0 = upsloping, 1 = flat, 2 = downsloping"
}
function ca() {
    document.getElementById("btn2").setAttribute("href","https://www.google.com/search?sxsrf=ALiCzsYfQz4p9ybJf6q9bt7K0dM5kKIaYg:1665173299465&q=what+is+ca+in+heart+fluoroscopy&spell=1&sa=X&ved=2ahUKEwjM6YP49c76AhW1SGwGHet-DmEQBSgAegQIBhAB&biw=1280&bih=577&dpr=1.5")
    document.getElementById("headIntro").innerHTML = "Coronary Artery Calcium Fluoroscopy";
    document.getElementById("small").innerHTML="Effects of CA on Heart";
    document.getElementById("p1").innerHTML="A heart scan, also known as a coronary calcium scan, is a specialized X-ray test that provides pictures of your heart that can help your doctor detect and measure calcium-containing plaque in your arteries."
    document.getElementById("p2").innerHTML="Plaque inside the arteries of your heart can grow and restrict blood flow to the muscles of your heart."
    document.getElementById("p3").innerHTML="Number of major vessels (0–3) colored by flourosopy : displays the value as integer or float."
}
function thal() {
    document.getElementById("btn2").setAttribute("href","https://www.google.com/search?q=how+thalassemia+affects+heart&sxsrf=ALiCzsaI2vIP7xksK1fzYFkKXfQnXNV97w%3A1665174118337&ei=ZopAY7KaFM6Q3LUPqfqY-Ak&ved=0ahUKEwiy5b_--M76AhVOCLcAHSk9Bp8Q4dUDCA4&uact=5&oq=how+thalassemia+affects+heart&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQHhAWMgUIABCGAzIFCAAQhgMyBQgAEIYDMgUIABCGAzoECCMQJzoECAAQQzoLCAAQgAQQsQMQgwE6CAgAEIAEELEDOgsILhCABBCxAxCDAToKCAAQsQMQgwEQQzoFCAAQgAQ6CAguEIAEELEDOgUIABCRAjoKCAAQgAQQhwIQFDoICC4QgAQQ1AI6BQguELEDOggIABAeEBYQCjoICAAQHhAPEBY6BwgAEIAEEA06CAgAEB4QCBANOgoIABAeEAgQDRAKOgcIIRCgARAKOgQIIRAVOggIIRAeEBYQHUoECEEYAEoECEYYAFAAWMhiYLllaAJwAXgAgAGWBIgB5TaSAQwwLjguMTEuNi4xLjGYAQCgAQHAAQE&sclient=gws-wiz-serp")
    document.getElementById("headIntro").innerHTML = "Thalassemia";
    document.getElementById("small").innerHTML="Effects of Thalassemia on Heart";
    document.getElementById("p1").innerHTML="Thalassemia (thal-uh-SEE-me-uh) is an inherited blood disorder that causes your body to have less hemoglobin than normal. Hemoglobin enables red blood cells to carry oxygen. Thalassemia can cause anemia, leaving you fatigued. If you have mild thalassemia, you might not need treatment."
    document.getElementById("p2").innerHTML="Heart failure and arrhythmias are the major cause of death in patients with b-thalassemia."
    document.getElementById("p3").innerHTML="Value 1: normal blood flow, Value 2: fixed defect (no blood flow in some part of the heart), Value 3: reversible defect (a blood flow is observed but it is not normal)"
}


function generate(){
const element=document.getElementById('button3');
let btn = document.createElement("button");
btn.innerHTML = "Generate PDF";
element.appendChild(btn);
btn.onclick = function () {
var opt = {
  margin:       [0,1.5,0,0],//[top,left,bottom,right]
//  margin:       [0,0,3,0],//[top,left,bottom,right]

  filename:     'heart.pdf',
   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait',page_size:'Letter' }
//   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait',page_size:'Letter' }
//Main margins of the page (left, top, right, bottom) in mm
//			'A4'=> array(  595.276,   841.890), // = (  210 x 297  ) mm  = (  8.27 x 11.69 ) in
//   jsPDF:        { unit: 'mm', width:'210',height:'297' }
// A4 size in pixels at 72 DPI: 595 x 842 pixels. A4 size in pixels at 300 DPI(dots per inch): 2480 x 3508 pixels.
   };
alert("Click ok to generate pdf");
    console.log("generating pdf...")
    const element1=document.getElementById("tables");
html2pdf().set(opt).from(element1).save();
};}

function generatePDF(){
    console.log("generating pdf...")
    const element=document.getElementById("tables");
html2pdf()
.from(element)
.save();
}