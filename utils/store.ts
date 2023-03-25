
function saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }
  
function retrieveUser() {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user)
    } else {
      return null
    }
}

export {saveUser,retrieveUser}