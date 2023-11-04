import React, { useState } from 'react';

const BaseList = ({ list, update }) => {
  const [checkAmount, setCheckAmount] = useState(0);
  const [isDynamicComponent, setDynamicComponent] = useState(false);

  const [val, setVal] = useState('');
  const [comments, addComment] = useState([]);

  const [item, setItem] = useState({
    title: '',
    desc: ''
  })

  const incrementCheckAmount = () => {
    setCheckAmount(checkAmount + 1);
    update(checkAmount + 1);
  };
  const decrementCheckAmount = () => {
    if (checkAmount > 0) {
      setCheckAmount(checkAmount - 1);
      update(checkAmount - 1);
    }
  };
  return (
    <>
    { isDynamicComponent ? 
    (<div className='flex flex-col items-start m-4'>
    <div>Product name --- {item.title}</div>
    <div>Product description --- {item.desc}</div>
    <div>
    <button className='p-2 border-2 border-black bg-red-300 mr-2' onClick={() => {addComment([]); setDynamicComponent(false)}}>Save</button>
    <button className='p-2 border-2 border-black bg-red-300' onClick={() => addComment([...comments, val])}>Add comment</button>
    </div>
    <div className='mt-2'>
    <textarea value={val} onChange={e => {console.log(e.target.value); setVal(e.target.value)}} />
    <div>
      {comments.map(el => (<div>{el}</div>))}
    </div>
    </div>
    </div>) :
      <><div className='w-full grid grid-cols-3'>
          {list.map((el, idx) => (
            <div
              className={`${idx % 2 === 0 ? 'bg-green-200' : 'bg-purple-300'} flex items-center justify-center`}
              key={idx}
            >
              {el.title}
              <input
                className='ml-2'
                type='checkbox'
                name={`checkbox-${idx}`}
                id={`checkbox-${idx}`}
                onChange={(e) => {
                  if (e.target.checked) {
                    incrementCheckAmount();
                  } else {
                    decrementCheckAmount();
                  }
                } } />
              <button className='ml-4 border-2 p-2 bg-white border-red-400' onClick={() => {setItem(el); setDynamicComponent(true)}}>Edit</button>
            </div>
          ))}
        </div><div>
            <p>total checked items: {checkAmount}</p>
          </div></>
}
    </>
  );
};

export default BaseList;
