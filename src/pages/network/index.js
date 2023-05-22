import React, { useContext } from "react";
import { Grid } from "@mui/material";
import ThemeContext from "../../context/ThemeContext";
import Rating from "@mui/material/Rating";
import Images from "../../assets/images";
import "./styles.css";
import UserNetwork from "../../components/uesr-network";
const Index = ({}) => {
 const starColor = "#8077F6";
 const { dark } = useContext(ThemeContext);
 return (
  <>
   <UserNetwork />
   <Grid item container spacing={2} marginTop={3}>
    <Grid item xs="12" sm="12" md="3" lg="3">
     <div className={dark ? "network-container dark-border" : "network-container"}>
      <div>
       <h1 className={dark ? "network-title white-text" : "network-title"}>$34k</h1>
       <h3 className={dark ? "network-subTitle white-text" : "network-subTitle"}>Total Earnings</h3>
      </div>
      <div>
       <h1 className={dark ? "network-title white-text" : "network-title"}>102</h1>
       <h3 className={dark ? "network-subTitle white-text" : "network-subTitle"}>Total Jobs</h3>
      </div>
     </div>
    </Grid>

    <Grid item xs="12" sm="12" md="9" lg="9">
     <div className={dark ? "network-detail-container dark-border" : "network-detail-container"}>
      <h1 className={dark ? "network-detail-title white-text" : "network-detail-title"}>I will do UIUX for you mobile application or website in figma or xdk</h1>
      <h3 className="commentDesc-title">
       Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus
       dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam morbi
       euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl phasellus nibh
       elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu eget. Vitae etiam
       enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh gravida habitant sit
       risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere id. Sit ipsum tellus enim
       mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium facilisi laoreet quisque dolor
       vulputate consectetur.
      </h3>
     </div>
     <div className={dark ? "network-detail-container dark-border" : "network-detail-container "}>
      <h1 className={dark ? "network-detail-title white-text" : "network-detail-title"}>Reviews</h1>
      {[1, 2].map((item, index) => (
       <>
        <h3 className={dark ? "network-detail-sub_title white-text" : "network-detail-sub_title"}>Wedding website layout</h3>
        <div className={dark ? "network-detail-stats white-text" : "network-detail-stats"}>
         <span className="network-star">
          <Rating name="read-only" value={5} readOnly sx={{ "& .MuiRating-iconFilled": { color: starColor, fontSize: 15 } }} />
         </span>
         <span>5 out of 5 star . </span>
         <span>March 12 2023</span>
        </div>
        <h3 className="commentDesc-title">
         Lorem ipsum dolor sit amet consectetur. Lacus urna ut at sed. Egestas diam sed venenatis egestas etiam. Neque eu vulputate libero morbi viverra. Ipsum vestibulum dictumst ornare nisl metus
         dignissim imperdiet tincidunt. Justo ac elementum odio rhoncus habitasse elit consequat mi. Tellus sagittis volutpat nisl vitae condimentum. Lacus in et metus ornare massa fames. Id diam
         morbi euismod sit. Orci tellus sapien purus ornare. Adipiscing adipiscing in aliquam ac adipiscing feugiat consequat habitant proin. Proin erat elementum pellentesque lorem proin. Nisl
         phasellus nibh elit sollicitudin et platea volutpat faucibus. Maecenas ultricies eget sagittis porttitor pellentesque nibh. Lorem purus sed viverra pellentesque. Habitasse libero blandit eu
         eget. Vitae etiam enim pellentesque pulvinar hendrerit fringilla justo. Faucibus sed arcu massa consectetur cursus. Molestie odio ut etiam egestas feugiat nec elit. Eu volutpat nunc nibh
         gravida habitant sit risus. Viverra ullamcorper orci lectus diam proin. Fringilla magna arcu id leo cum nec dis. Amet quis enim imperdiet et vestibulum sit eu purus. Id non viverra posuere
         id. Sit ipsum tellus enim mauris sit nibh fermentum. Eu a laoreet amet nulla. Convallis libero egestas pellentesque interdum hendrerit feugiat venenatis sapien. In tempus gravida pretium
         facilisi laoreet quisque dolor vulputate consectetur.
        </h3>
        <div className={dark ? "network-detail-statsPrice white-text" : "network-detail-statsPrice"}>
         <span className="network-outcome">$259.00 </span>
         <span>
          $75/<span className="network-outcome_hour">hour</span>
         </span>
        </div>
        {index == 0 && <div className={dark ? "network-break-line network-break-line-dark" : "network-break-line"}></div>}
       </>
      ))}
     </div>
     <div className={dark ? "img-container dark-border " : "img-container"}>
      <h1 className={dark ? "network-detail-title white-text" : "network-detail-title"} style={{ paddingLeft: "11px" }}>
       Portfolio
      </h1>
      <div className="network-container-img">
       {[Images.grid1, Images.grid2, Images.grid3].map((img) => (
        <img src={img} className="list-image-style " key={img} />
       ))}
      </div>
     </div>
    </Grid>
   </Grid>
  </>
 );
};

export default Index;
