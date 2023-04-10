import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Question and Answer:</h2>
            <div>
                <h3>1. when should you use context api?</h3>
                <ul >
                   <li> Ans: 
                   The Issue With Using React Context API for State
                    Even if only b changes ComponentA will re-render for no reason, it will render the same content. This is called an extra or unnecessary re-render. For that reason, it is bad practice to have a single, huge state provided by a context.
                   </li>
                </ul>
                
            </div>
            <div>
                <h3>2.what is a customer hook?</h3>
                <p>Ans: The Hook Model is a four-phase process that businesses can use to create products or services used habitually by customers. The goal is to result in voluntary, high-frequency engagement. At its core, the Hook Model is about creating a customer habit.</p>         
            </div>
            <div>
                <h3>3.What is useRef?</h3>
                <ul>Ans:
                useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .
                    
                </ul>               
                
            </div>
            <div>
                <h3>4. what is useMemo</h3>
                <p >Ans: useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) Reference. useMemo(calculateValue, dependencies)</p>


            </div>
        </div>
    );
};

export default Blogs;