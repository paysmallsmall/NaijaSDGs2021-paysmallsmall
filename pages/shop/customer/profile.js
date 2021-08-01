import React from "react";
import { Card, Container } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import styles from "../../../styles/shop/customer/Profile.module.css";

// export const getServerSideProps = async () => {
//   // const state = store.getState();
// };

const Profile = () => {
  return (
    <div className={styles.profile}>
      <section className={styles.user}>
        <Container>
          <div className={styles.content}>
            <div className={styles.left}>
              <div />
            </div>
            <div className={styles.right}>
              <div className={styles.personal}>
                <div className={styles.name}>Dino Rhythms</div>
                <div className={styles.status}>
                  <div className={styles.verification}>
                    <BsCheckCircle /> Verified
                  </div>
                  <div className={styles.date}>
                    July 7, 2021 | Expires Dec 6, 2021
                  </div>
                </div>
                <div className={styles.phone}>
                  <MdPhoneInTalk /> +234 802 283 5496
                </div>
                <div className={styles.email}>
                  <MdEmail /> larrysnet2001@gmail.com
                </div>
                <div className={styles.address}>
                  <div>
                    <FaLocationArrow />
                  </div>
                  <div>
                    10, Ayoola Balogun Street, Off Ademoye Street, Ikotun, Idimu
                    Road.
                    <br />
                    Ikotun, Lagos,
                    <br />
                    Nigeria.
                  </div>
                </div>
                <div className={styles.limits}>
                  <Card className={styles.box}>
                    <Card.Body>
                      <div className={styles.name}>Class</div>
                      <div className={styles.value}>Diamond</div>
                    </Card.Body>
                  </Card>
                  <Card className={styles.box}>
                    <Card.Body>
                      <div className={styles.name}>Credit</div>
                      <div className={styles.value}>10000</div>
                    </Card.Body>
                  </Card>
                  <Card className={styles.box}>
                    <Card.Body>
                      <div className={styles.name}>Limit</div>
                      <div className={styles.value}>10000</div>
                    </Card.Body>
                  </Card>
                </div>
                <hr />
                <div className={styles.company}>
                  <div className={styles.header}>Current Employer</div>
                  <div className={styles.companyname}>
                    CDK Integrated Industries <BsCheckCircle color="green" />{" "}
                    <span className="text-success">Verified</span>
                  </div>
                  <div className="d-flex">
                    <FaLocationArrow className="mt-2" />
                    <div className="ml-2">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                      <br />
                      Lagos, Nigeria.
                    </div>
                  </div>
                  <div className={styles.phone}>
                    <MdPhoneInTalk /> +234 802 283 5496
                  </div>
                  <div className={styles.email}>
                    <MdEmail /> info@cdkindustries.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

Profile.layout = "customer";

export default Profile;
