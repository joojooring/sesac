import { CommentRow } from "../types/types"


// interface CommentRow {
//     writer: string,
//     title: string
//   }


interface Props {
    comment: CommentRow;
    idx: number;
  }


export default function CommentTr(props: Props){
    const { idx, comment } = props;
    return (
        <tr key={idx + 1}>
          <td>{idx + 1}</td>
          <td>{comment.title}</td>
          <td>{comment.writer}</td>
        </tr>
      )

}