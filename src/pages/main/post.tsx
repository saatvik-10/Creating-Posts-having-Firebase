import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Post as IPost } from "./main";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface Props {
  post: IPost;
}

interface Like {
  userId: string;
  likeId:string
}

export const Post = (props: Props) => {
  const { post } = props;
  const [user] = useAuthState(auth);

  const [likes, setLikes] = useState<Like[] | null>(null);

  const likesRef = collection(db, "likes");

  const likesDoc = query(likesRef, where("postId", "==", post.id));

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikes(data.docs.map((doc) => ({ userId: doc.data().userId, likeId:doc.id })));
  };

  const addLike = async () => {
    try {
      const newDoc=await addDoc(likesRef, { userId: user?.uid, postId: post.id });
      if (user) {
        setLikes((prev) =>
          prev ? [...prev, { userId: user?.uid, likeId:newDoc.id }] : [{ userId: user?.uid, likeId:newDoc.id }]
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeLike = async () => {
    try {
      const likeToDeleteQuery = query(
        likesRef,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );

      const likeToDeleteData = await getDocs(likeToDeleteQuery);
      const likeId = likeToDeleteData.docs[0].id;
      const likeToDelete = doc(db, "likes", likeId);
      await deleteDoc(likeToDelete);
      if (user) {
        setLikes((prev) =>prev && prev.filter((like)=>like.likeId!==likeId)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const hasUserLiked = likes?.find((like) => like.userId === user?.uid);

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div>
      <ul>
      <div className="title">
        <h1><li>{post.title}</li></h1>
      </div>
      </ul>

      <div className="desc">
      <p><h3>{post.description}</h3></p>
      </div>

      <div className="footer">
        <p><h4 className="user">User- @{post.username}</h4></p>
        <button className="Lbtn" onClick={hasUserLiked ? removeLike : addLike}>
          {hasUserLiked ? <>&#10084;</> : <>&#9825;</>}
        </button>
        <h4 className="like">{likes && <p>Likes:{likes?.length}</p>}</h4>
      </div>
      <h1>-----------------------------------------------------------------------------------------------</h1>
    </div>
  );
};
