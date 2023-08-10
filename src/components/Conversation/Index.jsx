import ChatUser from "../ChatUser/Index"

const Conversation = ({ data }) => {
  // const {imagen, name, status } = data

  return (
    <div style={{ display: "flex", borderBottom: "1px solid #e6e6e6", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingRight: "20px" }}>
      <ChatUser />
      <button>Eliminar</button>

    </div>
  );
};

export default Conversation;
