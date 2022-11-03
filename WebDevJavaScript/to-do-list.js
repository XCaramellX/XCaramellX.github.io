let command = prompt("Please enter a command");
const todoArray = [];

while(command !== "quit" && command !== "q"){ // when you input quit or q it will end the loop
    if(command === "new"){ // adds a new item to the todoArray 
        let addTodo = prompt("Please add a new to-do item to the list");
            todoArray.push(addTodo); // using the push method to add a new item to the end of the array
            alert(`To-do item "${addTodo}" has been added`);  
    } else if(command === "list"){ //lists all the items in the array
        console.log('Here is your to-do list:');
        for(let i = 0; i < todoArray.length; i++){ // loop through the array using i to display the items
            console.log(`index: ${i}, ${todoArray[i]}`);
            }
    }else if(command === "remove"){ // this deletes or removes an item in the list
        let removeIndex = parseInt(prompt("Please Enter the index that you want to delete"));
        // if the user entered something that is not a number it will
        // prompt them to try again
        while(Number.isNaN(removeIndex)){ 
            removeIndex = parseInt(prompt('This is not a valid index please try again!'));
        }
        todoArray.splice(removeIndex, 1); // using splice we can delete a item at a specific index
        alert(`To-do item at "${removeIndex}" index has been removed!`);
        
    }
    // this is a prompt that will continously show until the user enters a command
    command = prompt("Please enter a command"); 
}
    console.log("Quiting the app....");