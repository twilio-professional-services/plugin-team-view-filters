import { Manager } from '@twilio/flex-ui';

const manager = Manager.getInstance();

export const isAvailableActivity = (activity) => {
  if (!activity) {
    return false;
  }

  const activityMap = manager.store.getState().worker.activities;
  const activities = activityMap ? Array.from(activityMap.values()) : [];

  const matchingActivity = activities.find(a => a.sid === activity.sid);
  
  return matchingActivity ? matchingActivity.available : false;
};

export const isOnCallActivity = (activity) => {
  if (!activity) {
    return false;
  }

  const onCallActivities = [
    'On A Call',
  ];

  return onCallActivities.map(a => a.toLowerCase()).includes(activity.friendly_name.toLowerCase());
};

export const isAwayActivity = (activity) => {
  if (!activity) {
    return false;
  }

  const awayPrefix = 'Away';

  return activity.friendly_name.toLowerCase().startsWith(awayPrefix.toLowerCase());
};

export const isOfflineActivity = (activity) => {
  if (!activity) {
    return false;
  }

  const { taskrouter_offline_activity_sid } = manager.serviceConfiguration;
  return (
      (taskrouter_offline_activity_sid && taskrouter_offline_activity_sid === activity.sid) ||
      activity.friendly_name === "Offline"
  );
};
