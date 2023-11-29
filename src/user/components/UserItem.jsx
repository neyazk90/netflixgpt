import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/UI/Avatar";
import Card from "../../shared/UI/Card";
import * as classes from "./UserItem.module.css";

const UserItem = (props) => {
 const { id, name, image, placeCount } = props;
 return (
  <Link className={`p-5 rounded-sm ${classes.userCard}`} to={`${id}/places`}>
   <li className="h-full">
    <Card>
     {/* <img src={`${process.env.PUBLIC_URL}${props.image}`} alt="" /> */}
     <div>
           <Avatar image={image} width={100} height={100} />
     </div>
     <div>
      {name} {placeCount > 0 ? `- ${placeCount} places` : ""}
     </div>
    </Card>
   </li>
  </Link>
 );
};

export default UserItem;
