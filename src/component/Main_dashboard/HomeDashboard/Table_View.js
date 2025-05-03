import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import image from "../../../Assets/Image.svg";
import arrowDown from "../../../Assets/ArrowDown.svg";
import arrowUp from "../../../Assets/ArrowUP.svg";
import DotMenu from "./DotMenu";
import SkeletonTableView from "../../Skeletons/SkeletonTableView";

const Table_View = ({ data: data1, isLoading, error }) => {
  // Log data for debugging
  console.log(data1, "data");

  // Define data using useMemo with fallback
  const data = useMemo(
    () =>
      data1?.data?.hotels?.map((hotel) => ({
        id: hotel.id, // For DotMenu and potential PROPERTY ID column
        name: hotel.name,
        type: hotel.type,
        description: hotel.description,
        images: hotel.primary_images,
        country: hotel.location?.country || "N/A",
        city: hotel.location?.city || "N/A",
        languages: Array.isArray(hotel.language_spoken)
          ? hotel.language_spoken.join(", ") || "N/A"
          : hotel.language_spoken || "N/A", // Handle non-array cases
        facilities: Array.isArray(hotel.facilities)
          ? hotel.facilities.join(", ") || "N/A"
          : hotel.facilities || "N/A", // Handle non-array cases
        ratings_average: hotel.ratings_average || "N/A",
        ratings_quantity: hotel.ratings_quantity || 0,
        is_completed: hotel.is_completed ? "Active" : "Inactive",
        promocode_available: hotel.promocode_available ? "Available" : "None",
      })) || [], // Fallback to empty array
    [data1]
  );

  // Define columns using useMemo
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "checkbox",
        disableSortBy: true,
        Cell: () => (
          <input
            type="checkbox"
            aria-label="Select row"
            className="cursor-pointer"
          />
        ),
      },
      {
        Header: "IMAGE",
        accessor: "images",
        disableSortBy: true,
        Cell: ({ value }) => (
          <div className="flex w-full justify-center">
            <img
              src={Array.isArray(value) ? value[0] || image : value || image}
              alt="Property image"
              className="w-12 h-12 rounded-[15px] object-cover"
              loading="lazy"
            />
          </div>
        ),
      },
      {
        Header: "PROPERTY TYPE",
        accessor: "type",
        Cell: ({ value }) => (
          <div className="flex justify-center">
            <span className="bg-[#ffb30041] text-orange-500 p-[5px] text-[10px] rounded-[5px]">
              {value || "N/A"}
            </span>
          </div>
        ),
      },
      {
        Header: "PROPERTY NAME",
        accessor: "name",
        Cell: ({ value }) => (
          <span className="text-gray-500">{value || "N/A"}</span>
        ),
      },
      {
        Header: "DESCRIPTION",
        accessor: "description",
        Cell: ({ value }) => (
          <span className="text-gray-500">{value || "N/A"}</span>
        ),
      },
      {
        Header: "LANGUAGE SPOKEN",
        accessor: "languages",
        Cell: ({ value }) => <span className="text-gray-500">{value}</span>,
      },
      {
        Header: "ROOMS",
        accessor: "rooms",
        Cell: () => <span className="text-gray-500">N/A</span>,
      },
      {
        Header: "FACILITIES",
        accessor: "facilities",
        Cell: ({ value }) => (
          <span className="bg-[#0000ff41] text-blue-600 text-[12px] p-[1px] rounded-sm">
            {value}
          </span>
        ),
      },
      {
        Header: "PROMOCODES",
        accessor: "promocode_available",
        Cell: ({ value }) => (
          <div className="w-full justify-center">
            <span className="bg-[#ffa2004b] border-solid border border-orange-400 text-[#ff8800e4] text-[12px] p-[3px] rounded-[6px]">
              {value}
            </span>
          </div>
        ),
      },
      {
        Header: "STATUS",
        accessor: "is_completed",
        Cell: ({ value }) => (
          <div className={`   ${ value === "Active" ? "bg-[#25c7255e]" : "bg-[#535353b7]"}
               flex items-center border-solid border-[green] w-full justify-center gap-2 bg-[#00ff2a41] border border-[#33f033f7] rounded-[5px] p-[3px]`}>
            <div
              className={`${
                value === "Active" ? "bg-[#23e623d7]" : "bg-[#535353b7]"
              } rounded-full  w-[10px] h-[10px]`}
            />
            <span
              className={`${
                value === "Active" ? "text-[#17a017]" : "text-[#000000d7]"
              } text-[12px]`}
            >
              {value}
            </span>
          </div>
        ),
      },
      {
        Header: "ACTIONS",
        accessor: "id",
        disableSortBy: true,
        Cell: ({ value }) => (
          <div className="w-full justify-center">
            <span className="text-[30px] cursor-pointer">
              <DotMenu id={value} />
            </span>
          </div>
        ),
      },
    ],
    []
  );

  // Initialize table with react-table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  // Early returns for loading and error states
  if (isLoading) {
    return <SkeletonTableView />;
  }
  if (error) {
    return (
      <div className="h-screen font-usedFont text-[30px] flex justify-center items-center w-full m-auto">
        NOT FOUND...{error.response}
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          className="w-full border-collapse border border-gray-300 rounded-lg shadow-md"
          aria-label="Properties table"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="p-2 border text-left text-[9px] flex justify-center font-medium text-gray-700 md:table-cell"
                    key={column.id}
                  >
                    <div className="flex sm:items-center sm:justify-center gap-3">
                      <span className="text-blue-600">
                        {column.render("Header")}
                      </span>
                      {!column.disableSortBy && (
                        <div className="flex flex-col w-[10px]">
                          <img
                            src={arrowUp}
                            className="cursor-pointer"
                            alt={
                              column.isSorted && !column.isSortedDesc
                                ? "Sort ascending"
                                : "Sort"
                            }
                          />
                          <img
                            src={arrowDown}
                            className="cursor-pointer"
                            alt={
                              column.isSorted && column.isSortedDesc
                                ? "Sort descending"
                                : "Sort"
                            }
                          />
                        </div>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <React.Fragment key={row.id}>
                  <tr
                    {...row.getRowProps()}
                    className="md:table-row bg-white hover:bg-gray-50 transition-colors flex flex-col mb-4 md:mb-0"
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="p-2 border md:border-0 flex md:table-cell text-sm text-gray-600 before:font-semibold before:content-[attr(data-label)] before:mr-2 md:before:content-none"
                        data-label={cell.column.Header}
                        key={cell.column.id}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                  {index < rows.length - 1 && (
                    <tr className="md:table-row">
                      <td
                        colSpan={columns.length}
                        className="p-0 md:table-cell"
                      >
                        <hr className="w-full border-gray-300 my-2" />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(Table_View);
