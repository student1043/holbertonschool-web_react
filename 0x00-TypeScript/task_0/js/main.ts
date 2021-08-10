interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: "Jack",
    lastName: "Dawson",
    age: 20,
    location: "NY"
};
const student2: Student = {
    firstName: "Michael",
    lastName: "D",
    age: 28,
    location: "LA"
};
const studentsList: Array<Student> = [student1, student2];

let table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach(function(row) {
    let tr = table.insertRow();
    row.forEach(function(column) {
        let td = tr.insertCell();
        td.innerText = column;
      });
});
