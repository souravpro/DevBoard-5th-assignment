document.getElementById("blog-section").addEventListener("click", function () {
    window.location.href = "blog.html";
});


const task1 = document.getElementById("task-1");
const task2 = document.getElementById("task-2");
const task3 = document.getElementById("task-3");
const task4 = document.getElementById("task-4");
const task5 = document.getElementById("task-5");
const task6 = document.getElementById("task-6");

const activityLog = document.getElementById("activity-log");

const customText = 'you have completed the task';

const newParagraph = document.createElement('p');
const newParagraph2 = document.createElement('p');
const newParagraph3 = document.createElement('p');
const newParagraph4 = document.createElement('p');
const newParagraph5 = document.createElement('p');
const newParagraph6 = document.createElement('p');

const currentTime = new Date();
const timeString = currentTime.toLocaleTimeString();

const taskAssignedCount = document.getElementById("task-assigned-count");

const totalCount = document.getElementById("total-count");



document.getElementById("complete-task-1").addEventListener("click", function () {
    alert("Board updated Successfully");

    // Disable the button after completion

    const disabledButton = document.getElementById("complete-task-1").disabled = true;



    newParagraph.textContent = `${customText} ${task1.textContent} [${timeString}]`;

    newParagraph.classList.add("bg-deVprimary", "p-2", "rounded-lg", "mt-2");

    activityLog.appendChild(newParagraph);

    taskAssignedCount.innerText = parseInt(taskAssignedCount.innerText) - 1;

    totalCount.innerText = parseInt(totalCount.innerText) + 1;

});

document.getElementById("complete-task-2").addEventListener("click", function () {
    alert("Board updated Successfully");

    document.getElementById("complete-task-2").disabled = true;

    newParagraph2.textContent = `${customText} ${task2.textContent} [${timeString}]`;
    newParagraph2.classList.add("bg-deVprimary", "p-2", "rounded-lg", "mt-2");
    activityLog.appendChild(newParagraph2);


    taskAssignedCount.innerText = parseInt(taskAssignedCount.innerText) - 1;

    totalCount.innerText = parseInt(totalCount.innerText) + 1;

});


document.getElementById("complete-task-3").addEventListener("click", function () {
    alert("Board updated Successfully");

    document.getElementById("complete-task-3").disabled = true;

    newParagraph3.textContent = `${customText} ${task3.textContent} [${timeString}]`;
    newParagraph3.classList.add("bg-deVprimary", "p-2", "rounded-lg", "mt-2");
    activityLog.appendChild(newParagraph3);


    taskAssignedCount.innerText = parseInt(taskAssignedCount.innerText) - 1;

    totalCount.innerText = parseInt(totalCount.innerText) + 1;

});


document.getElementById("complete-task-4").addEventListener("click", function () {
    alert("Board updated Successfully");

    document.getElementById("complete-task-4").disabled = true;

    newParagraph4.textContent = `${customText} ${task4.textContent} [${timeString}]`;
    newParagraph4.classList.add("bg-deVprimary", "p-2", "rounded-lg", "mt-2");
    activityLog.appendChild(newParagraph4);


    taskAssignedCount.innerText = parseInt(taskAssignedCount.innerText) - 1;

    totalCount.innerText = parseInt(totalCount.innerText) + 1;

});


document.getElementById("complete-task-5").addEventListener("click", function () {
    alert("Board updated Successfully");

    document.getElementById("complete-task-5").disabled = true;

    newParagraph5.textContent = `${customText} ${task5.textContent} [${timeString}]`;
    newParagraph5.classList.add("bg-deVprimary", "p-2", "rounded-lg", "mt-2");
    activityLog.appendChild(newParagraph5);


    taskAssignedCount.innerText = parseInt(taskAssignedCount.innerText) - 1;

    totalCount.innerText = parseInt(totalCount.innerText) + 1;

});


document.getElementById("complete-task-6").addEventListener("click", function () {
    alert("Board updated Successfully");

    document.getElementById("complete-task-6").disabled = true;

    newParagraph6.textContent = `${customText} ${task6.textContent} [${timeString}]`;
    newParagraph6.classList.add("bg-deVprimary", "p-2", "rounded-lg", "mt-2");
    activityLog.appendChild(newParagraph6);


    taskAssignedCount.innerText = parseInt(taskAssignedCount.innerText) - 1;

    totalCount.innerText = parseInt(totalCount.innerText) + 1;

});


document.getElementById("clear-history").addEventListener("click", function () {
    activityLog.innerHTML = "";
    taskAssignedCount.innerText = "6";
    totalCount.innerText = "23";
    alert("History cleared successfully");
});




