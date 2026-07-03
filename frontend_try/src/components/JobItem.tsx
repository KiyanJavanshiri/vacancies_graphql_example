import type { TGetVacancyQueryResult } from "@/utils/types";
import { Link } from "react-router";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";

const JobItem = ({ vacancy }: { vacancy: TGetVacancyQueryResult }) => {
  return (
    <div className="p-4 rounded-md shadow-[0_0_10px_rgba(0,0,0,10%)] bg-white">
      <Link to={`/jobs/${vacancy.id}`}>
        <h2 className="text-base leading-normal font-semibold mb-6 text-black text-ellipsis line-clamp-2">
          {vacancy.title}
        </h2>
        <div className="flex justify-start items-center gap-x-4 mb-3">
          <div className="p-2 rounded-full bg-gray-200">
            <MdOutlineAttachMoney className="text-gray-400" />
          </div>
          <p className="text-sm leading-normal font-medium text-black">
            {vacancy.salary}
          </p>
        </div>
        <div className="flex justify-start items-center gap-x-4 mb-3">
          <div className="flex justify-start items-center gap-x-4">
            <div className="p-2 rounded-full bg-gray-200">
              <FaRegBuilding className="text-gray-400" />
            </div>
            <p className="text-sm leading-normal font-medium text-black">
              {vacancy.company.name}
            </p>
          </div>
          <p className="text-sm leading-normal font-normal text-black">
            {vacancy.city}
          </p>
        </div>
        {vacancy.description && (
          <p className="text-sm leading-normal font-normal text-gray-400">
            {vacancy.description}
          </p>
        )}
      </Link>
    </div>
  );
};

export default JobItem;
