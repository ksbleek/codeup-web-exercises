function getUserInformation(userInfo) {
    return fetch(`https://api.github.com/users/${userInfo}/events/public`, {headers: {'Authorization': 'GITHUB_API_KEY'}})
        .then(response => response.json())
}
const result = getUserInformation('ksbleek')
    .then(function(user){
        for (let i = 0; i < user.length; i++) {
            if(user.type === "PushEvent"){
                return user.created_at;
            }
        }
    })




