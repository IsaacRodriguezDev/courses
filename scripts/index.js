"use strict"

window.onload =()=> {
    let courseTableBody = document.getElementById('courseTableBody')
  
    getCourses(courseTableBody)
   
}
async function getCourses(courseTableBody){
    // the try says try these things and if it doesn't work out , fall into the catch and deal with the error
    try{
        // make the API call to get all the courses
    let response = await fetch('http://localhost:8081/api/courses/')
    let data = await response.json()
    // loop thorugh the courses array and create new table rows and cells with chosen data
    for(let i = 0; i< data.length;i++){
        let newRow = courseTableBody.insertRow()
        let cell1 = newRow.insertCell()
        cell1.innerHTML = data[i].dept
        let cell2 = newRow.insertCell()
        cell2.innerHTML = data[i].courseNum
        let cell3 = newRow.insertCell()
        cell3.innerHTML = `<a href="details.html?courseid=${data[i].id}">${data[i].courseName}</a>`
        
    }
} catch(error){
    console.log(error)
    
}

}

