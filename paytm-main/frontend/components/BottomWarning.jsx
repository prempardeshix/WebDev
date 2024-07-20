import { Link } from "react-router-dom";

export function BottomWarning({ label, to, buttonText }) {
  return (
    <div className="py-2 font-medium text-sm flex justify-center">
      <div className="">{label}</div>
      <div>
        <Link className="pointer underline pl-1 cursor-pointer" to={to}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
