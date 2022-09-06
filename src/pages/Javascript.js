import React, { useState, useEffect } from "react";
import axios from "axios";

const Javascript = () => {
  const [topic, setTopics] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchSubject = async () => {
      const res = await axios.get(`http://localhost:1234/subjects`);
      res.data.map((sub) => {
        if (sub.title === "JavaScript Concepts") {
          setTitle(sub.title);
          setTopics(sub.topics);
        }
      });
    };
    fetchSubject();
  }, []);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-12 mb-3">
          <h1>{title}</h1>
        </div>
        <div className="col-lg-12">
          {topic.map((items, index) => {
            return (
              <p>
                {index}. {items}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Javascript;
