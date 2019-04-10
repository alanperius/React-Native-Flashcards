import {AsyncStorage} from 'react-native'
import {Notifications, Permissions} from 'expo'

const NOTIFICATION_KEY = 'Flashcards:notification'


export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync())

}

function createNotification() {
    return {
        title: 'You must study today!',
        body: "Don't forget to study for today",
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }

}

export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(21)
                            tomorrow.setMinutes(16)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}