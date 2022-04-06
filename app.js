const github = new Github;
const ui = new Ui;

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) =>{
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
            console.log(data);
            if(data.profileData.message === "Not Found") {
                //Show Alert
                console.log("Alert");
            } else {
                // Show Profile
                ui.showProfile(data.profileData);
            }
        });
    } else {
        // Clear Section

        console.log("Clear")
    }
})