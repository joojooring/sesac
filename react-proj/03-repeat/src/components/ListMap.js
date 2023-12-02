import {useState} from "react"

function ListMap(){
    const productList = [
        {id : 1, product:"가방"},
        {id : 2, product:"패딩"},
        {id : 3, product:"신발"},
        {id : 4, product:"상의"},
        {id : 5, product:"하의"},
    ]

    const [list, setList] = useState(productList)
    const [newProduct, setNewProduct] = useState("")

    const addProduct = () => {
        // list와 추가할 객체를 합쳐줘야 됨
        // 원래람ㄴ 새로운 상품을 backend에서 insert하고 생긴 고유한 primarykey값을 id에 담아주면 됨
        // But, 지금은 임시로! length를 이용
        // const newObj = {id : list.length +1, product : newProduct }
        const newObj = { id: list[list.length - 1].id + 1, product: newProduct };
// 배열에 스프레드연산자...
// const ex = [1,2,3] => ...ex => 1,2,3


        // const newList = [...list, newObj]
        const newList =list.concat(newObj)

        // setList함수 이용해서 list에 할당해줌
        setList(newList);

        setNewProduct("")
    }



    const deleteProduct = (id) => {
        // 더블클릭한 상품에 대해서 삭제해야함
        // filter메소드는 앞에 있는 배열에 대해서 반복
        // filter메소드의 return값은 조건이되어야 함. 
        // 조건이 true일 경우, 해당 원소는 새로운 배열에 포함
        // 조건이 false일 경우, 새로운 배열에 포함하지 않음
        const newList = list.filter((value)=>{
            
            return value.id != id;
        });

        // 배열을 통해서 보여주고 있기때문에(rendering할 때 list배열을 이용0) -> list배열에서 원하는 원소를 삭제해야함.
        // 삭제된 버전의 배열을 setList를 이용하여 list상태를 변경
        setList(newList);

    }






    // map은 앞에 있는 배열에 대해서 반목을 하면서, 
    // map의 인자로 넘어간느 콜백함수의 return값을 이용해 새로운 배열을 생성함
    // [<li>a</li>,<li>b</li>,<li>c</li>]
return(
    <>
    <label>추가할 상품 : </label>
    <input 
        type="text" 
        value={newProduct} 
        onChange={(e)=>{setNewProduct(e.target.value)}}>

    </input>
    <button onClick={addProduct}>추가</button>
    <ul>
        {list.map((element)=>{
            return <li
            style={{cursor :"product"}}
            key={element.id} 
                onDoubleClick={()=>{deleteProduct(element.id)}}>
                {element.product}</li>
        })}
    </ul>
    </>
)
};

export default ListMap;

