import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";



export default function rightbar({profile}) {
  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
            <img className="birthdayImg" src="\asset\gift.png" alt="" />
            <span className="birthdayText">
              <b>vijay </b> and <b>2 other friends </b> have a birthday today
            </span>
        </div>
        <img className="rightbarAd" src="\asset\post\ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
            {Users.map((u)=>
            <Online key={u.id} user={u}/>
            )}
        </ul>
        
      </>
    )
  }

  const ProfileRightBar =()=>{
    return (
      <>
        <h4 className="rightBarTitle">UserInfo</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">New York</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">Madrid</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="/asset/person/surya.jpg" alt="" />
            <span className="rightBarFollowingName">John carter</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="/asset/person/surya.jpg" alt="" />
            <span className="rightBarFollowingName">John carter</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="/asset/person/surya.jpg" alt="" />
            <span className="rightBarFollowingName">John carter</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="/asset/person/surya.jpg" alt="" />
            <span className="rightBarFollowingName">John carter</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="/asset/person/surya.jpg" alt="" />
            <span className="rightBarFollowingName">John carter</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="/asset/person/surya.jpg" alt="" />
            <span className="rightBarFollowingName">John carter</span>
          </div>
        </div>

      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
