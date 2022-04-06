const github = new Github;
const ui = new Ui;

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) =>{
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
            if(data.profileData.message === "Not Found") {
                //Show Alert
                alert("Alert");
            } else {
                // Show Profile
                ui.showProfile(data.profileData);
                ui.showRepo(data.repos);
            }
        });
    } else {
        // Clear Section
        ui.clearProfile();
    }
})


















