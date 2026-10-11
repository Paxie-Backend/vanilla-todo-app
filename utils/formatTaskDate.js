export default function formatTaskDate(timestamp) {
    console.log('Timestamp value:', timestamp); // Check if this is undefined or an invalid string
    return new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(new Date(timestamp));
}
