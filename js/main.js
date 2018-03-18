class Student {
    constructor(name, year, stream) {
        this.name = name;
        this.year = year;
        this.stream = stream;
    }
}

function editStudentData() {

}

// TODO : get values from form and update here
function addStudentData() {
    //    sessionStorage.setItem("1", "value");
    let formValues = document.getElementById("myForm");

    let name = formValues.elements[0].value;
    let id = document.getElementById(sid).value;
    let year = docuement.getElementById(syear).value;
    let stream = document.getElementById(sstream).value;

    let studentObj = {'name' : name /*, 'year' : year, 'stream' : stream*/};

    sessionStorage.setItem(id, JSON.stringify(studentObj));

}

function showData() {
    
    //let stu = sessionStorage.getItem(151);
    //let obj =  JSON.parse(retrievedObject);
    //document.getElementById('result').innerHTML = obj.name;

    for (let i = 0; i < sessionStorage.length; i++) {

        let stu = sessionStorage.getItem(sessionStorage.key(i));
        let obj =  JSON.parse(stu);

        let table = document.getElementById("dataTable");

        // table.length in place of 0
        let row = table.insertRow(0);

        let name = row.insertCell(0);
        let id = row.insertCell(1);
        let year = row.insertCell(2);
        let stream = row.insertCell(3);

        name.innerHTML = obj.name;
        id.innerHTML = sessionStorage.key(i);
        //year.innserHTML = obj.year;
        //stream.innerHTML = obj.stream;
    }

    //    document.getElementById('result').innerHTML = sessionStorage.getItem(1);
}
