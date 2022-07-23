import React from "react";
import "./Style.css";

function Feature() {
  return (
    <div className="feature--container flex flex-col p-6 py-14 my-10 items-center justify-center gap-4">
      <hr className="w-1/4 mx-auto" />
      <h2 className="text-3xl">We're different</h2>
      <div className="feature--wrapper flex justify-center items-center gap-4">
        <div className="feature--card flex flex-col justify-center items-center text-center gap-4 p-4 md:justify-start md:items-start md:text-left">
          <img src="./images/icon-snappy-process.svg" alt="" />
          <h3>Snappy Process</h3>
          <p>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>
        <div className="feature--card flex flex-col justify-center items-center text-center gap-4 p-4 md:justify-start md:items-start md:text-left">
          <img src="./images/icon-affordable-prices.svg" alt="" />
          <h3>Affordable Prices</h3>
          <p>
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className="feature--card flex flex-col justify-center items-center text-center gap-4 p-4 md:justify-start md:items-start md:text-left">
          <img src="./images/icon-people-first.svg" alt="" />
          <h3>People First</h3>
          <p>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
