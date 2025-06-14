

function BedTypeView({ beds }) {
    return (
        <div>
            <div className="flex mt-[5px] ">
                <div className="flex flex-wrap sm:text-sm text-[10px] gap-2 mt-[-14px]">
                    {beds.map((bed) => (
                        <div className="bg-[#ffa60065] text-[orange] px-[3px] sm:text-[14px] text-[10px] rounded-[3px]">
                            {bed.count} {bed.type}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BedTypeView
