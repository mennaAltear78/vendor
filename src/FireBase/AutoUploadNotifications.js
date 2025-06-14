import { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase";
 // غيري المسار حسب مكان ملف firebase.js

const mockNotifications = [
  {
    id: 1,
    type: 'message',
    title: 'New message from Sarah',
    message: 'Hey! Just wanted to check in and see how your project is going. Let me know if you need any help!',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    read: false,
  },
  {
    id: 2,
    type: 'like',
    title: 'Someone liked your post',
    message: 'John Smith and 12 others liked your recent post about React development.',
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    read: false,
  },
  {
    id: 3,
    type: 'follow',
    title: 'New follower',
    message: 'Emma Wilson started following you. Check out their profile!',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    read: false,
  },
  {
    id: 4,
    type: 'order',
    title: 'Order confirmed',
    message: 'Your order #12345 has been confirmed and will be shipped within 2-3 business days.',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    read: true,
  },
  {
    id: 5,
    type: 'warning',
    title: 'Security alert',
    message: 'We detected a new login from an unrecognized device. If this wasn\'t you, please secure your account.',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    read: false,
  },
  {
    id: 6,
    type: 'success',
    title: 'Payment successful',
    message: 'Your payment of $29.99 for Premium subscription has been processed successfully.',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    read: true,
  },
  {
    id: 7,
    type: 'info',
    title: 'System maintenance',
    message: 'Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM EST. Some features may be temporarily unavailable.',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    read: true,
  },
  {
    id: 8,
    type: 'message',
    title: 'Team meeting reminder',
    message: 'Don\'t forget about the team standup meeting tomorrow at 10:00 AM. The Zoom link is in your calendar.',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    read: true,
  },
];

export default function AutoUploadNotifications() {
  useEffect(() => {
    const uploadNotifications = async () => {
      const collectionRef = collection(db, "notifications");

      for (const notification of mockNotifications) {
        try {
          await addDoc(collectionRef, notification);
          console.log("Added:", notification.title);
        } catch (err) {
          console.error("Error adding:", notification.title, err);
        }
      }
    };

    uploadNotifications();
  }, []);

  return null; // مفيش واجهة، مجرد كود بيشتغل أول ما الصفحة تفتح
}
