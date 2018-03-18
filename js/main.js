class Student {
    constructor(name, year, stream) {
        this.name = name;
        this.year = year;
        this.stream = stream;
    }
}

function editStudentData() {

}

function addStudentData() {
//    sessionStorage.setItem("1", "value");
    
    let name = document.getElementById(sname).value;
    let id = document.getElementById(sid).value;
    let year = docuement.getElementById(syear).value;
    let stream = document.getElementById(sstream).value;

    let newStu = new Student(name, year, stream);

    sessionStorage.setItem(id, newStu);
}

function showData() {

    for (let i = 0; i < sessionStorage.length; i++) {

        let stu = sessionStorage.getItem(sessionStorage.key(i));

        let table = document.getElementById("dataTable");

        let row = table.insertRow(0);

        let name = row.insertCell(0);
        let id = row.insertCell(1);
        let year = row.insertCell(2);
        let stream = row.insertCell(3);

        id.innerHTML = sessionStorage.key(i);
        name.innerHTML = stu.Student.name;
        year.innserHTML = stu.Student.year;
        stream.innerHTML = stu.Student.stream;
    }

//    document.getElementById('result').innerHTML = sessionStorage.getItem(1);

}

showData();