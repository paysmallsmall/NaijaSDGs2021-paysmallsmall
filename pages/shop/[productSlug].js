import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  FormControl,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import { FaFacebook, FaThumbsUp } from "react-icons/fa";
import {
  MdExpandLess,
  MdExpandMore,
  MdFavorite,
  MdFavoriteBorder,
} from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { NavSpacer, PrimaryButton } from "../../components/common";
import { Recommended } from "../../components/shop";
import { CART_ADD_ITEM } from "../../store/types/cartTypes";
import styles from "../../styles/shop/ProductPage.module.css";

const ProductSlug = () => {
  const [collapse, setCollapse] = useState({
    details: true,
    spec: true,
    reviews: false,
  });
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "/images/products/mobile-phone-png-2-Transparent-Images 5.png",
    "/images/products/Samsung-Galaxy-J6.jpg",
    "/images/products/rty 3.png",
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {};
  }, []);

  const addToCart = () => {
    try {
      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          id: 1,
          quantity: 2,
          unitPrice: 5000,
          subTotal: 10000,
          image: "/images/products/samsung-tv-png-samsung-tv-serie-6.jpg",
          name: "Samsung Tv Series 6",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const Likable = (id) => {
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
      try {
        setLiked(!liked);
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <>
        {liked ? (
          <MdFavorite onClick={handleLike} className={styles.liked} size="22" />
        ) : (
          <MdFavoriteBorder
            onClick={handleLike}
            className={styles.unliked}
            size="22"
          />
        )}
      </>
    );
  };

  return (
    <div className={styles.productpage}>
      <NavSpacer />
      <header>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className={styles.images}>
                <div className={styles.left}>
                  {images &&
                    images.map((image, index) => (
                      <div
                        onClick={() => setSelectedImage(index)}
                        key={index}
                        className={styles.frame}>
                        <img src={image} alt="" />
                      </div>
                    ))}
                </div>
                <div className={styles.right}>
                  <img src={images[selectedImage]} alt="" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={styles.right}>
                <div className={styles.top}>
                  <div className="d-flex align-items-center">
                    <Likable />
                    <h1 className={`${styles.name} ml-2`}>Samsung Phone</h1>
                  </div>
                  <div className={styles.brand}>
                    <span>Brand:</span>Samsung{" "}
                  </div>
                  <div className={styles.id}>
                    <span>Product Id:</span>1245454744534{" "}
                  </div>
                  <div className={styles.rating}>
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                      size={18}
                      activeColor="#ffd700"
                    />
                  </div>
                </div>
                <div className={styles.price}>
                  <div className={styles.new}>N 90,000</div>
                  <div className={styles.old}>
                    <span className={styles.price}>N 100,000 </span>
                    <span className={styles.perc}>-10%</span>
                  </div>
                </div>
                <div className={styles.addtocart}>
                  <div>
                    <ButtonGroup aria-label="">
                      <Button
                        variant="outline-primary"
                        onClick={() =>
                          quantity === 0 ? "" : setQuantity(quantity - 1)
                        }
                        className={`${styles.addsumbtn} pl-3 pr-3`}>
                        -
                      </Button>
                      <FormControl
                        className={styles.quantity}
                        aria-label="quantity"
                        onChange={(e) => setQuantity(+e.target.value)}
                        defaultValue={quantity}
                        aria-describedby="quantity"
                      />
                      <Button
                        variant="outline-primary"
                        onClick={() => setQuantity(quantity + 1)}
                        className={`${styles.addsumbtn} pl-3 pr-3`}>
                        +
                      </Button>
                    </ButtonGroup>
                    <div className="d-flex">
                      <PrimaryButton className="mt-3" onClick={addToCart}>
                        Add to Cart
                        <CgShoppingCart className="ml-2" size="16" />
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
                <div className={styles.share}>
                  <p>Share with friends</p>
                  <div>
                    <AiFillTwitterCircle
                      className={`${styles.icon} mr-2`}
                      size="32"
                    />
                    <FaFacebook className={`${styles.icon} mr-2`} size="28" />
                    <AiFillInstagram
                      className={`${styles.icon} mr-2`}
                      size="34"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <section>
        <Container>
          <Card>
            <Card.Body className={styles.cardBody}>
              <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                <h2 className="mb-0">Meet your seller</h2>
                <PrimaryButton className="pt-1 pb-1">
                  Official Page
                </PrimaryButton>
              </div>
              <hr />
              <h3>Samsung Offical stores</h3>
              <p>
                10, Ayoola Balogun Street, Off Ademoye Street, Lagos, Nigeria.
                <br />
                +2348022826598
              </p>
              <p className="font-weight-bold mb-0">Sellers Ratings</p>
              <ReactStars
                count={5}
                value={4}
                edit={false}
                size={18}
                activeColor="#ffd700"
              />
              <PrimaryButton className="pt-1 pb-1 pl-2 pr-2 mt-2 mb-3">
                Follow
              </PrimaryButton>
            </Card.Body>
          </Card>
        </Container>
      </section>
      <section className="mt-3">
        <Container>
          <Card>
            <Card.Body className={styles.cardBody}>
              <div className="d-flex justify-content-between">
                <h2 className="mb-0">Product Details</h2>
                <div>
                  {!collapse.details && (
                    <MdExpandLess
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setCollapse({ ...collapse, details: true })
                      }
                      size="28"
                    />
                  )}
                  {collapse.details && (
                    <MdExpandMore
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setCollapse({ ...collapse, details: false })
                      }
                      size="28"
                    />
                  )}
                </div>
              </div>
              {!collapse.details && (
                <div>
                  <hr className="mt-2" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                    arcu turpis cum non malesuada. Commodo arcu orci id eu
                    sollicitudin nisl commodo ipsum. Adipiscing lacinia facilisi
                    quis magna vitae mollis curabitur ac vulputate. Quis congue
                    elementum commodo, turpis tortor faucibus malesuada.
                    Sagittis ut sed viverra id commodo ultrices diam accumsan
                    tellus. Accumsan urna id semper facilisis vestibulum montes.
                    Viverra ut netus et felis, sit at egestas viverra fringilla.
                    Tortor amet, in lacus libero. Nisl, in vehicula volutpat at.
                    Enim, volutpat at posuere felis. Pellentesque ullamcorper
                    habitasse at tellus, viverra suscipit auctor amet, egestas.
                    Laoreet ut sapien et, tincidunt parturient malesuada. Magna
                    in neque, convallis tincidunt nisl, eget faucibus. Volutpat
                    euismod et et, tellus. Molestie sed tellus, sed tincidunt
                    cursus. Malesuada tempor ultrices placerat duis turpis
                    egestas fermentum. Sem aliquet sed ut sit pharetra vulputate
                    viverra elementum. Fermentum volutpat diam et, facilisi
                    aliquet purus nunc a. Etiam sagittis mattis non sed
                    habitasse vitae.
                  </p>
                  <p>
                    ullamcorper habitasse at tellus, viverra suscipit auctor
                    amet, egestas. Laoreet ut sapien et, tincidunt parturient
                    malesuada. Magna in neque, convallis tincidunt nisl, eget
                    faucibus. Volutpat euismod et et, tellus. Molestie sed
                    tellus, sed tincidunt cursus. Malesuada tempor ultrices
                    placerat duis turpis egestas fermentum. Sem aliquet sed ut
                    sit pharetra vulputate viverra elementum. Fermentum volutpat
                    diam et, facilisi aliquet purus nunc a. Etiam sagittis
                    mattis non sed habitasse vitae.
                  </p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Container>
      </section>
      <section className="mt-3">
        <Container>
          <Card>
            <Card.Body className={styles.cardBody}>
              <div className="d-flex justify-content-between">
                <h2 className="mb-0">Specifications</h2>
                <div>
                  {!collapse.spec && (
                    <MdExpandLess
                      style={{ cursor: "pointer" }}
                      onClick={() => setCollapse({ ...collapse, spec: true })}
                      size="28"
                    />
                  )}
                  {collapse.spec && (
                    <MdExpandMore
                      style={{ cursor: "pointer" }}
                      onClick={() => setCollapse({ ...collapse, spec: false })}
                      size="28"
                    />
                  )}
                </div>
              </div>
              {!collapse.spec && (
                <div>
                  <hr />
                  <ul className="-pvs -mvxs -phm -lsn">
                    <li className="-pvxs">
                      <span className="-b">SKU</span>: GE779EL0J4U0YNAFAMZ
                    </li>
                    <li className="-pvxs">
                      <span className="-b">Color</span>: Black Red
                    </li>
                    <li className="-pvxs">
                      <span className="-b">Main Material</span>: N/A
                    </li>
                    <li className="-pvxs">
                      <span className="-b">Model</span>: SanDisk CZ50 32GB
                    </li>
                    <li className="-pvxs">
                      <span className="-b">Production Country</span>: China
                    </li>
                    <li className="-pvxs">
                      <span className="-b">Product Line</span>: supermall store
                      - COD
                    </li>
                    <li className="-pvxs">
                      <span className="-b">Size (L x W x H cm)</span>:
                      4.15x1.76x0.74
                    </li>
                    <li className="-pvxs">
                      <span className="-b">Weight (kg)</span>: 0.05
                    </li>
                  </ul>
                </div>
              )}
            </Card.Body>
          </Card>
        </Container>
      </section>
      <section className="mt-3">
        <Container>
          <Card>
            <Card.Body className={styles.cardBody}>
              <div className="d-flex justify-content-between">
                <h2 className="mb-0">Customer reviews</h2>
                <div>
                  {!collapse.reviews && (
                    <MdExpandLess
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setCollapse({ ...collapse, reviews: true })
                      }
                      size="28"
                    />
                  )}
                  {collapse.reviews && (
                    <MdExpandMore
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setCollapse({ ...collapse, reviews: false })
                      }
                      size="28"
                    />
                  )}
                </div>
              </div>
              {!collapse.reviews && (
                <div>
                  <hr />
                  <div className={styles.reviews}>
                    <div className={styles.top}>
                      <div className={styles.totalreview}>
                        <div className={styles.overall}>Overall Rating</div>
                        <div className={styles.number}>4.5</div>
                        <div className={styles.rating}>
                          <ReactStars
                            count={5}
                            value={4}
                            edit={false}
                            size={18}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div className={styles.total}>20 Reviews</div>
                      </div>
                      <div className={styles.breakdown}>
                        <div className={styles.row}>
                          <span>Excellent</span>
                          <ProgressBar
                            className={styles.progress}
                            style={{ height: "0.5rem" }}
                            variant="success"
                            now={70}
                          />
                        </div>
                        <div className={styles.row}>
                          <span>Good</span>
                          <ProgressBar
                            className={styles.progress}
                            style={{ height: "0.5rem" }}
                            variant="info"
                            now={50}
                          />
                        </div>
                        <div className={styles.row}>
                          <span>Average</span>
                          <ProgressBar
                            className={styles.progress}
                            style={{ height: "0.5rem" }}
                            variant="warning"
                            now={60}
                          />
                        </div>
                        <div className={styles.row}>
                          <span>Below Average</span>
                          <ProgressBar
                            className={styles.progress}
                            style={{ height: "0.5rem" }}
                            variant="info"
                            now={40}
                          />
                        </div>
                        <div className={styles.row}>
                          <span>Poor</span>
                          <ProgressBar
                            className={styles.progress}
                            style={{ height: "0.5rem" }}
                            variant="danger"
                            now={20}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.row}>
                        <div className={styles.image}>
                          <CgProfile size="36" />
                        </div>
                        <div className={styles.details}>
                          <Card>
                            <Card.Body>
                              <div className={styles.name}>
                                Dino Rhythms Ola
                              </div>
                              <div className={styles.date}>Jan 12, 2021</div>
                              <div className={styles.rating}>
                                <ReactStars
                                  count={5}
                                  value={4}
                                  edit={false}
                                  size={18}
                                  activeColor="#ffd700"
                                />
                              </div>
                              <div className={styles.comment}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Enim enim risus arcu,
                                consectetur mauris nisi ut penatibus in. Luctus
                                in vestibulum enim non. Sodales sit pulvinar
                                diam condimentum. Urna diam elementum vulputate
                                morbi elit pellentesque pulvinar.
                              </div>
                              <div className={styles.thumb}>
                                <FaThumbsUp />
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                      <div className={styles.row}>
                        <div className={styles.image}>
                          <CgProfile size="36" />
                        </div>
                        <div className={styles.details}>
                          <Card>
                            <Card.Body>
                              <div className={styles.name}>
                                Dino Rhythms Ola
                              </div>
                              <div className={styles.date}>Jan 12, 2021</div>
                              <div className={styles.rating}>
                                <ReactStars
                                  count={5}
                                  value={4}
                                  edit={false}
                                  size={18}
                                  activeColor="#ffd700"
                                />
                              </div>
                              <div className={styles.comment}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Enim enim risus arcu,
                                consectetur mauris nisi ut penatibus in. Luctus
                                in vestibulum enim non. Sodales sit pulvinar
                                diam condimentum. Urna diam elementum vulputate
                                morbi elit pellentesque pulvinar.
                              </div>
                              <div className={styles.thumb}>
                                <FaThumbsUp />
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card.Body>
          </Card>
        </Container>
      </section>
      <Recommended name="Recommended for you" />
    </div>
  );
};

ProductSlug.layout = "shop";

export default ProductSlug;
