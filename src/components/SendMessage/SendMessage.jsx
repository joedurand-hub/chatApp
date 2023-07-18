import React, {memo} from 'react'
import styles from "./sendMessage.module.css"

const SendMessage = ({message, handleSubmit}) => {
  return (
    <div className={styles.send_container}>
      {/* <Send value={message} submit={handleSubmit}/> */}

    </div>
  )
}

export default memo(SendMessage);