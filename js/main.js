$(document).ready(function(){
    // Parts of the site
    let myBio  =  $('#myBio') ;
    let myEducation = $('#myEducation');
    let myWork = $('#myWork');
    let mySkills = $('#mySkills');
    let myCert = $('#myCert');
    let Jobs = $('#jobs');
    let optionBars = $('#optionBars');
    let uploadDoc = $('#uploadDoc');
    let myApplications = $('#myApplications');
    
    // Links 
    let myBioLink = $('#myBioLink');
    let myEduLink = $('#myEduLink');
    let myWorkLink = $('#myWorkLink');
    let mySkillsLink = $('#mySkillsLink');
    let myCertLink = $('#myCertLink');
    let myUpload = $('#uploadDocs')
    // Hide other sections of the page  
    
    myEducation.hide()
    myWork.hide()
    mySkills.hide()
    myCert.hide()
    myBio.hide()

myBioLink.on('click',()=>{
    myBio.fadeIn()
    uploadDoc.hide()
    myApplications.hide() 
    myEducation.hide()
    myWork.hide()
    mySkills.hide()
    myCert.hide()
    optionBars.hide()
    Jobs.hide();
})

    
})
/*
profileColumn
details
profileCon


jobHome => jobs
myBioLink =>myBio
myEduLink =>myEducation
myWorkLink => myWork
mySkillsLink => mySkills
myCertLink => myCert
uploadDoc => uploadDoc
optionBars
openings1 => jobs
openings2 =>myApplications


*/