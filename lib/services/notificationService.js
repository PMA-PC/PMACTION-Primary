export const notificationService = {
    // Request permission from the user
    requestPermission: async () => {
        if (!('Notification' in window)) {
            console.log('This browser does not support desktop notification');
            return false;
        }

        const permission = await Notification.requestPermission();
        return permission === 'granted';
    },

    // Check if permission is granted
    hasPermission: () => {
        return 'Notification' in window && Notification.permission === 'granted';
    },

    // Send a notification immediately
    sendNotification: (title, options = {}) => {
        if (notificationService.hasPermission()) {
            const notification = new Notification(title, {
                icon: '/favicon.ico', // Assuming we have one, or use a default
                badge: '/favicon.ico',
                ...options
            });

            notification.onclick = () => {
                window.focus();
                notification.close();
            };
        }
    },

    // Schedule a notification (simple timeout for MVP)
    // In a real PWA, this would use a Service Worker + Push API
    scheduleNotification: (title, options, delayMs) => {
        if (notificationService.hasPermission()) {
            setTimeout(() => {
                notificationService.sendNotification(title, options);
            }, delayMs);
        }
    }
};
