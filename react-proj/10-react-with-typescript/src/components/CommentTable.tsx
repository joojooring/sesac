import CommentTr from "./CommentTr"
import { CommentRow } from "../types/types"
// typescript를 리액트에서 이용할때 Props도 type을 지정해줘야 됨
// interface CommentRow {
//     writer: string,
//     title: string
//   }
  

interface Props {
    comments: CommentRow[]
}

export default function CommentTable({comments}: Props){
 
    return(
        <>
                  <table border={1} style={{ marginTop: '30px', width: '500px' }}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((value, idx) => {
                return (
                    <CommentTr comment={value} idx={idx}/>
                )
              })}
            </tbody>
          </table>

        </>
    )
}