import propTypes from "prop-types";

const StatsCard = ({ title, icon, stat }) => {
  return (
    <>
      <div className="w-[16rem] h-32 bg-white rounded-lg relative overflow-hidden">
        <div className="flex items-center justify-between p-4">
          <p className="z-20">{title}</p>
          <div className="bg-slate-300 rounded-full w-10 h-10 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <p className="mx-4 text-lg">{stat}</p>
        {/* circles */}
        <div className="bg-slate-100 h-20 w-20 rounded-full absolute -bottom-5 -right-6"></div>
        <div className="bg-slate-100 h-20 w-20 rounded-full absolute -left-5 -top-6 z-0"></div>
      </div>
    </>
  );
};

StatsCard.propTypes = {
  title: propTypes.string,
  stat: propTypes.string,
  icon: propTypes.element,
};
export default StatsCard;
