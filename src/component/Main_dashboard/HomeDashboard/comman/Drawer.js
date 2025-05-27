export function RightDrawer({ Component, open, setOpen }) {
    return (
      <div>
        {open && (
          <div
            className="fixed inset-0 bg-[#00000025] z-40 "
            onClick={() => setOpen(false)}
          />
        )}
        <div
          className={`fixed top-0 bg-white right-0 sm:w-[780px] h-full  bg-background z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto`} // Added overflow-y-auto
        >
          <Component />
        </div>
      </div>
    );
  }
