let data = [
    {
        projectName: "Project1",
        projectId: 'p1',
        employees: [
            {fullName: "John Doe", employeeId: 'e1'},
            {fullName: "John Smith", employeeId: 'e2'}
        ]
    },

    {
        projectName: "Project2",
        projectId: 'p2',
        employees: [{fullName: "John Doe", employeeId: 'e1'},
            {fullName: "Mary John", employeeId: 'e3'},
            {fullName: "Bill Evan", employeeId: 'e4'}
        ]
    }

];

module.exports.lookupByProjectId = function(id){
    let r = data.filter(object => {
        return object.projectId == id;
    });
    if(r.length){
        return r[0];
    }else{
        return undefined;
    }
};

module.exports.lookupByEmployeeId = function(id){
    let r = data.filter(object => {
        for(let i = 0; i < object.employees.length;i++){
            if (object.employees[i].employeeId === id) {

                return true;
            }
        }
        return false;
    });
    if(r.length){
        return JSON.stringify(r, null,2);

    }else{
        return undefined;
    }
};