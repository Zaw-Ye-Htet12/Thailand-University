const listContainerTag=document.querySelector(".listContainer")


const hideMenu=()=>{
  listContainerTag.style.width=`0px`
}

const showMenu=()=>{
    listContainerTag.style.width=`200px`
}


// const login=()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("Loginng into server...")
//     }, 3000);
//   })  
// }

// const fetch=()=>{
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Fetching Data from server...")
//     }, 3000);
//   })
// }

// const fetchingFri=()=>{
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Fetching Friends from server...")
//     }, 3000);
//   })
// }

// const fetchingNews=()=>{
//  return new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve("Fetching News Feed from server...")
//   }, 3000);
//  })
// }

// const FackbookUI=(Data)=>{
//   console.log("Making UI with fetching data from server...",Data)
// }



// const show = async ()=>{
//     const loginData=await login()
//     console.log("first then:",loginData) 
//     const fetchData=await fetch()
//     console.log("second then:",fetchData)
//     const fetchingFriData=await fetchingFri()
//     console.log("third then:",fetchingFriData) 
//     const fetchingNewsData=await fetchingNews()
//     console.log("forth then:",fetchingNewsData)
//     FackbookUI(fetchingNewsData)
 
// }

// console.log("first")

// show().catch((error)=>{
//   console.log("Inside catch: ",error)
// })

// console.log("second")


// throw error

// const user={
//   name:"thar lay",
//   email:"tharlay@gmail.com"
// }

// const registerUser=(user)=>{
//     if(!user.name || !user.email){
//     throw new Error ("user should enter name and email.")
//     }else{
//       console.log("Register successfully")
//     }
// }
// try {
//   registerUser(user)
// } catch (error) {
//   console.log("inside catch =>",error)
// }




// console.log("ui code after successful")
// console.log("ui code after successful")

// console.log("ui code after successful")

// console.log("ui code after successful")

let url="https://fakestoreapi.com/products"
const loadData=()=>{
  return new Promise ((resolve,reject)=>{
    fetch(url).then((response)=>{
      resolve(response.json())
    }).catch((error)=>{
      reject(error)
    })
  })
}
loadData().then((response)=>{console.log(response)})
.catch((error)=>{
  console.log(error)
})



 fetch (url) 
