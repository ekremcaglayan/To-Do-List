window.addEventListener('load',() => 
{
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const ready = document.querySelector('#tasks');
    const progress = document.querySelector('#tasks2')
    const done = document.querySelector('#tasks3')

    form.addEventListener('submit', (e) => 
    {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        ready.appendChild(task_el);

        input.value = "";

        //TASK EDIT PART
        task_edit_el.addEventListener('click', () => 
        {
            if (task_edit_el.innerText.toLowerCase() == "edit")
            {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });
        //TASK EDIT PART


        //TASK DELETE PART READY
        task_delete_el.addEventListener('click', () => 
        {
            ready.removeChild(task_el);
        });
        //TASK DELETE PART READY


        //TASK DELETE PART PROGRESS
        task_delete_el.addEventListener('click', () => 
        {
            progress.removeChild(task_el);
        });
        //TASK DELETE PART PROGRESS


        //TASK DELETE PART DONE
        task_delete_el.addEventListener('click', () => 
        {
            done.removeChild(task_el);
        });
        //TASK DELETE PART DONE


        //TASK MOVE PART R->P
        task_content_el.addEventListener('dblclick', () => 
        {
            ready.removeChild(task_el);
            progress.appendChild(task_el);
        });
        //TASK MOVE PART R->P


        //TASK MOVE PART P->D
        progress.addEventListener('dblclick', () => 
        {
            progress.removeChild(task_el);
            done.appendChild(task_el);
        });
        //TASK MOVE PART P->D

    });

});