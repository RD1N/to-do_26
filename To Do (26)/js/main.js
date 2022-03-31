const STATUS = {
    IN_PROGRESS: "In Progress",
    DONE: "Done",
    TO_DO: "To Do",
};
const PRIORITY = {
    LOW: 'low',
    HIGH: 'high',
}
const DEFAULT_STATUS = STATUS.TO_DO;

const list = [
    { task: "Create a new practice task", status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH, },
    { task: "Write a post", status: STATUS.TO_DO, priority: PRIORITY.HIGH, },
];

function changeStatus( task, status ) {
    let findIndex = list.findIndex(item => item.task === task);
    list[findIndex].status = status;
}

function addTask( task, priority ) {
    list.push(
        { task: task, status: DEFAULT_STATUS, priority: priority, }
    )
}

function changePriority( task, priority) {
    let indexTask = list.findIndex(item => item.task === task);
    list[indexTask].priority = priority;
}

function deleteTask( task ) {
    const findIndex = list.findIndex(item => item.task === task);
    if (findIndex !== -1 ){
        list.splice(findIndex, 1);
    }
}

function showList(filter) {
    let filterKey;
    if (filter === 'status') {
        filter = STATUS;
        filterKey = 'status';
    } else {
        filter = PRIORITY
        filterKey = 'priority'
    }

    for (let key in filter) {
        console.log(filter[key] + ':');
        let filtered = list.filter(task => task[filterKey] === filter[key])
        if (filtered.length === 0) {
            console.log('-');
        } else {
            console.log(filtered);
        }
    }
}





deleteTask("Create a new practice task")
addTask('test', 'high');
addTask('buy a Porsche', 'high');
changePriority('Write a post', "low")
changeStatus("Write a post", "Done")
showList('status');
console.log('\n');
showList('priority');