function getStartPendingIntent(context) {
    var intent = new android.content.Intent(context, com.tns.broadcastreceivers.NotificationEventReceiver.class);
    intent.setAction("ACTION_START_NOTIFICATION_SERVICE");
    return android.app.PendingIntent.getBroadcast(context, 0, intent, android.app.PendingIntent.FLAG_UPDATE_CURRENT);
}

function getNotification(context) {
  var builder = new android.app.Notification.Builder(context);
    builder.setContentTitle("Multiple")
        .setAutoCancel(true)
        // .setColor(android.R.color.holo_purple)//getResources().getColor(R.color.colorAccent))
        .setContentText("Tienes preguntas de MercadoLibre")
        .setVibrate([100, 200, 100])
        .setSmallIcon(android.R.drawable.btn_star_big_on);

        // will open main NativeScript activity when the notification is pressed
    var mainIntent = new android.content.Intent(context, com.tns.NativeScriptActivity.class); 
    var pendingIntent = android.app.PendingIntent.getActivity(context,
        1,
        mainIntent,
        android.app.PendingIntent.FLAG_UPDATE_CURRENT);
    builder.setContentIntent(pendingIntent);

    var manager = context.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
    manager.notify(1, builder.build());
}

function setupNotifications(context, user, socket) {
    
    console.log("hay socket" + user)
    socket.emit("hola", user)
    socket.on('notificacion', (resultado) => {
      console.log("llego noti")
      getNotification(context)
    	})

    return socket
}

module.exports.setupNotifications = setupNotifications;
// module.exports.setupAlarm = setupAlarm;