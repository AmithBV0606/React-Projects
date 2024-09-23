import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <>
      <div className="bg-gray-300 p-4 space-y-4">
        <div>
          User : {userid}   
        </div>

        <div className="ml-60">
          <img
            src="https://img.freepik.com/free-vector/error-404-page-found-concept-with-cartoon-man_107791-12153.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default User;
