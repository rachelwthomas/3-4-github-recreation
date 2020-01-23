$(document).ready(function() {








//****************************************** organizations section

$.ajax({
  url: "https://api.github.com/users/rachelwthomas/orgs",
  Authorization: `token ${GITHUB_API_KEY}`
  })
  .done((resp) => {
    updateOrgs(resp);
  })
  .fail((err) => {
    console.log(err);
  })
  .always(() => {
    // console.log('always fires');
  });

  let updateOrgs = (orgs) => {
    console.log(orgs.login)
  }




});
