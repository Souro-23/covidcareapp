import React, { useEffect, useState } from 'react'
import firebase from "../../Firebase/FirebaseConfig";
import { locations } from "../../Constants/location";
import { LoadingOutlined } from "@ant-design/icons";
import "firebase/firestore";
import { Button, Select, Spin, Row, Col } from 'antd';
import Infinitescroll from "react-infinite-scroll-component";
import classes from "../../Containers/RegistrationForm.module.css";
import InfoCard from '../InfoCard/InfoCard';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const { Option } = Select;


var db = firebase.firestore();
const LIMIT = 15



export default function InfiniteScroll({ database }) {

    const [list, setList] = useState([])
    const [loadingData, setLoadingData] = useState(true);
    const [location, setLocation] = useState("");
    const [hasMore, setHasMore] = useState(true);
    const [lastDocRef, setLastDocRef] = useState()




    useEffect(() => {
        // Firebase initial fetch

        fetchData()
    }, [])



    // Sorting accourding to location 
    const onLocationChange = (value) => {
        console.log(value)
            if (value === "Entire Delhi/NCR" || value === "Entire Delhi") {
              fetchData()
              setLocation("");
              return;
            }
            setLocation(value);
            fetchDataByLocation(value)
    };
    const fetchDataByLocation = (location) =>{
        console.log("searching")
        setList([])
        db.collection(database).where("location","==",location).orderBy("timestamp", "desc").limit(LIMIT)
            .get()
            .then((querySnapshot) => {
                var newlist = []
                querySnapshot.forEach((doc) => {
                    newlist.push(doc.data());
                })
                setList(newlist)
                var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
                console.log(lastVisible)
                setLastDocRef(lastVisible);
            })

            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }
    const fetchMoreByLocation = ()=>{
        db.collection(database).where("location" , "==", location).orderBy("timestamp", "desc").startAfter(lastDocRef).limit(LIMIT)
            .get()
            .then((querySnapshot) => {
                console.log("fetchMore", querySnapshot.docs.length, "data fetched")
                var newlist = []
                if (querySnapshot.docs.length === 0) {
                    setHasMore(false)
                    return
                }
                querySnapshot.forEach((doc) => {
                    newlist.push(doc.data());
                })

                setList([...list, ...newlist])
                var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
                setLastDocRef(lastVisible);
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

    }







    const fetchData = () => {
        db.collection(database).orderBy("timestamp", "desc").limit(LIMIT)
            .get()
            .then((querySnapshot) => {

                var newlist = []
                querySnapshot.forEach((doc) => {
                    newlist.push(doc.data());
                })
                setList(newlist)
                var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
                setLastDocRef(lastVisible);
            })

            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }


    const fetchMore = () => {
        db.collection(database).orderBy("timestamp", "desc").startAfter(lastDocRef).limit(LIMIT)
            .get()
            .then((querySnapshot) => {

                console.log("fetchMore", querySnapshot.docs.length, "data fetched")
                var newlist = []
                if (querySnapshot.docs.length === 0) {
                    setHasMore(false)
                    return
                }
                querySnapshot.forEach((doc) => {
                    newlist.push(doc.data());
                })

                setList([...list, ...newlist])
                var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
                setLastDocRef(lastVisible);
            })

            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }

    return (

        <>
            <div className={classes.select}>
                <Select
                    placeholder='Select Location'
                    style={{ width: "100%" }}
                    listHeight={570}
                    onChange={onLocationChange}>
                    {locations.map((loc, index) => {
                        return <Option key={index} value={loc}>{loc}</Option>;
                    })}
                </Select>
            </div>
            <Infinitescroll
                dataLength={list.length}
                next={location==""?fetchMore:fetchMoreByLocation} //To put endMessage and loader to the top.
                hasMore={hasMore}
                style={{ overflow: "none" }}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                      <b>Oops! You have seen it all</b>
                    </p>
                  }
                loader={<Spin style={{display:"flex", justifyContent:"center", marginBottom:"20px", marginTop:"20px"}} indicator={antIcon} />}pc
            > <Row justify='center' gutter={[8, 8]}>
                    {list.map((item, index) => (
                        <Col key={index} lg={7} md={8} sm={15} xs={24}>
                            <InfoCard
                                {...item}
                            />
                        </Col>
                    ))}
                </Row>
            </Infinitescroll>
        </>

    )
}
