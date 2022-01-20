var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.
(async function() {
  const response = await fetch(badRequestUrl)
  if (response.status !== 200) {
    location.replace('./404.html')
  }
})()
/*
fetch(badRequestUrl).then(function (response) {
  if (response.status !== 200) {
    location.replace('./404.html')
  }
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.
});