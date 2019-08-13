import {  notification } from 'antd';


const openNotificationWithIcon =(config)=>type => {
  notification.config({
    duration: 3,
  });
  return notification[type]({
    message:config.message,
    description:config.description,
    icon:config.icon
  });
}

export default openNotificationWithIcon
