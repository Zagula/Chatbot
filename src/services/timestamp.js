function twoDigits(num) {
    return (num < 10) ? "0" + num : num;
}
export default function timestamp() {
    let date = new Date();
    return `${twoDigits(date.getHours())}:${twoDigits(date.getMinutes())}`;
}