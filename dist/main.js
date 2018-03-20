"use strict";

/* To edit a stored record*/
function editStudentData(editButton) {
    //console.log(but);
    var id = editButton.getAttribute('data-id');

    /* Using local storage to store id of record which we want to edit */
    sessionStorage.setItem("editId", id);
    window.location = "editItem.html";
}

function fillEditPage() {
    var id = sessionStorage.getItem('editId');

    sessionStorage.removeItem('editId');

    var stu = sessionStorage.getItem(id);
    var obj = JSON.parse(stu);

    document.getElementById("sname").value = obj.name;
    document.getElementById("sid").value = id;
    document.getElementById("syear").value = obj.year;
    document.getElementById("sstream").value = obj.stream;

    sessionStorage.removeItem(id);
}

/* To delete a stored record. */
function deleteStudentData(but) {

    var id = but.getAttribute('data-id');
    if (confirm('Are You Sure?')) {
        sessionStorage.removeItem(id);
    }

    var rows = document.getElementById('dataTable').getElementsByTagName("tr").length;
    if (rows == 2) {
        alert("Table is empty! Filling dummy data.");
    }
    window.location.reload(true);
}

/* A function to add dummy records when there are no records in the storage*/
function dummyRecords() {
    var rows = document.getElementById('dataTable').getElementsByTagName("tr").length;
    // Add dummy records on first time load
    if (rows === 1) {
        var studentObj = { 'name': 'John Doe', 'year': '2020', 'stream': 'CSE' };
        sessionStorage.setItem(987654321, JSON.stringify(studentObj));

        studentObj = { 'name': 'Ashutosh', 'year': '2019', 'stream': 'CSE' };
        sessionStorage.setItem(1510991132, JSON.stringify(studentObj));
    }
    // calling showData() again to fill up the table.
    showData();
}

function addStudentData() {

    var name = document.getElementById('sname').value;
    var id = document.getElementById('sid').value;
    var year = document.getElementById('syear').value;
    var stream = document.getElementById('sstream').value;

    // Form validation -- the fields should not be empty.
    if (name == null || name == "", id == null || id == "", year == null || year == "", stream == null || stream == "") {
        alert("Please fill all required fields.");
        return false;
    }

    /* Ensuring unique keys hsould be allowed. */
    for (var i = 0; i < sessionStorage.length; i++) {
        if (sessionStorage.key(i) == id) {
            alert("Id already exist, cannot insert more than one record using one ID.");
            return false;
        }
    }

    // Making a JSON object using the form values 
    var studentObj = { 'name': name, 'year': year, 'stream': stream };

    // Pushing record to sessionStorage after stringify JSON Object
    sessionStorage.setItem(id, JSON.stringify(studentObj));

    /* Redirecting back to home page*/
    alert("Done. Redirect to home page.");

    window.location.href = "index.html";
    return false;
}

/*
* A funtion to show all the records present in the session Storage.
*/
function showData() {

    for (var i = 0; i < sessionStorage.length; i++) {

        var stu = sessionStorage.getItem(sessionStorage.key(i));
        var obj = JSON.parse(stu);

        var table = document.getElementById("dataTable");

        /* -1 argument will append in the table*/
        var row = table.insertRow(-1);

        var name = row.insertCell(0);
        var id = row.insertCell(1);
        var year = row.insertCell(2);
        var stream = row.insertCell(3);
        var options = row.insertCell(4);

        /* Using dataId attribute of HTML5 to store the Id of the record, this will make edit and delete operations easy */
        var eButton = "<button class='btn btn-success' onclick='editStudentData(this)' data-id=" + sessionStorage.key(i) + "><i class='fa fa-pencil' aria-hidden='true'></i> Edit</button>";
        var dButton = "<button class='btn btn-danger' onclick='deleteStudentData(this)' data-id=" + sessionStorage.key(i) + "><i class='fa fa-trash' aria-hidden='true'></i> Delete</button>";

        name.innerHTML = obj.name;
        id.innerHTML = sessionStorage.key(i);
        year.innerHTML = obj.year;
        stream.innerHTML = obj.stream;
        options.innerHTML = eButton + ' ' + dButton;
    }

    // If the table has no records, fill the table with dummy records
    var rows = document.getElementById('dataTable').getElementsByTagName("tr").length;
    if (rows === 1) {
        dummyRecords();
    }
}

/* A function to delete all data, but adding the dummy data AS PER REQUIREMENTS. */
function deleteAllData() {
    sessionStorage.clear();

    // onload() will fill the dummy data in the table

    alert('Table is empty! Filling dummy data.');
    window.location.reload(true);
}