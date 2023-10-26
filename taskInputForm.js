function taskInputFunction() {
    // Create a new popup window
    var popup = window.open('', 'Task Input', 'width=400,height=400');

    // Create a form inside the popup
    var form = document.createElement('form');

    // Create a "Task Category" dropdown
    var taskCategoryLabel = document.createElement('label');
    taskCategoryLabel.textContent = 'Task Category:';
    var taskCategorySelect = document.createElement('select');
    taskCategorySelect.name = 'taskCategory';
    var categories = ['Customer Service', 'New Drink', 'Food Preparation'];
    categories.forEach(function (category) {
        var option = document.createElement('option');
        option.value = category;
        option.text = category;
        taskCategorySelect.appendChild(option);
    });

    // Create input fields for task title, description, and mentee username
    var titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    var titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';

    var descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    var descriptionInput = document.createElement('textarea');
    descriptionInput.name = 'description';

    var menteeLabel = document.createElement('label');
    menteeLabel.textContent = 'Mentee Username:';
    var menteeInput = document.createElement('input');
    menteeInput.type = 'text';
    menteeInput.name = 'menteeUsername';

    // Create a submit button
    var submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';

    // Append form elements to the form
    form.appendChild(taskCategoryLabel);
    form.appendChild(taskCategorySelect);
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(menteeLabel);
    form.appendChild(menteeInput);
    form.appendChild(submitButton);

    // Append the form to the popup window
    popup.document.body.appendChild(form);
}