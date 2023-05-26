import { Search } from "@mui/icons-material";
import React from "react";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="キーワード検索" type="text"></input>
      </div>

      <div className="widget__widgetContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
      </div>
    </div>
  );
}

export default Widgets;
