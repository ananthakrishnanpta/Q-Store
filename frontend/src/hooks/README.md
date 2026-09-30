# React Hooks
- React provides certain hooks to help maintain state and lifecycle methods of functional components.
---
1. **useState()** - Manages component state 

- syntax
  ```jsx
  const [state, setState] = useState(initialValue);
  ```

    |Term | Relevance |
    |--- | ----|
    | `state` | reference to current value of state|
    | `setState` | function to set value of state |
    | `initialValue` | initialization value of the state; this decides the datatype as well|
    |`useState(value)` | returns an array of a variable assigned with the state value given as parameter and a function which updates the state value.|
  
_**Example**_

```js
import { useState } from "react";

function Counter() {
    const [count, setCount ] = useState(0);
    // 0 will be set as the initial value of 'count'

    function increment(){
        setCount(count + 1);
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick = { increment()}>
                Increment
            </button>
        </div>
    );
}
export default Counter;
```

Applications : 
- Form inputs
- Shopping cart quantities of individual items
- Authentication UI state updations
- Filtering and sorting in search results
- Modal visibility
- Theme changes
- Pagination
- Tabs
- Selection of cards, gallery images for forwarding, etc

---

2. **useEffect()** - handles functions with side effects preventing them from being called unintentionally.

- This allows us to synchronise a component with external systems with controlled side effects.

syntax : 
```jsx
useEffect(<function_with_side_effect>, [dependency_array]);
```

```jsx 
useEffect(
    () => {
        // Effect logic

        return () => {
            // returning the cleanup logic using arrow method
        };
    },

    [dependencies]
);

```
- Effect is the logic which has side effects.
- Cleanup will be executed when the effect is required to be cleaned up.
- **Dependency Array** - Determines when the effect should run again.

    `Dependency Array can have different configurations`
    
|Dependency Array| Result |
|---              | ---   |
| No dependency array | Effect runs after every committed render |
| Empty dependency array | Runs after initial mount only (one-time) | 
| With dependencies | Runs effect after initial mount and whenever the depencencies changes.

Examples : 

- Fetching response from API
- Setting up event listeners
- Starting timers
- Subscribing to WebSockets
- Updating BOM/DOM
- Connecting to external libraries
  
---