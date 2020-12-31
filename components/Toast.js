const Toast = ({ msg, handleShow, bgColor }) => {
  return (
    <div
      className={`toast show position-fixed text-light ${bgColor} p-5`}
      style={{ bottom: "5px", right: "5px", zIndex: 9, minWidth: "300px" }}
    >
      <div className={`toast-header ${bgColor} text-light`}>
        <strong className="mr-auto text-primary">Title</strong>
        <button
          type="button"
          className="ml-2 mb-1 closetext-light"
          data-dismiss="toast"
          style={{ outline: "none" }}
          onClick={handleShow}
        >
          X
        </button>
      </div>
      <div className="toast-body">Message</div>
    </div>
  );
};

export default Toast;
