    const enter_task=document.getElementById('task-input');
    const submit_task=document.getElementById('task-submit');
    const All_tasks=document.getElementById('All-task');
    const Task_heading=document.getElementById('task-list-header');
    const completedtasks=document.getElementById('complete-section');
    const showtime=document.getElementById('time');
    Task_heading.style.display="none";
    completedtasks.style.display="none";
    
    //Timer
    setInterval(()=>{
        showtime.innerHTML=`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    },1000)

    let cnt=0;
    submit_task.addEventListener('click',(e)=>{
        e.preventDefault(); //Preventing from refresh
        let tasktext=enter_task.value; //Getting text

        if(tasktext.length===0){
            return alert("Enter text");
        }
        Task_heading.style.display="block";
        
        const ndiv=document.createElement('div'); //Creating a div
        ndiv.setAttribute("class","list");

        const n_task=document.createElement('input'); //Creating input
        n_task.setAttribute("class","tasks");
        n_task.setAttribute("type","text");
        n_task.setAttribute("readonly","readonly");
        n_task.value=tasktext;
        ndiv.appendChild(n_task);
        
        const n_editbutton=document.createElement('button'); //creating edit button
        n_editbutton.setAttribute("class","edit");
        n_editbutton.innerHTML="Edit";
        ndiv.appendChild(n_editbutton);    
        
        const n_donebutton=document.createElement('button');//creating complete button
        n_donebutton.setAttribute("class","complete");
        n_donebutton.innerHTML="Complete";
        ndiv.appendChild(n_donebutton);
        
        const n_deletebutton=document.createElement('button');//creating delete button
        n_deletebutton.setAttribute("class","delete");
        n_deletebutton.innerHTML="Delete";
        ndiv.appendChild(n_deletebutton);

        //This will be added when the complete button is clicked
        //creating restore button
        const n_restorebutton=document.createElement('button');
            n_restorebutton.setAttribute("class","restore");
            n_restorebutton.innerHTML="Restore"

        //Adding all the elements created above..
        All_tasks.appendChild(ndiv);

        //functionality for edit button
        n_editbutton.addEventListener('click',()=>{
            cnt++;
            if(cnt===1){
                n_editbutton.innerHTML="Save";
            }else{
                n_editbutton.innerHTML="Edit";
                cnt=0;
            }
            n_task.toggleAttribute("readonly");
        })

        //functionality for delete button
        n_deletebutton.addEventListener('click',()=>{
            ndiv.remove();
        })
        //functionality for complete button
        n_donebutton.addEventListener('click',()=>{
            completedtasks.style.display="block";
            n_editbutton.remove();
            n_donebutton.remove();
            n_deletebutton.remove();
            
            ndiv.appendChild(n_restorebutton);
            ndiv.appendChild(n_deletebutton);
            completedtasks.appendChild(ndiv);

            //functionality for edit button
            n_restorebutton.addEventListener('click',()=>{
                n_restorebutton.remove();
                n_deletebutton.remove();
                ndiv.appendChild(n_editbutton);
                ndiv.appendChild(n_donebutton);
                ndiv.appendChild(n_deletebutton);
                All_tasks.appendChild(ndiv);
            })
        })
        enter_task.value='';
    })

