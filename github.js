class Github {
    constructor(){
        this.client_id = "33b9820d0bd049434cf0";
        this.client_secret = "9bf3c5993a20617a2cc36a834b02ec9e16a25f48";
        this.repo_count = 5;
        this.repo_sort = "created: asc";

    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profileData,
            repos
        }
    }
}