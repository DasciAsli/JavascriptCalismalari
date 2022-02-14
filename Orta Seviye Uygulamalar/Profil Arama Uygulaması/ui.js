class UI {
  constructor() {
    this.profileContainer = document.querySelector("#profileContainer");
    this.alert = document.querySelector("#alert");
  }
  showProfile(profile) {
    this.profileContainer.innerHTML = `
    
    <div class="row">
    <div class="col-md-3">
      <a href="https://placeholder.com/"
        ><img
          src="http://via.placeholder.com/300"
          alt=""
          class="img-thumbnail"
        />
      </a>
    </div>
    <div class="col-md-9">
      <h4>Contact</h4>
      <ul class="list-group">
        <li class="list-group-item">Name :${profile.name}</li>
        <li class="list-group-item">UserName :${profile.username}</li>
        <li class="list-group-item">Email :${profile.email}</li>
        <li class="list-group-item">Phone :${profile.phone}</li>
      </ul>
    </div>
  </div>
   `;
  }

  showAlert(text) {
    this.alert.innerHTML = `${text} bulunamadi`;
  }

  clear() {
    this.profileContainer.innerHTML = "";
    this.alert.innerHTML = "";
  }
}
