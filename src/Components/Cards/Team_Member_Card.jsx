import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa6";
import PropTypes from 'prop-types';

const Team_Member_Card = ({expert}) => {
    return (
        <div>
            <div className=" flex justify-center items-center  ">
                <img src={expert?.img} alt="" className="w-[305px] h-[332px] object-cover rounded-md transform transition-transform duration-300 ease-in-out hover:scale-105 " />
            </div>
            <div className="text-center space-y-2 mt-2">
                <h3 className="text-2xl font-semibold">{expert?.name}</h3>
                <span className="text-gray-300">{expert?.position}</span>
                <div className="flex items-center justify-center gap-5">
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
                <FaPinterest/>
                </div>
            </div>
        </div>
    );
};

export default Team_Member_Card;
Team_Member_Card.propTypes = {
    expert: PropTypes.object.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  
  };