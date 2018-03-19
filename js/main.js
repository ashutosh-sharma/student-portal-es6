
/* To edit a stored record.*/
function editStudentData(but) {
    
    let id = but.getAttribute('data-id')

    //window.location="editItem.html";
    editPage(id);

    // let name = document.getElementById("sname");
    // name.innerHTML = newName;
}

function editPage(id){
//    let id = but.getAttribute('data-id');
    window.location = 'editItem.html';
    
    alert(id);
    let name = document.getElementById('sname');
    name.setAttribute(value) = id;

}


/* To delete a stored record. */
function deleteStudentData(but){
    let id = but.getAttribute('data-id');
    
    sessionStorage.removeItem(id);
    window.location.reload(true);
}


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
        let options = row.insertCell(4);

        /* Using dataId attribute of HTML5 to store the Id of the record, this will make edit and delete operations easy */
        let eButton = "<button class='btn btn-success' onclick='editStudentData(this)' data-id=" + sessionStorage.key(i) + ">Edit</button>";
        let dButton = "<button class='btn btn-danger' onclick='deleteStudentData(this)' data-id=" + sessionStorage.key(i) + ">Delete</button>";
        
        name.innerHTML = obj.name;
        id.innerHTML = sessionStorage.key(i);
        year.innerHTML = obj.year;
        stream.innerHTML = obj.stream;
        options.innerHTML = eButton + ' ' + dButton;
    }
}
