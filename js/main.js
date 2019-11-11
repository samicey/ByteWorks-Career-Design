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
    let myUpload = $('#uploadDocs');
    let jobOpening = $('#openings1');
    let Applications = $('#openings2');
    let jobHome = $('#jobHome');
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
    
myEduLink.on('click',()=>{
    myBio.hide()
    uploadDoc.hide()
    myApplications.hide() 
    myEducation.fadeIn()
    myWork.hide()
    mySkills.hide()
    myCert.hide()
    optionBars.hide()
    Jobs.hide();
})

myWorkLink.on('click',()=>{
    myBio.hide()
    uploadDoc.hide()
    myApplications.hide() 
    myEducation.hide()
    myWork.fadeIn()
    mySkills.hide()
    myCert.hide()
    optionBars.hide()
    Jobs.hide();
})

myCertLink.on('click',()=>{
    myBio.hide()
    uploadDoc.hide()
    myApplications.hide() 
    myEducation.hide()
    myWork.hide()
    mySkills.hide()
    myCert.fadeIn()
    optionBars.hide()
    Jobs.hide();
})
    
mySkillsLink.on('click',()=>{
    myBio.hide()
    uploadDoc.hide()
    myApplications.hide() 
    myEducation.hide()
    myWork.hide()
    mySkills.fadeIn()
    myCert.hide()
    optionBars.hide()
    Jobs.hide();
})
    
myUpload.on('click',()=>{
    myBio.hide()
    uploadDoc.fadeIn()
    myApplications.hide() 
    myEducation.hide()
    myWork.hide()
    mySkills.hide()
    myCert.hide()
    optionBars.hide()
    Jobs.hide();
})
    
jobOpening.on('click',()=>{
    myBio.hide()
    uploadDoc.fadeIn()
    myApplications.hide() 
    myEducation.hide()
    myWork.hide()
    mySkills.hide()
    myCert.hide()
    optionBars.fadeIn()
    Jobs.fadeIn();
})
    
jobHome.on('click',()=>{
    myBio.hide()
    uploadDoc.hide()
    myApplications.hide() 
    myEducation.hide()
    myWork.hide()
    mySkills.hide()
    myCert.hide()
    optionBars.fadeIn()
    Jobs.fadeIn();
})
    
Applications.on('click',()=>{
    myBio.hide()
    uploadDoc.hide()
    myApplications.fadeIn() 
    myEducation.hide()
    myWork.hide()
    mySkills.hide()
    myCert.hide()
    optionBars.fadeIn()
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