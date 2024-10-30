// src/components/TODOList.jsx

function Item({ item }) {
    return (
      <li id={item?.id} className="todo_item">
        <button className="todo_items_left" type="button">
          <svg width="24" height="24">
            <circle cx="12" cy="12" r="10" fill="#c2b39a" /> {/* Circle properties updated */}
          </svg>
          <p>{item?.title}</p>
        </button>
        <div className="todo_items_right">
          <button type="button">
            <span className="visually-hidden">Edit</span>
            <svg width="16" height="16">
              <path d="" />
            </svg>
          </button>
          <button type="button">
            <span className="visually-hidden">Delete</span>
            <svg width="16" height="16">
              <path d="" />
            </svg>
          </button>
        </div>
      </li>
    );
  }
  
  function TODOList({ todos }) {
    return (
      <ol className="todo_list">
        {todos && todos.length > 0 ? (
          todos.map((item) => <Item key={item.id} item={item} />)
        ) : (
          <p>Seems lonely in here, what are you up to?</p>
        )}
      </ol>
    );
  }
  
  export default TODOList;
  