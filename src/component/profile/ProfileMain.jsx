import SummaryProfileComponent from "./SummaryProfileComponent";
import KeyPointsProfileComponent from "./KeyPointsProfileComponent";
import InfoProfileComponent from "./InfoProfileComponent";
import ExperienceProfileComponents from "./ExperienceProfileComponents";
import PostsProfileComponent from "./PostsProfileComponent";

const ProfileMain = () => {
  return (
    <>
      <SummaryProfileComponent />
      <PostsProfileComponent />
      <KeyPointsProfileComponent />
      <InfoProfileComponent />
      <ExperienceProfileComponents />
    </>
  );
};
export default ProfileMain;
