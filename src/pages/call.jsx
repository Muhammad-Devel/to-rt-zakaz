import { PhoneOutlined } from "@ant-design/icons";

const Call = () => {
  return (
    <>
      <button
        className="bg-green-500 rounded-full text-white h-10 py-2 px-3 md:px-4 lg:px-5 xl:px-6 w-10 md:w-40 lg:w-40 xl:w-40 flex items-center md:justify-center lg:justify-center xl:justify-center"
        type="button"
      >
        <PhoneOutlined className="mr-2" />
        <span className="hidden md:inline whitespace-nowrap">
          (91) 765-43-21
        </span>
      </button>
    </>
  );
};
export default Call;
