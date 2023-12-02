function ColorSelect({ mode, onChangeHandler }) {
    return (
      <>
        <label>{mode}색 </label>
        <select onChange={onChangeHandler}>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="black">검정</option>
          <option value="white">하양</option>
        </select>
      </>
    );
  }
  
  export default ColorSelect;