import { createTheme, Pagination, ThemeProvider } from "@mui/material";
import React from "react";

const theme = createTheme({
    palette:{
        mode: 'dark',
    },
});
const CustomPagination = ({ setPage, numbOfPage=1}) => {
  const hanglePageOnChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={theme}>
      <Pagination
        onChange={(event) => hanglePageOnChange(event.target.textContent)}
        count={numbOfPage}
        sx={{color: "#000000"}}
        color="primary"
      />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
