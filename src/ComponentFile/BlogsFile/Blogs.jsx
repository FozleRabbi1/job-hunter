import React from 'react';
import './Blog.css';

const Blogs = () => {
    return (
        <div>

            <div className="blog-parend-div grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-28" >
                <div className="blog-one">
                    <h2 className='text-red-500 font-semibold p-3'>When Use context Api ??..</h2>
                    <p>The Context API is used in React when you have data that needs to be shared across multiple components at different levels of the component tree. Instead of passing the data through every level of the component tree, the Context API allows you to create a central store or data source that can be accessed by any component without having to pass the data through intermediate components.</p>
                </div>
                <div className="blog-two">
                    <h2 className='text-red-500 font-semibold p-3'>What is custome hook ??..</h2>
                    <p>Custom hooks a way to make your code more reusable and easier to test. By extracting common logic into a custom hook, you can write tests for that hook and ensure that it works as expected. This can save you a lot of time and effort when working on complex applications.</p>
                </div>
                <div className="blog-three">
                    <h2 className='text-red-500 font-semibold p-3'>What is UseRef ?? and why it is use ??.. </h2>
                    The useRef hook is similar to the createRef method in class components, but with one key difference. In class components, createRef always returns a new reference when called, whereas useRef will return the same reference across all renders, making it possible to hold on to a reference between renders without the need to reinitialize it each time.
                    Accessing a DOM node: You can attach the ref object returned by useRef to a DOM element using the ref attribute
                </div>
                <div className="blog-four">
                    <h2 className='text-red-500 font-semibold p-3'>what is useMemo ??..</h2>
                    <p>useMemo is a built-in hook in React that is used for memoization. Memoization is the process of caching the result of a function based on its arguments, so that if the same arguments are passed again, the cached result is returned instead of recomputing the result.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;