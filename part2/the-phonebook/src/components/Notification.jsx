const Notification = ({ notification }) => {
  if (notification === null) {
    return null;
  }
  const message = notification.message;
  const color = notification.color;

  return <div className={`notification ${color}`}>{message}</div>;
};

export default Notification;
