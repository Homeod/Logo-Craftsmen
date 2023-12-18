import Itemsfooter from "./Itemsfooter";
import { Contacts, Insights, Services, Company } from "../constents";

const Itemscontainerfooter = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Itemsfooter Links={Contacts} title="Contacts" />
      <Itemsfooter Links={Insights} title="Insights" />
      <Itemsfooter Links={Services} title="Services" />
      <Itemsfooter Links={Company} title="Company" />
    </div>
  );
};

export default Itemscontainerfooter;
