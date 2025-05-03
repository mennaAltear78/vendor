import React from "react";

function SkeletonTableView() {
  return (
    <div className="p-4">
      <div className="w-full overflow-hidden">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr>
              {Array(10)
                .fill()
                .map((_, index) => (
                  <th
                    key={`header-${index}`}
                    className="p-2 border bg-gray-100 text-left mb-4 text-sm font-medium text-gray-700"
                  >
                    <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4 mx-auto"></div>
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {Array(20)
              .fill()
              .map((_, rowIndex) => (
                <tr
                  key={`row-${rowIndex}`}
                  className="bg-white hover:bg-gray-50"
                >
                  {Array(10)
                    .fill()
                    .map((_, colIndex) => (
                      <td
                        key={`cell-${rowIndex}-${colIndex}`}
                        className="p-2 border text-sm text-gray-600"
                      >
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SkeletonTableView;
