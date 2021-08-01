import React, { useState } from "react";
import { Table } from "react-bootstrap";
import styles from "../../styles/shop/customer/components/Order.module.css";
import { PrimaryButton } from "../common";

const Order = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={styles.orderbox}>
      <div className={styles.order}>
        <div className={styles.image}>
          <img src="/images/products/Samsung-Galaxy-J6.jpg" alt="" />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>Samsung and ...</div>
          <div className={styles.id}>Order #146506564</div>
        </div>
        <div className={styles.price}>N 95000</div>
        <div className={styles.date}>09-07-2021</div>
        <div className={styles.status}>Pending</div>
        <div className={styles.more}>
          <PrimaryButton
            className="pl-3 pr-3 pt-1 pb-1"
            onClick={() => setShowMore(!showMore)}>
            {showMore ? " Less " : "More"}
          </PrimaryButton>
        </div>
      </div>
      {showMore && (
        <div className={styles.history}>
          <div className={styles.items}>
            <p className={styles.head}>Items</p>
            <Table hover size="sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Vendor</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#332672</td>
                  <td>Oraimo ear pod</td>
                  <td>Ariyo Stores</td>
                  <td className="text-right">N 5000</td>
                </tr>
                <tr>
                  <td>#356699</td>
                  <td>Samsung Galaxy</td>
                  <td>Dino's Nig Ltd</td>
                  <td className="text-right">N 85000</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className={styles.deliveries}>
            <p className={styles.head}>Delivery</p>
            <div className={styles.delivery}>
              <div>50kg</div>
              <div>10, Ayoola Balogun Street, Ikotun, Lagos</div>
              <div>+2348022835496</div>
              <div>N 5000</div>
            </div>
          </div>
          <div className={styles.payments}>
            <p className={styles.head}>Payments</p>
            <Table hover size="sm">
              <thead>
                <tr>
                  <th>Pay Day</th>
                  <th>Paid Day</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Interest</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.paid}>
                  <td>June 30th, 2021</td>
                  <td>June 30th, 2021</td>
                  <td>Paid</td>
                  <td>N 30000</td>
                  <td>0%</td>
                  <td className="text-right">N 30000</td>
                </tr>
                <tr className={styles.failed}>
                  <td>July 5th, 2021</td>
                  <td>July 10th, 2021</td>
                  <td>Paid</td>
                  <td>N 30000</td>
                  <td>5%</td>
                  <td className="text-right">N 31000</td>
                </tr>
                <tr>
                  <td>July 30th, 2021</td>
                  <td>July 30th, 2021</td>
                  <td>Pending</td>
                  <td>N 35000</td>
                  <td>0%</td>
                  <td className="text-right">N 35000</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className={styles.payments}>
            {/* <p className={styles.head}>Total</p> */}
            <Table hover size="sm">
              <thead>
                <tr>
                  <th colSpan={5}>Total</th>
                  <th className="text-right">N 95000</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5}></td>
                  <td className="text-right"></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
