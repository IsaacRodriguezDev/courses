"use strict";
window.onload = () => {
  let courseDetailsTableBody = document.getElementById(
    "courseDetailsTableBody"
  );
  detailsData(courseDetailsTableBody);
};

async function detailsData(courseDetailsTableBody) {
  const urlParams = new URLSearchParams(location.search);
  console.log(urlParams);

  if (urlParams.has("courseid")) {
    displayCourseDetails(urlParams.get("courseid"), courseDetailsTableBody);
  } else {
    alert("no valid course id");
    window.location.href = "./index.html";
  }
}

async function displayCourseDetails(courseId, courseDetailsTableBody) {
  try {
    let response = await fetch("http://localhost:8081/api/courses/" + courseId);
    let detailsData = await response.json();
    console.log(detailsData);
    let newRow = courseDetailsTableBody.insertRow();
    let cell1 = newRow.insertCell();
    cell1.innerHTML = detailsData.instructor;
    let cell2 = newRow.insertCell();
    cell2.innerHTML = detailsData.startDate;
    let cell3 = newRow.insertCell();
    cell3.innerHTML = `${detailsData.numDays} days`;
  } catch (error) {
    console.log(error);
  }
}
