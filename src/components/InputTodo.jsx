export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props; //propsの分割代入
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
