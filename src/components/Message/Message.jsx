import React, {memo} from 'react'
import Image from "next/image";
import TextMessage from "../MessageText/TextMessage";
import timeago from "../../../helpers/timeago";
import styles from "./message.module.css";

const Message = ({ profilePicture, text, createdAt, senderId, myId, ref }) => {

  return (
    <>
    {senderId === myId ? (
      <div className={styles.container_send_message}>
        <div className={styles.send_message}>
          <TextMessage
            text={text}
            created={timeago(createdAt)}
            />
        </div>
        </div>
      ) : (
        <div className={styles.container_recived_message}>

        <div className={styles.recived_message}>
          <TextMessage
            className={styles.recived_message}
            text={text}
            created={timeago(createdAt)}
            />
        </div>
        </div>
      )}
      </>
  );
};
export default memo(Message);
