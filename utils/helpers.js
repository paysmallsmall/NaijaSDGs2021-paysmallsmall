import dayjs from "dayjs";

export const currencyFormat = (amount) => {
  return (
    "₦" +
    parseFloat(amount)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  );
};

export const formatDate = (date) => {
  return dayjs(date).format("MMM DD, YYYY");
};

export const formatDateWithTime = (date) => {
  return dayjs(date).format("MMM DD, YYYY HH:mm:ss A");
};
