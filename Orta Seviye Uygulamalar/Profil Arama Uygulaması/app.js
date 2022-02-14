//Genel işlemler burada yapılacak

const profile = new Profile();
const searchProfile = document.querySelector("#searchProfile");
const ui = new UI();
searchProfile.addEventListener("keyup", (event) => {
  ui.clear();
  let text = event.target.value;
  if (text !== " ") {
    profile.getProfile(text).then((res) => {
      if (res.profile.length === 0) {
        ui.showAlert(text);
      } else {
        ui.showProfile(res.profile[0]);
      }
    });
  }
});
