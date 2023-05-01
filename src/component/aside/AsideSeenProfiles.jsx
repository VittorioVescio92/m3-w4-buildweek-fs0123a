import { Button, Image } from "react-bootstrap";
import { ArrowDown, PersonAdd } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { getProfilesAction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AsideSeenProfiles = () => {
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.profiles.content);
  const [profilesData, setProfilesData] = useState([]);
  console.log(profiles);

  const getRandomProfiles = () => {
    const shuffledProfiles = [...profiles].sort(() => Math.random() - 0.5);
    return shuffledProfiles;
  };

  const updateProfilesData = () => {
    const randomProfiles = getRandomProfiles();
    setProfilesData(randomProfiles);
  };

  useEffect(() => {
    dispatch(getProfilesAction());
    updateProfilesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section id="side" className="bg-white rounded-3 mt-4 p-4 seen-profiles">
        <h3>Altri profili consultati</h3>
        {profilesData &&
          profilesData.map((profile, index) =>
            index < 4 ? (
              <div className="d-flex border-bottom mt-3" key={index}>
                <div>
                  <Image src={profile.image} className="rounded-circle" alt="1" width={50} height={50} />
                </div>
                <div className="text-truncate ms-2">
                  <Link to={`/profile/${profile._id}`}>
                    <h3 className="mb-0 text-truncate">
                      {profile.name} {profile.surname}
                    </h3>
                  </Link>
                  <p className="text-truncate">{profile.title}</p>
                  <Button variant="outline-secondary mb-3">
                    <PersonAdd />
                    Collegati
                  </Button>
                </div>
              </div>
            ) : null
          )}

        <p className="text-center fw-bold mb-0 mt-2">
          Visualizza altro <ArrowDown />
        </p>
      </section>
    </>
  );
};
export default AsideSeenProfiles;
