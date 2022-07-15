const LoadingSkeleton = (props) => {
  return (
    <div
      className="skeleton"
      style={{ weight: props.weight || "100%", height: props.height || "100%",marginBottom : props.marginBottom}}
    ></div>
  );
};
export default LoadingSkeleton;
