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
            <button>Increment</button>
        </div>
    );
}
export default Counter;
```
