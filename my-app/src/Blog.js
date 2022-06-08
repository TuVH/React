import React from "react";
import useHover from "./hooks/useHover";
import useLinkNewTab from "./hooks/useLinkNewTab";

const Blog = () => {
  const { blogRef } = useLinkNewTab();
  const { hover, nodeRef } = useHover();
  console.log(hover);
  return (
    <div ref={blogRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        nihil consequuntur, impedit, facilis vel natus aliquid ducimus odio at
        quaerat qui suscipit quibusdam placeat repellat assumenda atque
        dignissimos numquam! Et!
        <a
          href="https://google.com"
          className={`underline ${hover ? "text-green-400" : ""}`}
          ref={nodeRef}
        >
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        nihil consequuntur, impedit, facilis vel natus aliquid ducimus odio at
        quaerat qui suscipit quibusdam placeat repellat assumenda atque
        dignissimos numquam! Et!
        <a href="https://google.com" className="underline">
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        nihil consequuntur, impedit, facilis vel natus aliquid ducimus odio at
        quaerat qui suscipit quibusdam placeat repellat assumenda atque
        dignissimos numquam! Et!
        <a
          href="https://google.com"
          className={`underline ${hover ? "text-green-400" : ""}`}
        >
          google.com
        </a>
        ?
      </p>
    </div>
  );
};

export default Blog;
