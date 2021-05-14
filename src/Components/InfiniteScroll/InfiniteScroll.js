import React, { useEffect, useState } from "react";
import firebase from "../../Firebase/FirebaseConfig";
import { locations } from "../../Constants/location";
import { LoadingOutlined } from "@ant-design/icons";
import "firebase/firestore";
import { Select, Spin, Row, Col } from "antd";
import Infinitescroll from "react-infinite-scroll-component";
import classes from "../../Containers/RegistrationForm.module.css";
import InfoCard from "../InfoCard/InfoCard";
import {
  checkVerified,
  timeDifference,
} from "../../Containers/DoctorsList/functions";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const { Option } = Select;
const LIMIT = 15;

var db = firebase.firestore();

export default function InfiniteScroll({ database }) {
  const [list, setList] = useState([]);
  const [location, setLocation] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [lastDocRef, setLastDocRef] = useState();
  const [noData, setNoData] = useState(false);
  useEffect(() => {
    // Firebase initial fetch
    fetchData();
  }, []);

  // Sorting accourding to location
  const onLocationChange = (value) => {
    // console.log(value);
    if (value === "Entire Delhi/NCR" || value === "Entire Delhi") {
      setNoData(false);
      fetchData();
      setLocation("");
      return;
    }
    setNoData(false);
    setLocation(value);
    fetchDataByLocation(value);
  };

  const fetchDataByLocation = (location) => {
    setList([]);
    db.collection(database)
      .where("location", "==", location)
      .orderBy("timestamp", "desc")
      .limit(LIMIT)
      .get()
      .then((querySnapshot) => {
        var newlist = [];
        if (querySnapshot.docs.length === 0) {
          setNoData(true);
        }
        querySnapshot.forEach((doc) => {
          let ago = timeDifference(doc.data().timestamp);
          newlist.push({ ...doc.data(), ago: ago });
        });
        setList(checkVerified(newlist, database));
        setList(newlist);
        var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastDocRef(lastVisible);
      })

      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  const fetchMoreByLocation = () => {
    db.collection(database)
      .where("location", "==", location)
      .orderBy("timestamp", "desc")
      .startAfter(lastDocRef)
      .limit(LIMIT)
      .get()
      .then((querySnapshot) => {
        var newlist = [];
        if (querySnapshot.docs.length === 0) {
          setHasMore(false);
          return;
        }
        querySnapshot.forEach((doc) => {
          let ago = timeDifference(doc.data().timestamp);
          newlist.push({ ...doc.data(), ago: ago });
        });
        setList(checkVerified(newlist, database));
        setList([...list, ...newlist]);
        var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastDocRef(lastVisible);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  const fetchData = () => {
    db.collection(database)
      .orderBy("timestamp", "desc")
      .limit(LIMIT)
      .get()
      .then((querySnapshot) => {
        var newlist = [];
        querySnapshot.forEach((doc) => {
          let ago = timeDifference(doc.data().timestamp);
          newlist.push({ ...doc.data(), ago: ago });
        });
        setList(checkVerified(newlist, database));
        setList(newlist);
        var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastDocRef(lastVisible);
      })

      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  const fetchMore = () => {
    db.collection(database)
      .orderBy("timestamp", "desc")
      .startAfter(lastDocRef)
      .limit(LIMIT)
      .get()
      .then((querySnapshot) => {
        var newlist = [];
        if (querySnapshot.docs.length === 0) {
          setHasMore(false);
          return;
        }
        querySnapshot.forEach((doc) => {
          let ago = timeDifference(doc.data().timestamp);
          newlist.push({ ...doc.data(), ago: ago });
        });
        setList(checkVerified(newlist, database));
        setList([...list, ...newlist]);
        var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastDocRef(lastVisible);
      })

      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  return (
    <>
      <div className={classes.select}>
        <Select
          placeholder='Select Location'
          style={{ width: "100%" }}
          listHeight={570}
          onChange={onLocationChange}>
          {locations.map((loc, index) => {
            return (
              <Option key={index} value={loc}>
                {loc}
              </Option>
            );
          })}
        </Select>
      </div>
      <Infinitescroll
        dataLength={list.length}
        next={location === "" ? fetchMore : fetchMoreByLocation} //To put endMessage and loader to the top.
        hasMore={hasMore}
        style={{ overflow: "none" }}
        loader={
          <Spin
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              marginTop: "20px",
            }}
            indicator={antIcon}
          />
        }
        pc>
        {" "}
        <Row justify='center' gutter={[8, 8]}>
          {list.map((item, index) => (
            <Col key={index} lg={7} md={8} sm={15} xs={24}>
              <InfoCard {...item} type={database} />
            </Col>
          ))}
          {!list.length && noData && (
            <p>
              {database} not found for "{location}"
            </p>
          )}
        </Row>
      </Infinitescroll>
    </>
  );
}
