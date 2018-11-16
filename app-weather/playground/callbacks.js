var getUser = (pies, callMeBaby) => {
  var user = {
    id: pies,
    name: 'Jake'
  }
  setTimeout(() => {
    callMeBaby(user)
  }, 3000)
}

getUser(31, (userObject) => {
  console.log(userObject)
})
