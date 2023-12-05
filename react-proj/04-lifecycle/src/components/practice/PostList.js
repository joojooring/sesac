import { useEffect, useState } from "react";
import axios from "axios";

const fakePosts = [
  {
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
  },
  {
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
  },
  {
    id: 5,
    title: 'nesciunt quas odio',
    body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque',
  },
  {
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body: 'ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae',
  },
  {
    id: 7,
    title: 'magnam facilis autem',
    body: 'dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas',
  },
  {
    id: 8,
    title: 'dolorem dolore est ipsam',
    body: 'dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae',
  },
  {
    id: 9,
    title: 'nesciunt iure omnis dolorem tempora et accusantium',
    body: 'consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas',
  },
  {
    id: 10,
    title: 'optio molestias id quia eum',
    body: 'quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error',
  },
]


function PostList(props) {
  const [post, setPost] = useState([]);

  const getData = async () => {
    await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then((res) => {
      setPost(res.data);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getData(fakePosts);
    }, 2000);
  }, []);

  // 위에 있는 axios랑 똑같은거임 아래는 fetch 이용한거
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setTimeout(() => {
  //         setPost(fakePosts);
  //       }, 2000);
  //       setPost(res);
  //     });
  // }, []);

// const getPost = async() => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts =await response.json()

//   setTimeout(()=>{
//     setPost(posts);

//   },2000)
// }

// useEffect(()=>{
//   getPost()
// },[])


    return(
        <>
        <div>
          {post.length === 0 ?<h2>로딩 중...</ h2> : (
            
            <ul>
               <h2 style={{textAlign: "center", backgroundColor: "grey", margin: "0", padding: "10px", color: "white", fontSize: "1.5rem" }}>🐞Post List🐞</h2>
            {post.map((item)=>(
              <div style={{borderRadius : "20px", border:"1px solid black", backgroundColor: "rgba(135, 0, 0, 0.1)", margin:"10px", padding:"10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"}} key={item.id}>
                <p style={{color: "blue", fontWeight:"bold"}}>No. {item.id} - <a style={{color: "black"}}>{item.title}</a></p>
                
                <h3>{item.body}</h3>
              </div>
            ))}
          </ul>
          )
          }
          </div>
        </>
    )

        }

export default PostList;
