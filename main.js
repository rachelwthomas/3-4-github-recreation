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
// ***********************************************************Profile picture


$.ajax(`https://api.github.com/users/rachelwthomas?
  client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
  .done((resp) => {
   // console.log(resp);
   updateProfileTemplate(resp)
  })
  .fail((err) => {
    console.log(err);
  })
  .always(() => {
    // console.log('always fires');
  });

  let updateProfileTemplate = (profData) => {
    // console.log('prof', profData);

    let profileSource = $('#profile-template').html();

    let profileTemplate = Handlebars.compile(profileSource);

    let htmlProf = profileTemplate({prof:profData});
    // console.log(htmlProf);

    $('.profile-picture').html(htmlProf);
  }

// *************************************************Organizations


 $.ajax(`https://api.github.com/users/rachelwthomas/orgs?
   client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
   .done((resp) => {
    // console.log(resp);
    updateOrgsTemplate(resp)
   })
   .fail((err) => {
     console.log(err);
   })
   .always(() => {
     // console.log('always fires');
   });

   let updateOrgsTemplate = (orgsData) => {
     // console.log('orgs', orgsData);
     let source = $('#organizations-template').html(); // html of your template
     let template = Handlebars.compile(source); // returns a function
     let html = template({orgs: orgsData}) // creates your html
     $('.organizations').html(html); // update the DOM
   }




// *******************************************************************REPOS

$.ajax(`https://api.github.com/users/rachelwthomas/repos?
  client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
  .done((resp) => {
   // console.log(resp);
   updateReposTemplate(resp)
  })
  .fail((err) => {
    console.log(err);
  })
  .always(() => {
    // console.log('always fires');
  });

  let updateReposTemplate = (reposData) => {
    // console.log('orgs', orgsData);
    let repoSource = $('#repos-template').html(); // html of your template
    let repoTemplate = Handlebars.compile(repoSource); // returns a function
    let repoHtml = repoTemplate({repo: reposData}) // creates your html
    $('.repo-section').html(repoHtml); // update the DOM
  }








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





});
