"use client";
import { useState } from "react";
import Search from "../Search/Search";

const PageSearch = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="mt-4">
      <Search
        setSearchQuery={setSearchQuery}
        setRoomTypeFilter={setRoomTypeFilter}
        roomTypeFilter={roomTypeFilter}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default PageSearch;
