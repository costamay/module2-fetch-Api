// console.log("All is good")
let BASE_URL ="https://jsonplaceholder.typicode.com/users"
let wrapper = document.getElementById("wrapper")

// fetch(BASE_URL,{
//     method : "GET||POST||DELETE||PATCH",
//     headers: {
//         "Content-Type": "applicalication/json"
//     },
//     body: JSON.stringify({})
// })
// .then(promise)
// .then(data)
// .catch(error)

// fetch(BASE_URL)
// .then(function(res){
//     return res.json()
// })
// .then(users => console.log(data))
// .catch(error => console.log(error))

// asyn function

async function getUsers() {

    let response = await fetch(BASE_URL)
    
    let users =  await response.json()

    displayUsers(users)
    
}

getUsers()

function displayUsers(usersArr) {

    usersArr.forEach(function(user){

        let html = `
        <div>
            <h2>Name: ${user.name}</h2>
            <h3>Username: ${user.username}</h3>
            <p>Email: ${user.email}</p>
            <h5>Phone: ${user.phone}</h5>
        </div>
        `
        wrapper.innerHTML += html

    // let div = document.createElement('div')
    // let name = document.createElement('h2')
    // name.innerText = `Name: ${user.name}`
    
    // let username = document.createElement('h3')
    // username.innerText = `Username: ${user.username}`

    // let email = document.createElement("p")
    // email.innerText = `Email: ${user.email}`

    // let phone = document.createElement("h5")
    // phone.innerText = `Phone: ${user.phone}`

    // // append individual user data to div
    // div.append(name)
    // div.append(username)
    // div.append(email)
    // div.append(phone)

    // // append div to wrapper
    // wrapper.append(div)
    })
    
}