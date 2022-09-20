window.addEventListener('load', () => {
    const form = document.querySelector('#new-todo-list')
    const input = document.querySelector('#new-todo-input')
    const taskList = document.querySelector('#tasks')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        var task = input.value;

        if(task == '') {
            alert('You need to fill out');
            return
        } else {
            console.log('Success')
        }

        const task_el = document.createElement('div')
        task_el.classList.add('task')

        const task_content_el = document.createElement('div')
        task_content_el.classList.add("content")

        const task_actions_el = document.createElement('div')
        task_actions_el.classList.add('content')

        const task_input_el = document.createElement('input')
        task_input_el.classList.add('text')
        task_input_el.type = 'text'
        task_input_el.value =task
        task_input_el.setAttribute('readonly', 'readonly')
        
        const task_edit_el = document.createElement('button')
        task_edit_el.classList.add('edit')
        task_edit_el.innerHTML = 'edit'

        const task_delete_el = document.createElement('button')
        task_delete_el.classList.add('delete')
        task_delete_el.innerHTML = 'delete'

        task_actions_el.appendChild(task_edit_el)
        task_actions_el.appendChild(task_delete_el)
        task_content_el.appendChild(task_input_el)
        task_el.appendChild(task_content_el)
        task_el.appendChild(task_actions_el)
        taskList.appendChild(task_el)

        input.value = '';

        task_delete_el.addEventListener('click', () => {
            taskList.removeChild(task_el)
        })

        task_edit_el.addEventListener('click', () => {
            if(task_edit_el.innerHTML == 'edit') {
                task_input_el.removeAttribute('readonly')
                task_edit_el.innerHTML= 'save'
            } else {
                task_edit_el.innerHTML = 'edit'
                task_input_el.setAttribute('readonly', 'readonly')
            }
        })


    })
})