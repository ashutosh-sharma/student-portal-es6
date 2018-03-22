/*
    This javascript is based upon es6 principles such as Template litrals and let/const keywords for better programming practice.
*/

/* Putting id in the sessionStorage so that id can be to fill data on editItem.html */
function editStudentData(editButton) {
    let id = editButton.getAttribute('data-id')
    // Using local storage to store id of record which we want to edit */
    sessionStorage.setItem("editId", id);
    window.location.href = "editItem.html";
}

/* To fill the data in the form fields when we want to edit an item | Called onload() of editItem page's body*/
function fillEditPage() {
    let id = sessionStorage.getItem('editId');

    let stu = sessionStorage.getItem(id);
    let obj = JSON.parse(stu);

    document.getElementById("sname").value = obj.name;
    document.getElementById("sid").value = id;
    document.getElementById("syear").value = obj.year;
    document.getElementById("sstream").value = obj.stream;

    /* Have to remove record here beacuse the utility module in addStudentData() in not working */
    sessionStorage.removeItem(id);
    sessionStorage.removeItem('editId');
}

/* To add/edit a student record to sessionStorage */
function addStudentData() {
    let name = document.getElementById('sname').value;
    let id = document.getElementById('sid').value;
    let year = document.getElementById('syear').value;
    let stream = document.getElementById('sstream').value;

    /* 
    // A utility module for editItem page : I DONT KNOW WHY IT'S NOT WORKING
    if(sessionStorage.getItem('editId')){
        let remId = sessionStorage.getItem('editId');
        console.log(remId);
        sessionStorage.removeItem(remId);
        consle.log('here!!!!!!!!!!!!!!');
        // removing the Id of the item from sessionStorage which we want to edit
        sessionStorage.removeItem('editId');
    } */

    // Form validation --> the fields should not be empty.
    if (name == null || name == "" || id == null || id == "" || year == null || year == "" || stream == null || stream == "") {
        alert("Please fill all required fields.");
        return false;
    }

    /* Ensuring unique keys should be allowed. */
    for (let i = 0; i < sessionStorage.length; i++) {
        if (sessionStorage.key(i) == id) {
            alert("Id already exist, cannot insert more than one record using one ID.");
            return false;
        }
    }

    // Making a JSON object using the form values 
    let studentObj = { 'name': name, 'year': year, 'stream': stream };

    // Pushing record to sessionStorage after stringify JSON Object
    sessionStorage.setItem(id, JSON.stringify(studentObj));

    // Redirecting back to home page
    alert("Done. Redirect to home page!");

    window.location.href = "index.html";
    return false;
}

/* To delete a stored record. */
function deleteStudentData(but) {

    let id = but.getAttribute('data-id');
    if (confirm('Are You Sure?')) {
        sessionStorage.removeItem(id);
    }

    const rows = document.getElementById('dataTable').getElementsByTagName("tr").length;
    if (rows == 2) {
        alert("Table is empty! Filling dummy data.");
    }
    window.location.reload(true);
}

/* A function to add dummy records when there are no records in the storage*/
function dummyRecords() {
    const rows = document.getElementById('dataTable').getElementsByTagName("tr").length;
    // Add dummy records on first time load
    if (rows === 1) {
        let studentObj = { 'name': 'John Doe', 'year': '2020', 'stream': 'CSE' };
        sessionStorage.setItem(9876543210, JSON.stringify(studentObj));

        studentObj = { 'name': 'Ashutosh', 'year': '2019', 'stream': 'CSE' };
        sessionStorage.setItem(1510991132, JSON.stringify(studentObj));
    }
    // calling showData() again to fill up the table.
    showData();
}

/*
* A funtion to show all the records present in the session Storage.
*/
function showData() {

    for (let i = 0; i < sessionStorage.length; i++) {

        let stu = sessionStorage.getItem(sessionStorage.key(i));
        let obj = JSON.parse(stu);

        let table = document.getElementById("dataTable");

        /* -1 argument will append in the table*/
        let row = table.insertRow(-1);

        let name = row.insertCell(0);
        let id = row.insertCell(1);
        let year = row.insertCell(2);
        let stream = row.insertCell(3);
        let options = row.insertCell(4);

        /* Using dataId attribute of HTML5 to store the Id of the record, this will make edit and delete operations easy */
        let eButton = `<button class='btn btn-success' onclick='editStudentData(this)' data-id=${sessionStorage.key(i)}><i class='fa fa-pencil' aria-hidden='true'></i> Edit</button>`;
        let dButton = `<button class='btn btn-danger' onclick='deleteStudentData(this)' data-id=${sessionStorage.key(i)}><i class='fa fa-trash' aria-hidden='true'></i> Delete</button>`;

        name.innerHTML = obj.name;
        id.innerHTML = sessionStorage.key(i);
        year.innerHTML = obj.year;
        stream.innerHTML = obj.stream;

        /* USING TEMPLATE LITERALS */
        options.innerHTML = `${eButton} ${dButton}`;
    }

    // If the table has no records, fill the table with dummy records
    const rows = document.getElementById('dataTable').getElementsByTagName("tr").length;
    if (rows === 1) {
        dummyRecords();
    }
}

/* A function to delete all data, but adding the dummy data AS PER REQUIREMENTS. */
function deleteAllData() {
    sessionStorage.clear();

    // onload() will fill the dummy data in the table

    alert('Table is empty! Filling dummy data.')
    window.location.reload(true)
}