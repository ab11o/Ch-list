const employeeChecklist = [
    "Full Name",
    "Date of Birth",
    "Contact Information",
    "Emergency Contact",
    "Signed Offer Letter",
    "Tax Forms",
    "Identification",
    "Direct Deposit Information",
    "Schedule Orientation Session",
    "Assign Training Modules",
    "Set Up Company Email",
    "Create User Accounts",
    "Provide Employee Handbook",
    "Review Company Policies"
];

const deviceChecklist = [
    "Choose Type of Device",
    "Determine Specifications",
    "Check Budget for Device Purchase",
    "Source Vendors for Pricing",
    "Unbox and Inspect Devices",
    "Install Operating System and Updates",
    "Install Antivirus/Antimalware Software",
    "Record Device Serial Numbers",
    "Document Purchase and Warranty Information"
];

function renderChecklist() {
    const employeeList = document.getElementById("employeeChecklist");
    const deviceList = document.getElementById("deviceChecklist");
    
    employeeList.innerHTML = '';
    employeeChecklist.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" id="emp-${index}" onclick="markCompleted('employee', ${index})"> ${item}`;
        employeeList.appendChild(li);
    });

    deviceList.innerHTML = '';
    deviceChecklist.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" id="dev-${index}" onclick="markCompleted('device', ${index})"> ${item}`;
        deviceList.appendChild(li);
    });
}

function markCompleted(type, index) {
    if (type === 'employee') {
        const checkbox = document.getElementById(`emp-${index}`);
        checkbox.checked ? employeeChecklist[index] += ' (Completed)' : employeeChecklist[index] = employeeChecklist[index].replace(' (Completed)', '');
    } else {
        const checkbox = document.getElementById(`dev-${index}`);
        checkbox.checked ? deviceChecklist[index] += ' (Completed)' : deviceChecklist[index] = deviceChecklist[index].replace(' (Completed)', '');
    }
    renderChecklist();
}

document.getElementById("addButton").addEventListener("click", function() {
    const itemInput = document.getElementById("itemInput");
    const checklistType = document.getElementById("checklistType").value;
    const newItem = itemInput.value;

    if (checklistType === 'employee') {
        employeeChecklist.push(newItem);
    } else {
        deviceChecklist.push(newItem);
    }
    itemInput.value = '';
    renderChecklist();
});

// Initial render of the checklist
renderChecklist();
