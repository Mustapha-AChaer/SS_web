const genericNotification = {
    title: " ",//
    message: " ", //this notification must not be used, instead you need want to spread a new notification object on top of this
    type: "default",
    insert: "top",
    container: "top-left",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
        duration: 1000 * 10,
        onScreen: false
    }
}

export const successNotification = (title, message) => ({
    ...genericNotification,
    title,
    message,
    type: "bridge-success",

});

export const errorNotification = (title, message) => ({
    ...genericNotification,
    title,
    message,
    type: "bridge-error"
});

export const custom_notification_types = [
    {
        htmlClasses: ['notification__item--bridge-success'],
        name: 'bridge-success'
    },
    {
        htmlClasses: ['notification__item--bridge-error'],
        name: 'bridge-error'
    }
];