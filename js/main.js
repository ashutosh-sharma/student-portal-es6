
function editStudentData() {

}

// TODO : get values from form and update here
function addStudentData() {
    let name = document.getElementById('sname').value;
    let id = document.getElementById('sid').value;
    let year = document.getElementById('syear').value;
    let stream = document.getElementById('sstream').value;
    
    /* Form validation -- the fields should not be empty. */
    if (name==null || name=="", id == null || id =="", year == null || year=="",stream==null || stream=="")
    {
            alert("Please fill all required fields.");
            return false;
    }

    /* Making a JSON object using the form values */
    let studentObj = {'name' : name , 'year' : year, 'stream' : stream};

    /* Pushing record to sessionStorage after stringify JSON Object*/
    sessionStorage.setItem(id, JSON.stringify(studentObj));
    
    /* An alert message */
    alert("Student record added");
}


/*
* A funtion to show all the records present in the session Storage.
*/
function showData() {

    for (let i = 0; i < sessionStorage.length; i++) {

        let stu = sessionStorage.getItem(sessionStorage.key(i));
        let obj =  JSON.parse(stu);

        let table = document.getElementById("dataTable");

        /* -1 argument will append in the table*/
        let row = table.insertRow(-1);

        let name = row.insertCell(0);
        let id = row.insertCell(1);
        let year = row.insertCell(2);
        let stream = row.insertCell(3);

        name.innerHTML = obj.name;
        id.innerHTML = sessionStorage.key(i);
        year.innerHTML = obj.year;
        stream.innerHTML = obj.stream;
    }
}
