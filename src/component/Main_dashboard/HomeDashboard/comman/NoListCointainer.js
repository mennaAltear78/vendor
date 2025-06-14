import { useNavigate } from "react-router-dom";

function NoListCointainer({ name, link ,List=true}) {
  const navigate = useNavigate();
  return (
    <div className="text-center mb-3 py-12 bg-white rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        No {name} found <span className="text-[red]">!</span>
      </h3>
{  List?   <p className="text-gray-600 mb-4">
        Try adjusting your search or filter criteria
      </p>:null}
      <button
        onClick={() => {
          navigate(link);
        }}
        className="bg-[blue] border-none cursor-pointer  text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
       {!List?"Upload your Images": `Create Your First ${name}`}
      </button>
    </div>
  );
}

export default NoListCointainer;
