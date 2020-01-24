$(document).ready(function() {







//****************************************** organizations section

// $.ajax({
//   url: "https://api.github.com/users/rachelwthomas/orgs",
//   Authorization: `token ${GITHUB_API_KEY}`,
//   type:'get'
//   })
//   .done((resp) => {
//     updateOrgs(resp);
//   })
//   .fail((err) => {
//     console.log(err);
//   })
//   .always(() => {
//     // console.log('always fires');
//   });
//
//   let updateOrgs = (orgs) => {
//     console.log(orgs.login)
//   }




// });
// *************************************************Organizations


 $.ajax(`https://api.github.com/users/rachelwthomas/orgs?
   client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
   .done((resp) => {
    console.log(resp);
    updateOrgsTemplate(resp)
   })
   .fail((err) => {
     console.log(err);
   })
   .always(() => {
     // console.log('always fires');
   });

   let updateOrgsTemplate = (orgsData) => {
     console.log('orgs', orgsData);
   }



});



let organizations = $('#organizations-template').html();

let organizationsTemplate = Handlebars.compile(organizations);

let orgs = {avatar_url:"https://avatars1.githubusercontent.com/u/46451814?v=4"}

let htmlOrgs = organizationsTemplate(orgs);
console.log(htmlOrgs);

$('.organizations').html(htmlOrgs);


// *******************************************************************

// let organizations = $('#organizations-template').html();
//
// let organizationsTemplate = Handlebars.compile(organizations);
//
// let orgs = {avatar_url:"https://avatars1.githubusercontent.com/u/59579879?v=4"}
//
// let htmlOrgs = organizationsTemplate(orgs);
// console.log(htmlOrgs);
//
// $('.organizations').html(htmlOrgs);
