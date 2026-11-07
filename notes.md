1. items.push(newItem) and setItems(items) does not re-render because items.push just add new item ina n array and setItems just change the state of the function, it does not re render.
2. we should not use useEffect if we can handle it with handleEvents, if the logic is caused by user action. and when we calculate value from existing state.
3. react needs a key on list items because it gives uniue key to each and every element which cannot be change and it helps react to manipulate things. Using the array index as the key is risky because, array key can be changed.it can be modified while using push, remove and others so its ricky to use array index.
4. props are the value which can be used anywhere in the component and outside the componets using curly brackets. State is data that a component owns and can be changed anytime.
we would "lift state up" when two sibling  components need same data. for example when search bar and result list needs the same data, we lift the state up.
5. Todos state live in App because the main task is done in the app and todoLists and todoItems are components that can be passed in App.
6. TodoItem call onToggle(todo.id) instead of changing the todo itself because todo.id holds the uniue id of that todo so that the react can diffentiate which todo to toggle.

1. items.push(newItem) and setItems(items) does not re-render. For example in addTodo in App.tsx, newTodo is created because react compares old version and new version in memory. item.push and setItems updates the old version in memory and react cannot differtiate it. so like in addTodo, setTodos are used. spread operator are used to put the old array as it is and update the new array.

5. Todos state live in App because two componenets which are siblings need same data, so todos goes to theri nearest shared parent which is App().

6. TodoItem call onToggle(todo.id) instead of changing the todo itself because props are read only and it can not change it can only tell parents that event has occured. So the parent changes data and app has setTodos to change data.