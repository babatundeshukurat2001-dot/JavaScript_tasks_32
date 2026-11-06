const company = {
 name: "TechCorp",
 location: "San Francisco",
 employees: [
        {id: 234, name: "Eniola", department: "HR"},
        {id: 235, name: "Remi", department: "Engineering"},
        {id: 236, name: "Adeola", department: "Marketing"}
        ]
};
console.log(company.employees[1].name)

console.log(company.name  + " - " + company.location)

for (let employee of company.employees){
    console.log(employee.name + " - " + employee.department);
}
