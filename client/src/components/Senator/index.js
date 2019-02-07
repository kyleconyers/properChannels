import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
// import "./style.css";
import '../../App.css';

function Senator({first_name, last_name, title, profile_url, changeTwitterFn, twitter_handle}) {
console.log(profile_url);
  let address="https://en.wikipedia.org/wiki/"+first_name+"_"+last_name;
  const switchTwitter = () => {
    console.log("active twitter")
    changeTwitterFn(twitter_handle)
  
  }
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-12">
        <span>
          <a href={profile_url} target="_blank" >
            <p id="senator">{title} {first_name} {last_name}</p>
          </a>
          <button onClick={switchTwitter} class="twit fab fa-twitter-square ">
            
          </button>
        </span>
        {/* onClick={switchTwitter}  */}
        {/* <span><a href={`https://en.wikipedia.org/wiki/${first_name}_${last_name}`} target="_blank" ><p id="senator">{title} {first_name} {last_name}</p></a> <i class="twit fab fa-twitter-square fa-pull-right"></i></span> */}
        </Col>
      </Row>
    </ListItem>
  );
}

export default Senator;

