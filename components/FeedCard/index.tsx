import Image from "next/image";
import { BiHeart, BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-b-0 border-l-0 border-r-0 border-gray-600 p-6 hover:bg-gray-800 transition-all cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image
            src="https://pbs.twimg.com/profile_images/1701807081198895104/qoCL2AzI_400x400.jpg"
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11 ml-2">
          <h5>
            Akash Vinchankar{" "}
            <span className="text-gray-400">@akashvinchankar</span>
          </h5>
          <p className="text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptatem, fugit, quidem, dolorum doloribus quae nesciunt
            exercitationem quas quibusdam autem.
          </p>
          <div className="flex justify-between mt-5 text-xl items-center pr-4">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <BiHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
