class Ui {
    constructor(){
        this.profile = document.getElementById("profile");
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div id="mainCard">
        <div id="topCard">
            <div id="topCardLeft">
                <img src="${user.avatar_url}" id="avatar">
                <button id="profileBtn"><a href="${user.html_url}">View Profile</a></button>
            </div>
            <div id="topCardRight">
                <div id="rightTop">
                    <h3>Public Repos: ${user.public_repos}</h3>
                    <h3>Public GISTS: ${user.public_gists}</h3>
                    <h3>Followers: ${user.followers}</h3>
                    <h3>Following: ${user.following} </h3>
                </div>
                <div id="rightBottom">
                    <p>Company: ${user.company}</p>
                    <p>Webiste: ${user.blog}</p>
                    <p>Location: ${user.location}</p>
                    <p>Member Since: ${user.created_at}</p>
                </div>
            </div>
        </div>
        <div id="bottomCard">
            <h2>Latest Repos</h2>
            <div class="repo">
                <p>Thing 1</p>
                <div class="innerRepo">Thing</div>
                <div class="innerRepo">Thing</div>
                <div class="innerRepo">Thing</div>
            </div>
        </div>
    </div>
        `;
    }
}