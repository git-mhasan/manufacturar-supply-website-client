import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-5 flex-col text-justify '>
            <h2 className='my-5 text-xl text-center font-bold'>Question/Answer</h2>
            <div>
                <h2><span>Question 14.1</span> How will you improve the performance of a React Application?</h2>
                <p><span>Answer:</span>
                    There are many ways the performance of a react app can be improved- <br />
                    * Keeping component state local where necessary<br />
                    * Passing only nessessary props<br />
                    * Memoizing React components to prevent unnecessary re-renders<br />
                    * Code-splitting<br />
                    * Lazy loading images in React
                </p>
            </div>
            <div className='mt-4'>
                <h2><span>Question 14.2</span> What are the different ways to manage a state in a React application?</h2>
                <p><span>Answer:</span> Here us the ans</p>
            </div>
            <div className='mt-4'>
                <h2><span>Question 14.3</span> How does prototypical inheritance work?</h2>
                <p><span>Answer:</span> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Each object has a private property which holds a link to another object called its prototype. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.

                </p>
            </div>
            <div className='mt-4'>
                <h2><span>Question 14.4</span> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p><span>Answer:</span> Here us the ans</p>
            </div>
            <div className='mt-4'>
                <h2><span>Question 14.5</span> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p><span>Answer:</span>
                    <br />
                    const name = req.body.name; <br />
                    const query = &#123; name &#125;<br />
                    const cursor = reviewCollection.find(query);<br />
                    const productsByName = await cursor.toArray();<br />
                    res.send(productsByName);

                </p>
            </div>
            <div className='my-4'>
                <h2><span>Question 14.6</span> What is a unit test? Why should write unit tests?</h2>
                <p><span>Answer:</span> Unit tests, a type of functional test that allows progremmer to test a module while deeveloping a large scalled sftware/application.
                    <br />
                    Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.
                </p>
            </div>
        </div>
    );
};

export default Blogs;